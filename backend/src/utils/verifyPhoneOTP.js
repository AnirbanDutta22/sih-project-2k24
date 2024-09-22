const bcrypt = require("bcrypt");
const { NotFoundError, ApiError } = require("./customErrorHandler");
const User = require("../models/user.model");
const asyncHandler = require("./asyncHandler");
const EventEmitter = require("events");
const Otp = require("../models/otp.model");
const ResponseHandler = require("./responseHandler");
const bus = new EventEmitter();

bus.setMaxListeners(20); // Increase the limit as needed

//verify email otp
const verifyPhoneOTP = asyncHandler(async (req, res, next) => {
  const { _id, inputOTP } = req.body;
  console.log(_id);
  try {
    if (!_id || !inputOTP) {
      throw new ApiError(500, "All fields are required !");
    }

    const otpDetails = await Otp.findOne({ userId: _id });
    console.log(otpDetails);
    if (!otpDetails) {
      throw new ApiError(404, "Invalid OTP or email !");
    }

    // checking if given OTP is valid
    const isOTPValid = await bcrypt.compare(inputOTP, otpDetails.otp);
    // console.log(isOTPValid);
    if (!isOTPValid) {
      throw new ApiError(409, "Invalid OTP !");
    }

    // Check if the OTP has expired
    if (otpDetails.expiresAt < Date.now()) {
      throw new ApiError(409, "OTP has expired !");
    }

    const user = await User.findById(_id);
    console.log(user);
    if (!user) {
      throw new NotFoundError("User not found !");
    }

    user.isPhoneVerified = true;
    user.isProfileComplete = true;
    await user.save();

    await Otp.deleteOne({ userId: _id });

    return res
      .status(200)
      .json(new ResponseHandler(201, "Phone OTP Verified successfully !", {}));
  } catch (error) {
    return next(
      new ApiError(
        500,
        "Something went wrong ! Phone OTP Verification failed !"
      )
    );
  }
});

module.exports = {
  verifyPhoneOTP,
};
