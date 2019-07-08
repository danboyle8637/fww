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
        <Link to={"app/reset"}>Dashboard</Link>
        <Link to={"app/reset/ignite"}>Reset Program</Link>
        <Link to={"app/reset/workout/workout1"}>Workout Page</Link>
      </nav>
      <ContentContainer>
        <Router>
          <Dashboard path={"app/reset"} />
          <ResetProgram path={"app/reset/:programName"} />
          <Workout path={"app/reset/workout/:workoutId"} />
        </Router>
      </ContentContainer>
    </SectionContainer>
  );
};

export default App;
