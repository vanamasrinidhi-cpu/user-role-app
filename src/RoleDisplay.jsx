import React from "react";

function RoleDisplay({ role }) {
  let permissions = "";

  if (role === "Admin") {
    permissions = "Create, Edit, Delete, View";
  } else if (role === "Editor") {
    permissions = "Edit, View";
  } else {
    permissions = "View";
  }

  return (
    <div>
      <h3 style={{ color: "#e67e22" }}>Role Permissions</h3>
      <p>{permissions}</p>
    </div>
  );
}

export default RoleDisplay;

