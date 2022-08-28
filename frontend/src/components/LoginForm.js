import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../actions/userActions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    if (username && password) {
      dispatch(registerUser({ username, password }));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      dispatch(loginUser({ username, password }));
    }
  };

  return (
    <form>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>LOGIN</button>
      <button onClick={handleRegister}>REGISTER</button>
    </form>
  );
};

export default LoginForm;
