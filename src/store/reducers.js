import { combineReducers } from "redux";
import user from "./user";
import bulbs from "./bulbs";
import scenes from "./scenes";
import speech from "./speech";
import ui from "./ui";

export default combineReducers({ user, bulbs, scenes, speech, ui });
