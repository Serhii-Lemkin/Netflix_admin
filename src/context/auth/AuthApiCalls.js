import axios from 'axios';
import { loginFail, loginStart, loginSuccess } from './AuthAction';

export const loginCall = async (userCred, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('auth/login', userCred);
    dispatch(res.data.isAdmin ? loginSuccess(res.data) : loginFail());
  } catch (error) {
    dispatch(loginFail());
  }
};
