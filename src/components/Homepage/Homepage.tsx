import "./Homepage.css";
import React, { useEffect, useState } from "react";

import Fighters from "../../fighters/fighters";
import { FightEvent } from "./event";
import { Select, notification } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import EditFighter from "../EditFighter/EditFighter";
import EventManager from "../EventManager/EventManager";

const Homepage = () => {
  const { Option } = Select;
  const [ufcCounter, setUfcCounter] = useState(277);

  const [events, setEvents] = useState<FightEvent[]>();
  const [selectedFirst, setSelectedFirst] = useState<number>(0);
  const [selectedSecond, setSelectedSecond] = useState<number>(0);
  const [fighterList, setFighterList] = useState(Fighters);

  useEffect(() => {
    sessionStorage.setItem("events", JSON.stringify(events));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const errorNotification = () => {
    notification.open({
      message: (
        <p style={{ fontWeight: "bold", fontSize: "24px" }}>Input error</p>
      ),
      description: <p>Select a valid fighter to create an event</p>,
    });
  };

  const handleSelectFirst = (value: number): void => {
    setSelectedFirst(value);
  };

  const handleSelectSecond = (value: number): void => {
    setSelectedSecond(value);
  };

  const handleClick = (): void => {
    const newEvent = {
      eventId: ufcCounter,
      firstFighterId: selectedFirst,
      secondFighterId: selectedSecond,
    };
    if (
      newEvent.firstFighterId <= 0 ||
      newEvent.firstFighterId === undefined ||
      newEvent.secondFighterId <= 0 ||
      newEvent.secondFighterId === undefined
    ) {
      errorNotification();
    } else {
      setEvents((prevEvents) =>
        prevEvents ? [...prevEvents, newEvent] : [newEvent]
      );
      setUfcCounter((ufcCounter) => ufcCounter + 1);
      setSelectedFirst(0);
      setSelectedSecond(0);
    }
  };
  const handleClear = (): void => {
    sessionStorage.removeItem("events");
    setUfcCounter(277);
    setEvents([]);
  };

  useEffect(() => {
    sessionStorage.setItem("fighters", JSON.stringify(fighterList));
  }, [fighterList]);

  return (
    <div>
      <div className="header-wrap">
        <h1 className="appheader">UFC MATCHMAKER</h1>
      </div>
      <div className="action-bar">
        <Select
          allowClear
          bordered
          placeholder={"Pick a fighter"}
          style={{ width: "180px", marginRight: "12px" }}
          onChange={handleSelectFirst}
          value={selectedFirst || undefined}
        >
          {fighterList.map((fighter) => (
            <Option value={fighter.id}>{fighter.name}</Option>
          ))}
        </Select>
        <Select
          allowClear
          bordered
          placeholder={"Pick a fighter"}
          style={{ width: "180px", marginLeft: "12px" }}
          onChange={handleSelectSecond}
          value={selectedSecond || undefined}
        >
          {fighterList.map(
            (fighter) =>
              fighter.id !== selectedFirst && (
                <Option value={fighter.id}>{fighter.name}</Option>
              )
          )}
        </Select>
        <div className="action-btns">
          <button className="add-fight-btn" onClick={handleClick}>
            Enter Fight
          </button>
          <button className="clear-fights-btn" onClick={handleClear}>
            Clear Fights
          </button>
          <Link to={"/editfighters"}>
            <button className="edit-fighters-btn">Edit Fighters</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<EventManager events={events!} />} />
        <Route
          path="/editfighters"
          element={
            <EditFighter
              fighterList={fighterList}
              setFighterList={setFighterList}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Homepage;
