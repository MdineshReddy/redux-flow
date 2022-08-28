import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (user.loggedIn) {
    return (
      <div>
        <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
      </div>
    );
  }

  return <LoginForm />;
};

export default App;
