import React from "react";
import Fight from "../Fight/Fight";

import { FightEvent } from "../Homepage/event";

import "./EventManager.css";

interface EventProp {
  events: FightEvent[];
}

const EventManager: React.FC<EventProp> = ({ events }) => {
  return (
    <div>
      <div className={events ? "center" : ""}>
        {events ? (
          events.map((event) => (
            <Fight
              fightNumber={event.eventId}
              firstFighterId={event.firstFighterId}
              secondFighterId={event.secondFighterId}
            />
          ))
        ) : (
          <h2 style={{ marginLeft: "auto", marginRight: "auto" }}>
            There seems to be no events! Select both fighters and click "Enter
            Fight" to create one
          </h2>
        )}
      </div>
    </div>
  );
};

export default EventManager;
