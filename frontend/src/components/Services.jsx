// src/components/Services.jsx
import React, { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/services");
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setServices(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading services…</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>;
  if (!services.length) return <p style={{ textAlign: "center" }}>No services found.</p>;

  // Group services by category
  const grouped = services.reduce((acc, s) => {
    acc[s.category] = acc[s.category] || [];
    acc[s.category].push(s);
    return acc;
  }, {});

  return (
    <section style={{ padding: "60px 20px", background: "#77bab0ff" }}>
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "40px" }}>Our Services</h2>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>{category}</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {items.map((s) => (
              <div
                key={s.id}
                style={{
                  flex: "0 1 300px",
                  padding: "20px",
                  border: "1px solid #846fecff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  background: "#2219a2cc",
                }}
              >
                <h4 style={{ marginBottom: "10px" }}>{s.title}</h4>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
