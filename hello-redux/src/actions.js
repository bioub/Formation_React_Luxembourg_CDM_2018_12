import { COUNTER_INCREMENT, COLOR_SELECT } from "./constants";

export const counterIncrement = () => ({
  type: COUNTER_INCREMENT,
});

export const colorSelect = (payload) => ({
  type: COLOR_SELECT,
  payload,
});