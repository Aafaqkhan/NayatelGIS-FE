import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../../../store/authSlice";
import authApi from "../../../services/api/authApi";
import profileApi from "../../../services/api/profileInfo";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    event.preventDefault();
    setError("");

    // name validation
    // const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
      setError("User Name is required.");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }
    // else if (!nameRegex.test(name)) {
    //   setError("Please enter a valid name address.");
    //   return;
    // }

    setLoading(true);

    try {
      const response = await authApi.login(name, password);

      if (response.status === 201) {
        console.log("Login successful!");

        console.log("useeeer idd ::", response.data.id);

        setUserId(response.data.id);

        navigate("/dashboard", {
          state: {
            userId: response.data.id,
          },
        });
      } else {
        console.log("Login failed:", response);
        alert("login failed");

        setLoading(false);
      }
    } catch (error) {
      alert(error);
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   // setLoading(true);

  //   try {
  //     // Call the login API
  //     const { token } = await authApi.login({ name, password });

  //     // Dispatch success action
  //     dispatch(loginSuccess(token));

  //     // Navigate to the dashboard
  //     navigate("/dashboard");
  //   } catch (err) {
  //     navigate("/dashboard");
  //     // Dispatch failure action and show error
  //     // const errorMessage = err.message || "Login failed. Please try again.";
  //     // dispatch(loginFailure(errorMessage));
  //     // setError(errorMessage);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="overflow-hidden">
      <div className="h-[40px] w-[140px] mb-[40px] mx-auto ">
        <img className="" src="src/assets/nayatel_logo.png" alt="Logo" />
      </div>
      <form
        // onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-2xl border-[0.5px] border-gray-200"
      >
        <h2 className="text-2xl font-[600] text-center mb-4 font-sans">
          Login
        </h2>
        <p className="text-gray-500 mb-8">
          Enter your name below to login to your account.
        </p>

        <div className="space-y-4">
          <InputField
            label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="p-4"></div>
        <Button
          onClick={handleLogin}
          label={loading ? "Signing in..." : "Sign in"}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default LoginForm;
