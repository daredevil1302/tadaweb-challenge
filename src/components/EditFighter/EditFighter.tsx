import React from "react";
import { useNavigate } from "react-router-dom";
import { Fighter } from "../../fighters/fighter";
import "./EditFighter.css";
import { Card } from "../Card/Card";
import { DetailedCard } from "../DetailedCard/DetailedCard";

interface FighterProp {
  fighterList: Fighter[];
  setFighterList: React.Dispatch<React.SetStateAction<Fighter[]>>;
}

const EditFighter: React.FC<FighterProp> = ({
  fighterList,
  setFighterList,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="clear-fights-btn" onClick={() => navigate(-1)}>
        Go back
      </button>
      <h2 style={{ marginTop: "32px" }}>Change a fighter's nickname</h2>
      <div className="fighters-list">
        {fighterList.map((fighter) => (
          <DetailedCard
            key={fighter.id}
            setFighterList={setFighterList}
            {...fighter}
          />
        ))}
      </div>
    </div>
  );
};

export default EditFighter;
