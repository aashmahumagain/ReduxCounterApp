import changeTheNumber from "./updown";
import { combineReducers } from "@reduxjs/toolkit";
import mulTheNumber from "./MulDiv";
const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
  mulTheNumber: mulTheNumber,
});
export default rootReducer;
