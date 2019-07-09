import React from "react";
import { Router } from "@reach/router";

import Dashboard from "../components/App/Dashboard";
import ResetProgram from "../components/App/ResetProgram";
import Workout from "../components/App/Workout";

const App = () => {
  return (
    <>
      <Router>
        <Dashboard path={"app/"} />
        <ResetProgram path={"app/:programName"} />
        <Workout path={"app/:programName/:workoutId"} />
      </Router>
    </>
  );
};

export default App;
