import React from "react";
import { useAuth } from "../store/auth";

const boxStyle = {
  background: "linear-gradient(145deg, #1e1e1e, #2c2c2c)", // dark gradient
  borderRadius: "12px",
  padding: "20px",
  minWidth: "250px",
  color: "#fff",
  flex: "1 1 calc(33.33% - 16px)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
};

const boxHoverStyle = {
  transform: "translateY(-5px)",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.8)",
};

const Services = () => {
  const { services } = useAuth();
  const [hovered, setHovered] = React.useState(null);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>✨ Our Services</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {Array.isArray(services) && services.length > 0 ? (
          services.map((service, idx) => (
            <div
              key={service._id || idx}
              style={{
                ...boxStyle,
                ...(hovered === idx ? boxHoverStyle : {}),
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 style={{ color: "#4fc3f7", marginBottom: "10px" }}>
                {service.service}
              </h3>
              <p style={{ marginBottom: "10px" }}>{service.description}</p>
              <p style={{ marginBottom: "5px" }}>
                <strong style={{ color: "#81c784" }}>Price:</strong> {service.price}
              </p>
              <p>
                <strong style={{ color: "#ffb74d" }}>Provider:</strong>{" "}
                {service.provider}
              </p>
            </div>
          ))
        ) : (
          <p>No services found.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
