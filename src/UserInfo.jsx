import React from "react";

function UserInfo({ name, role, setRole }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ color: "#3498db" }}>User Info</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Current Role:</strong> {role}</p>

      <button onClick={() => setRole("Admin")} style={btnStyle}>
        Admin
      </button>
      <button onClick={() => setRole("Editor")} style={btnStyle}>
        Editor
      </button>
      <button onClick={() => setRole("Viewer")} style={btnStyle}>
        Viewer
      </button>
    </div>
  );
}

const btnStyle = {
  margin: "5px",
  padding: "6px 12px",
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default UserInfo;
