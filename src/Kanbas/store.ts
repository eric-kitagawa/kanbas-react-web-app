import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/Reducer";
import enrollmentReducer from "./Dashboard/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignments: assignmentReducer,
    enrollmentReducer,
  }
});

export default store;