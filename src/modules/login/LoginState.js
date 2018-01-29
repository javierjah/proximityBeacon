import {Map} from 'immutable';

// Initial state
const initialState = Map({
  loading: false
});

// Actions
const LOGIN = 'loginState/LOGIN';

// Action creators
export function random() {
  return {type: LOGIN};
}

// Reducer
export default function loginStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
