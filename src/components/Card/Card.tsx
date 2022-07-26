import React from "react";
import { Fighter } from "../../fighters/fighter";
import "./Card.css";

export const Card = ({
  name,
  nickname,

  picture,
}: Fighter) => (
  <div className="card-container">
    <img alt="monster" src={picture} width="100px" />
    <h3 style={{ fontWeight: "bold" }}> {name} </h3>
    <p style={{ fontStyle: "italic", fontSize: "16px" }}> {nickname} </p>
  </div>
);
