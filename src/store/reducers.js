import { combineReducers } from "redux";
import user from "./user";
import bulbs from "./bulbs";
import scenes from "./scenes";

export default combineReducers({ user, bulbs, scenes });
