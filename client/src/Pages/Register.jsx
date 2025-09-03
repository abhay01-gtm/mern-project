  import { useState } from "react";
  import "./register.css";
  import { useNavigate } from "react-router-dom";
  import { useAuth } from "../store/auth";
 

  const Register = () => {
    const [user, setUser] = useState({
      username: "",
      email: "",
      phone: "",
      password: "",
    });


  const {storeTokenInLS}  = useAuth();

    const navigate = useNavigate();


    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      setUser({
        ...user,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user);

      try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {  
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) { 
        const res_data = await response.json();
        console.log("res from server:", res_data);
        storeTokenInLS(res_data.token);
        //localStorage.setItem("token" , res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }

      console.log(response);
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };

    return (
      <section className="register-section">
        <main className="register-container">
          <div className="register-grid">
            {/* Left side image */}
            <div className="register-image">
              <img
                src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-2bb0-61f8-87f8-d6b42f60cf8e/raw?se=2025-08-22T23%3A51%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=4b431245-063b-5602-b799-1a8ebc233937&skoid=864daabb-d06a-46b3-a747-d35075313a83&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-22T20%3A08%3A14Z&ske=2025-08-23T20%3A08%3A14Z&sks=b&skv=2024-08-04&sig=tElwgJ0VUpmYuTqU84o%2B0R80d15hkJhBbo1pIzOhPo8%3D"
                alt="registration illustration"
              />
            </div>

            {/* Right side form */}
            <div className="register-form">
              <h1 className="form-title">Create an Account</h1>
              <p className="form-subtitle">Join us and explore more 🚀</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="Enter your phone"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button type="submit" className="btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    );
  };

  export default Register;
