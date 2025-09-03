import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });


 const {storeTokenInLS}  = useAuth();

const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", user);
    // Add your login logic here

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login form",response);

      if (response.ok) {
         const res_data = await response.json();
        alert("Login successful!");
        storeTokenInLS(res_data.token);
       //localStorage.setItem("token" , res_data.token);
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert("Login failed. Please check your credentials.");
        console.error("Login failed with status:", response.status);
      }
    }
    catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        {/* Decorative shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        <div className="login-grid">
          {/* Left Banner */}
          <div className="login-image"></div>

          {/* Right Login Form */}
          <div className="login-form">
            <h1 className="form-title">Welcome Back</h1>
            <p className="form-subtitle">Login to your account</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="forgot-password">Forgot Password?</div>

              <button type="submit" className="btn-submit">
                Login Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
