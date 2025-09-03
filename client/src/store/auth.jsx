import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [services, setServices] = useState([]); // keep as array

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // logout
  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  let isLoggedIn = !!token;
  console.log("User logged in:", isLoggedIn);

  // authenticate user
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Authenticated user data:", data);
      } else {
        console.error("Failed to authenticate user. Status:", response.status);
        logoutUser();
      }
    } catch (error) {
      console.error("Error during user authentication:", error);
      logoutUser();
    }
  };

  // fetch services
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.ok) {
  const data = await response.json();
  console.log("Fetched services data:", data);
  setServices(data.msg || []); // 👈 use msg array
}
else {
        console.error("Failed to fetch services. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    if (token) {
      userAuthentication();
      getServices();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, logoutUser, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
