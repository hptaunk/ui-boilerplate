import {SESSION_INIT} from '../constants';

let localStorage = window.localStorage;

export function sessionInitialize() {
  const { email, token, userName } = localStorage;
  return (dispatch) => {
    dispatch({
      type: SESSION_INIT, userName: userName, token: token, email: email
    });
  };
}