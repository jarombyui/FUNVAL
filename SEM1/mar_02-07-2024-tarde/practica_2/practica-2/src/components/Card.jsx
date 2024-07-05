import React from 'react';

 const Card = ({ icon, title, description }) => (
    <div className={`card ${title.toLowerCase().replace(" ", "-")}`}>
      <img src={icon} alt={`${title} Icon`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );