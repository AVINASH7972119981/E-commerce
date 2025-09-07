import React from "react";
import "./Acc.css";

function AccountPage() {
  // For example, you can fetch user info from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest", email: "guest@example.com" };

  return (
    <div className="acc-container">
      <h2>My Account</h2>
      <div className="acc-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="acc-photo"
        />
        <div className="acc-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
