import {SESSION_INIT} from '../constants';

const initialState = {
  error: undefined,
  email: undefined,
  role: undefined,
  state: 'initial', // initial | changing | ready
  token: undefined,
  userName: undefined
};

const handlers = {
  [SESSION_INIT]: (_, action) => action
};

export default function sessionReducer (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
}
