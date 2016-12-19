import {INIT} from '../constants';

const initialState = {
  title: "Api Catalog",
  logoStyle: {
    colorIndex: "light-1"
  }
};

initialState.logo = "<g fill='none'><g transform='translate(1.000000, 5.000000)' strokeWidth='2'><path d='M23.0030785,37 L46,24.5 L46,13 L23.0030785,13 L0,24.5 L8.8817842e-16,37 L23.0030785,37 Z'/> <path d='M22.9969215,24 L45.9999999,12.5 L46,0 L22.9969215,0 L3.0027536e-11,12.5 L0,24 L22.9969215,24 Z' transform='translate(23.000000, 12.000000) scale(-1, 1) translate(-23.000000, -12.000000) '/> <path d='M1,1 L23.0030785,13 L23.0030785,24 L1,36'/></g></g>";

const handlers = {
  [INIT]: (_, action) => (action)
};

export default function indexReducer (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
}