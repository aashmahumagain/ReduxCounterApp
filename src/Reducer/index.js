import changeTheNumber from "./updown";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
});
export default rootReducer;
