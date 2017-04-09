import { SET_SCENES } from "./scenes.actions";

const EMPTY = { nbScenes: 0 };
export default (state = EMPTY, action) => {
  switch (action.type) {
    case SET_SCENES:
      const scenes = action.value;
      const nbScenes = Object.values(scenes).length;
      return { ...scenes, nbScenes };
    default:
      return state;
  }
};
