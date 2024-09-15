import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
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
    console.log(`Sending OTP to ${phoneNumber}`);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    console.log(`Verifying OTP: ${otp}`);
  };

  const greeting =
    {
      user: "Hello, User",
      admin: "Hello, Admin",
      government: "Hello, Government Official",
    }[role] || "Hello";

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.formContainer}>
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
        </div>
        <div style={styles.imageContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TqGDEZLmzospdqiDjEoFYuNddQjr5KKZGA&s"
            alt="Login"
            style={styles.image}
          />
          <div style={styles.infoTextContainer}>
            <h3 style={styles.infoHeader}>{greeting}</h3>
            <p style={styles.infoText}>
              Register with your personal details and start your journey with
              us.
            </p>
            <button
              style={styles.transparentButton}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
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
  card: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    maxWidth: "1000px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  formContainer: {
    width: "50%",
    padding: "40px",
  },
  imageContainer: {
    width: "50%",
    backgroundColor: "#ccffcc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  },
  image: {
    width: "80%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  infoTextContainer: {
    padding: "20px",
  },
  infoHeader: {
    marginBottom: "10px",
    fontSize: "18px",
    color: "#333",
  },
  infoText: {
    marginBottom: "15px",
    fontSize: "14px",
    color: "#555",
  },
  transparentButton: {
    padding: "10px",
    border: "2px solid #007bff",
    borderRadius: "4px",
    backgroundColor: "transparent",
    color: "#007bff",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center",
  },
  header: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
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
};

export default Login;
