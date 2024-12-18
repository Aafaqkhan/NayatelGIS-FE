import React from "react";
import LoginForm from "./components/LoginForm";
import bgImage from "/src/assets/bg.png";

const LoginPage = () => {
  return (
    <div
      className="bg-cover flex flex-col items-center justify-center h-dvh overflow-y-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
