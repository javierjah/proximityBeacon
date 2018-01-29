import {Map} from 'immutable';
import {initGeolocation} from '../../constants';

// Initial state
const initialState = Map({
  geolocation: Map(initGeolocation)
});

// Actions
const FETCH_CLIENT = 'CounterState/FETCH_CLIENT';


// Action creators
export const fetchClient = () => ({type: FETCH_CLIENT});

// Reducer
export default function CounterStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case FETCH_CLIENT:
      return state.set('loadingClient', true);

    default:
      return state;
  }
}
