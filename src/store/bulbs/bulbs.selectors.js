import { omit } from "rambda";

export const bulbsSelector = state => state.bulbs;
export const bulbIdsSelector = state =>
  Object.keys(omit("nbBulbs", state.bulbs));
