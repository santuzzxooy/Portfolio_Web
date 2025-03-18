import React from "react";
import PersonalCard from "./PersonalCard";
import SkillsCard from "./SkillsCard";
import "./Styles.css";
import { useContext } from "react";
import { RefsContext } from "../utils/RefsContext";


const CardsContainer = () => {

  const { PIRef } = useContext(RefsContext);

  return (
    <div ref={PIRef}>
      <h1 className="PI_title">Professional Info</h1>
    <div className="cards-container" >
      <PersonalCard />
      <SkillsCard />
    </div>
    </div>
  );
};

export default CardsContainer;