import React from "react";
import "./card-style.css";

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt="Monster"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2> {monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
