import React, { useState } from "react";
import UserInfo from "./UserInfo";
import RoleDisplay from "./RoleDisplay";

function UserRoleManagementPanel() {
  const [role, setRole] = useState("Viewer");
  const [name] = useState("Srinidhi");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "400px"
        }}
      >
        <h2 style={{ color: "#2c3e50" }}>
          User Role Management Panel
        </h2>

        <UserInfo name={name} role={role} setRole={setRole} />
        <RoleDisplay role={role} />
      </div>
    </div>
  );
}

export default UserRoleManagementPanel;
