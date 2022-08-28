import * as API from "../api";

export const registerUser = (formData) => async (dispatch) => {
  try {
    const { data } = await API.registerUser(formData);
    if (data.success) {
      dispatch({ type: "LOGIN", payload: data.token });
    } else {
      alert(data.message);
    }
  } catch (e) {
    alert(e.response.data.message);
    console.log(e.response);
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    const { data } = await API.loginUser(formData);
    if (data.success) {
      dispatch({ type: "LOGIN", payload: data.token });
    } else {
      alert(data.message);
    }
  } catch (e) {
    console.log(e.response);
  }
};
