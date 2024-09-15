import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false); // State to check if OTP has been sent
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission based on role
    switch (role) {
      case "user":
        navigate("/user");
        break;
      case "admin":
        navigate("/admin");
        break;
      case "government":
        navigate("/govt");
        break;
      default:
        alert("Invalid role");
    }
  };

  const handleSendOtp = () => {
    // Add logic to send OTP to the provided phone number
    console.log(`Sending OTP to ${phoneNumber}`);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Add logic to verify the OTP
    console.log(`Verifying OTP: ${otp}`);
    // For now, just log the OTP
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Sign In</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="role" style={styles.label}>
            Role:
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.select}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="government">Government</option>
          </select>
        </div>

        {/* Phone number and OTP section */}
        <div style={styles.formGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={styles.input}
            placeholder="Enter your phone number"
            required
          />
          <button
            type="button"
            style={styles.otpButton}
            onClick={handleSendOtp}
          >
            Send OTP
          </button>
        </div>

        {otpSent && (
          <div style={styles.formGroup}>
            <label htmlFor="otp" style={styles.label}>
              OTP:
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={styles.input}
              placeholder="Enter the OTP"
              required
            />
            <button
              type="button"
              style={styles.verifyOtpButton}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        )}

        <button type="submit" style={styles.submitButton}>
          Sign In
        </button>
      </form>
      <div style={styles.signupText}>
        Do not have an account?{" "}
        <span style={styles.signupLink} onClick={() => navigate("/signup")}>
          Sign up
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  header: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    width: "70%", // Adjusted to cover 70% of the screen width
    maxWidth: "600px", // Ensure it doesn't get too wide on large screens
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  otpButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  verifyOtpButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  signupText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#333",
  },
  signupLink: {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;
