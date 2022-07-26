import { message } from "antd";
import React, { useState } from "react";
import { Fighter } from "../../fighters/fighter";
import "./DetailedCard.css";

type detailedFighterProps = {
  id: number;
  name: string;
  nickname: string;
  age: number;
  picture: string;
  stance: string;
  origin: string;
  record: string;
  setFighterList: React.Dispatch<React.SetStateAction<Fighter[]>>;
};

export const DetailedCard = ({
  id,
  name,
  nickname,
  picture,

  setFighterList,
}: detailedFighterProps) => {
  const allFighters = sessionStorage.getItem("fighters");

  const [newNickname, setNewNickname] = useState("");

  const parsedFighters = allFighters ? JSON.parse(allFighters) : [];

  const submitSuccess = () => {
    message.success(`Updated changes for ${name}`);
  };

  const handleSubmit = () => {
    parsedFighters.forEach((fighter: Fighter) => {
      if (fighter.id === id) {
        fighter.nickname = newNickname;
      }
    });
    setFighterList(parsedFighters);
    submitSuccess();
  };
  return (
    <div className="card-container">
      <img alt="monster" src={picture} width="100px" />
      <div className="inputFields">
        <input
          className="inputStyle"
          placeholder={nickname}
          onChange={(e) => setNewNickname(e.target.value)}
          value={newNickname}
        ></input>

        <button onClick={handleSubmit} className="add-fight-btn">
          Submit Changes
        </button>
      </div>

      {/* <h3 style={{ fontWeight: "bold" }}> {name} </h3>
    <p style={{ fontStyle: "italic", fontSize: "16px" }}> {nickname} </p> */}
    </div>
  );
};
