import { countReducer } from "./reducers";


test('countReducer', () => {

  const nextState = countReducer(0, { type: 'INCREMENT_COUNTER' });
  expect(nextState).toBe(1);

  const nextState = countReducer(0, { type: 'UNKNOWN' });
  expect(nextState).toBe(0);

});