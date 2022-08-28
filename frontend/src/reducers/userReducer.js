const userReducer = (
  state = {
    loggedIn: false,
    token: "",
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload);
      return { ...state, loggedIn: true, token: action.payload };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...state, loggedIn: false, token: "" };
    default:
      return state;
  }
};

export default userReducer;
