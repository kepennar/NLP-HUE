export const GET_SCENES = "GET_SCENES";
export const getScenes = () => ({
  type: GET_SCENES
});

export const SET_SCENES = "SET_SCENES";
export const setScenes = scenes => ({
  type: SET_SCENES,
  value: scenes
});

export const ACTIVATE_SCENE = "ACTIVATE_SCENE";
export const activateScene = sceneId => ({
  type: ACTIVATE_SCENE,
  value: sceneId
});
