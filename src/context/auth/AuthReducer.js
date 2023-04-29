import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS } from './AuthAction';

const authReducer = (state, action) => {
  switch (action) {
    case LOGIN_START:
      return { user: null, isFetching: true, error: false };

    case LOGIN_SUCCESS:
      return { user: action.payloadd, isFetching: false, error: false };

    case LOGIN_FAIL:
      return { user: null, isFetching: false, error: false };

    default:
      return { ...state };
  }
};

export default authReducer;