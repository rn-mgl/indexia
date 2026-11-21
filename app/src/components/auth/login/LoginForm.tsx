"use client";

import Input from "@/components/form/Input";
import { LoginApiResponse } from "@/app/src/interfaces/auth.interface";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

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

      const resolve: LoginApiResponse = await response.json();

      if (!resolve.success) {
        if (resolve.data.status === 403) {
          router.push("/auth/sending");
        }

        throw new Error(resolve.data.error);
      }

      router.push("/indexia");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-start justify-center gap-4 w-full"
    >
      <Input
        label="Email"
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        value={login.email}
        required={true}
        onChange={handleLogin}
      />

      <Input
        label="Password"
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        value={login.password}
        required={true}
        onChange={handleLogin}
      />

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
