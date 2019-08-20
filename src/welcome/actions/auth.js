import axios from "axios";

export const LOGIN_SUBMIT = "LOGIN_SUBMIT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export function loginOnRequest(data) {
  return {
    type: LOGIN_SUBMIT,
    data
  };
}

export function postLogin(data) {
  return dispatch => {
    //   console.log('asassaass')
    axios
      .get("http://192.168.43.12:3000/auth", {
        email: data.email,
        password: data.password
      })
      .then(({ data }) => {
        console.log("response", data);
        dispatch(loginOnRequest(data));
      });
  };
}
