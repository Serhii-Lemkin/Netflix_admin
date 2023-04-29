import axios from 'axios';
import { loginFail, loginStart, loginSuccess } from './AuthAction';

export const loginCall = async (userCred, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios('auth/login', {
      email: userCred.email,
      password: userCred.password,
    });
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFail());
  }
};
