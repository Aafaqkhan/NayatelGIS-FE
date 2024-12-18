import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    navigate("/dashboard");
  };

  return (
    <div className="overflow-hidden">
      <div className="h-[40px] w-[140px] mb-[40px] mx-auto ">
        <img className="" src="src/assets/nayatel_logo.png" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-2xl border-[0.5px] border-gray-200"
      >
        <h2 className="text-2xl font-[600] text-center mb-4 font-sans">
          Login
        </h2>
        <p className=" text-gray-500 mb-8">
          Enter your email below to login to your account.
        </p>

        <div className="space-y-4">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="p-4"></div>
        <Button label="Sign in" />
      </form>
    </div>
  );
};

export default LoginForm;
