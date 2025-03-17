import React from "react";
import PersonalCard from "./PersonalCard";
import SkillsCard from "./SkillsCard";
import "./Styles.css";
import { useContext } from "react";
import { RefsContext } from "../utils/RefsContext";


const CardsContainer = () => {

  const { PIRef } = useContext(RefsContext);

  return (
    <div className="cards-container" ref={PIRef}>
      <PersonalCard />
      <SkillsCard />
    </div>
  );
};

export default CardsContainer;