import "./Fight.css";
import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

import { Fighter } from "../../fighters/fighter";

type FightProps = {
  firstFighterId: number;
  secondFighterId: number;
  fightNumber: number;
};
const Fight = ({
  firstFighterId,
  secondFighterId,
  fightNumber,
}: FightProps) => {
  const [firstFighter, setFirstFighter] = useState<Fighter>();
  const [secondFighter, setSecondFighter] = useState<Fighter>();
  const [fightDate, setFightDate] = useState<Date>();
  useEffect(() => {
    getFighters();
  }, []);

  function randomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  const getFighters = (): void => {
    const stringFighters = sessionStorage.getItem("fighters");
    const parsedFighters = stringFighters ? JSON.parse(stringFighters) : [];
    console.log(parsedFighters);

    const fightContenders: Fighter[] = parsedFighters.filter(
      (fighter: Fighter) =>
        fighter.id === firstFighterId || fighter.id === secondFighterId
    );

    const generatedDate = randomDate(new Date(2022, 7, 26), new Date());
    setFightDate(generatedDate);
    setFirstFighter(fightContenders[0]);
    setSecondFighter(fightContenders[1]);
  };

  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>UFC {fightNumber}</h2>
      <div className="fight-padding">
        <div className="mojdiv">
          <div className="card-list">
            {firstFighter && <Card {...firstFighter} />}
            <p className="versus">VS</p>
            {secondFighter && <Card {...secondFighter} />}
          </div>
          <h3 style={{ fontWeight: "bold" }}>Fight date:</h3>
          <h2>{fightDate?.toDateString()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Fight;
