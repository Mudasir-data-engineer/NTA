import React, { useEffect, useState } from "react";
import { getServices } from "../api/services.js";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServices();
        setServices(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services");
      }
    };
    fetchData();
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Services</h2>
      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id} style={{ marginBottom: "15px" }}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <small>Category: {service.category}</small>
              {service.icon && (
                <div>
                  <i className={`fa ${service.icon}`} style={{ marginLeft: "10px" }}></i>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceList;
