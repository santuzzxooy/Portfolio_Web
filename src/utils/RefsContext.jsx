import { createContext, useRef } from "react";

export const RefsContext = createContext();

export const RefsProvider = ({ children }) => {
  const PIRef = useRef(null);
  const StudiesRef = useRef(null);
  const ExperienceRef = useRef(null);
  const ProjectsRef = useRef(null);

  return (
    <RefsContext.Provider value={{ PIRef, StudiesRef, ExperienceRef, ProjectsRef }}>
      {children}
    </RefsContext.Provider>
  );
};