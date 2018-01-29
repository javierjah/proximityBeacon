import {Map} from 'immutable';

// Initial state
const initialState = Map({
  value: 0,
  loading: false
});

// Actions
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';

// Action creators
export function random() {
  return {type: RANDOM_RESPONSE};
}

// export async function requestRandomNumber() {
//   return {
//     type: RANDOM_RESPONSE,
//     payload: await generateRandomNumber()
//   };
// }

// Reducer
export default function CounterStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
