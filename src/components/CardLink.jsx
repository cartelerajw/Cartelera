import React from "react";
import "./CardLink.css"; // CSS específico para la tarjeta

export default function CardLink({ href, imgSrc, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="card-link">
      <img src={imgSrc} alt={label} />
      <span>{label}</span>
    </a>
  );
}
