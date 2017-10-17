import { APP_LOAD, APP_INFO } from 'constants/action-types';

const initialState = {
  loaded: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case APP_INFO:
      return { ...state, info: action.info };
    default:
      return state;
  }
}
