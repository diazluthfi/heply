import { REGISTER_USER, LOGIN_USER } from "../../actions/AuthAction";

const initialState = {
  registerLoading: false,
  registerResult: false,
  registerError: false,

  loginLoading: false,
  loginResult: false,
  loginError: false,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerLoading: actions.payload.loading,
        registerResult: actions.payload.data,
        registerError: actions.payload.errorMessage,
      };

    case LOGIN_USER:
      return {
        ...state,
        loginLoading: actions.payload.loading,
        loginResult: actions.payload.data,
        loginError: actions.payload.errorMessage,
      };
    default:
      return state;
  }
}
