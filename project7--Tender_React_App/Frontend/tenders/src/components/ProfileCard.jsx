import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ user, onClose }) => {
  return (
    <div className="overlay">
      <div className="profile-card">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={user.image} alt={user.name} className="profile-img" />
        <h3>{user.name}</h3>
        <p>{user.role}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <button className="contact-btn">Contact</button>
      </div>
    </div>
  );
};

export default ProfileCard;
