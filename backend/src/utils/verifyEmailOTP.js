const bcrypt = require("bcrypt");
const { NotFoundError, ApiError } = require("../utils/customErrorHandler");
const User = require("../models/user.model");
const Admin = require("../models/admin.model");
const Govt = require("../models/govt.model");
const asyncHandler = require("./asyncHandler");
const EventEmitter = require("events");
const Otp = require("../models/otp.model");
const ResponseHandler = require("./responseHandler");
const bus = new EventEmitter();

bus.setMaxListeners(20); // Increase the limit as needed

//verify email otp
const verifyEmailOTP = asyncHandler(async (req, res) => {
  const { _id, inputOTP } = req.body;
  console.log(_id);
  try {
    if (!_id || !inputOTP) {
      throw new ApiError(500, "All fields are required !");
    }

    const otpDetails = await Otp.findOne({ userId: _id });
    // console.log(otpDetails);
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

    const { userType } = otpDetails;

    if (userType === "user") {
      const user = await User.findById(_id);
      console.log(user);
      if (!user) {
        throw new NotFoundError("User not found !");
      }

      user.isEmailVerified = true;
      await user.save();
    } else if (userType === "admin") {
      const admin = await Admin.findById(_id);
      console.log(admin);
      if (!admin) {
        throw new NotFoundError("Admin not found !");
      }
    } else if (userType === "govt") {
      const govt = await Govt.findById(_id);
      console.log(govt);
      if (!govt) {
        throw new NotFoundError("Govt User not found !");
      }
    } else {
      throw new ApiError(500, "User Type Error !");
    }

    await Otp.deleteOne({ userId: _id });

    return res
      .status(200)
      .json(new ResponseHandler(201, "OTP Verified successfully !", {}));
  } catch (error) {
    throw new ApiError(500, "Something went wrong ! OTP Verification failed !");
  }
});

module.exports = {
  verifyEmailOTP,
};
