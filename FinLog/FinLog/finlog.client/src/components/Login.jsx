import React from "react";
import "../styles/Login.css";

const Login = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const togglePassword = () => {
        const passwordInput = document.getElementById("password");
        const eyeIcon = document.getElementById("eye-icon");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        } else {
            passwordInput.type = "password";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        }
    };

    return (
        <div className="login-overlay" onClick={onClose}>
            <div
                className="login-modal"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
               
                <div className="login-icon">
                    <i className="fas fa-lock"></i>
                </div>

                <h2>Welcome Back</h2>
                <p>Please login to your account</p>

                <form>
                    <label htmlFor="email">Email Address</label>
                    <div className="input-wrapper">
                        <i className="fas fa-envelope icon"></i>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="input-highlight"
                        />
                    </div>

                    <label htmlFor="password">Password</label>
                    <div className="input-wrapper">
                        <i className="fas fa-lock icon"></i>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="input-highlight"
                        />
                        <div className="eye-icon" onClick={togglePassword}>
                            <i id="eye-icon" className="fas fa-eye-slash"></i>
                        </div>
                    </div>

                    <div className="flex-row">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#" className="forgot-password">
                            Forgot password?
                        </a>
                    </div>

                    <button type="submit" className="btn-signin">
                        Sign In
                    </button>
                </form>

                <p className="signup-text">
                    Don't have an account? <a href="#">Sign up</a>
                </p>

                <div className="divider">Or continue with</div>

                <div className="social-buttons">
                    <button className="social-btn google"
                        onClick={() => window.location.href = "https://accounts.google.com/signin"}
                    >
                        <i className="fab fa-google"></i>
                    </button>
                    <button className="social-btn facebook"
                        onClick={() => window.location.href = "https://www.facebook.com/login/"}
                    >
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="social-btn twitter"
                        onClick={() => window.location.href = "https://twitter.com/login"}
                    >
                        <i className="fab fa-twitter"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
