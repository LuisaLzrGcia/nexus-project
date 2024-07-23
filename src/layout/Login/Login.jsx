import React, { useState } from "react";
import LoginView from "./LoginView";
import fetchLogin from "../../util/user/fetchLogin";

function Login() {
  sessionStorage.clear()
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    try {
      const data = await fetchLogin(body);
      if (data.id_user) {
        sessionStorage.setItem("id_user", data.id_user);
        sessionStorage.setItem("email", data.email);
        window.location = "/home";
      } else {
        console.log(data)
      }
    } catch (error) {}
  }
  return (
    <>
      <LoginView
        email={email}
        setEmail={setEmail}
        password={password}
        setPasword={setPasword}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default Login;
