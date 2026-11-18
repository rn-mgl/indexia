"use client";

import React from "react";

const LoginForm = () => {
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      const resolve = await response.json();

      console.log(resolve);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-start justify-center gap-4 w-full"
    >
      <div className="w-full flex flex-col gap-1 font-body">
        <label htmlFor="name" className="text-xs text-text/50">
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          value={login.email}
          required={true}
          onChange={(e) => handleLogin(e)}
          className="w-full p-2 bg-surface border-text/10 border outline-none rounded-lg text-sm placeholder:text-text/20 text-text"
        />
      </div>

      <div className="w-full flex flex-col gap-1 font-body">
        <label htmlFor="name" className="text-xs text-text/50">
          Password
        </label>
        <input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          required={true}
          onChange={(e) => handleLogin(e)}
          value={login.password}
          className="w-full p-2 bg-surface border-text/10 border outline-none rounded-lg text-sm placeholder:text-text/20 text-text"
        />
      </div>

      <div className="flex w-full flex-row items-center gap-4 font-body text-sm font-medium">
        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-primary text-background font-bold text-center"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
