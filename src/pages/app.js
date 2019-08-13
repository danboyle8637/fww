import React from "react";
import { Router } from "@reach/router";

import { FormStore } from "../context/FormContext";
import { formState, formReducer } from "../reducers/formReducer";
import Dashboard from "../components/App/Dashboard";
import SignUp from "../components/App/SignUp";
import ResetProgram from "../components/App/ResetProgram";
import Workout from "../components/App/Workout";
import WorkoutDetails from "../components/App/WorkoutPage/WorkoutDetails/WorkoutDetails";

const App = () => {
  return (
    <>
      <FormStore initialState={formState} reducer={formReducer}>
        <Router>
          <Dashboard path={"app/"} />
          <SignUp path={"app/signup"} />
          <ResetProgram path={"app/:programName"} />
          <Workout path={"app/:programName/:workoutId"} />
          <WorkoutDetails path={"app/:programName/:workoutId/details"} />
        </Router>
      </FormStore>
    </>
  );
};

export default App;
