import {INIT} from '../constants';

const initialState = {
  navmenu: []
};

initialState.navmenu = [
  {label: "Page 1", path:'/page1' },
  {label: "Page 2", path:'/page2' },
];

const handlers = {
  [INIT]: (_, action) => (action)
};

export default function navReducer (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
}