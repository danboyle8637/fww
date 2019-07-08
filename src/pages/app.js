import React from "react";
import { Router, Link } from "@reach/router";

import { SectionContainer, ContentContainer } from "../styles/Containers";
import Dashboard from "../components/App/Dashboard";
import ResetProgram from "../components/App/ResetProgram";
import Workout from "../components/App/Workout";

const App = () => {
  return (
    <SectionContainer>
      <nav>
        <Link to={"app/"}>Dashboard</Link>
        <Link to={"app/ignite"}>Reset Program</Link>
        <Link to={"app/workout/workout1"}>Workout Page</Link>
      </nav>
      <ContentContainer>
        <Router>
          <Dashboard path={"app/"} />
          <ResetProgram path={"app/:programName"} />
          <Workout path={"app/workout/:workoutId"} />
        </Router>
      </ContentContainer>
    </SectionContainer>
  );
};

export default App;
