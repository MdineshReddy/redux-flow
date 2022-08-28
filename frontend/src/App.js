import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import Posts from "./components/Posts";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (user.loggedIn) {
    return (
      <div>
        <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        <Posts />
      </div>
    );
  }

  return <LoginForm />;
};

export default App;
