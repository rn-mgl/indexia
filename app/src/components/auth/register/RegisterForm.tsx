"use client";

import Input from "@/components/form/Input";
import { RegisterApiResponse } from "@/app/src/interfaces/auth.interface";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterForm = () => {
  const [register, setRegister] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegister((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });

      const resolve: RegisterApiResponse = await response.json();

      if (!resolve.success) {
        throw new Error(resolve.data.error);
      }

      router.push("/auth/sending");
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
        label="Name"
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        value={register.name}
        required={true}
        onChange={handleRegister}
      />

      <Input
        label="Email"
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        value={register.email}
        required={true}
        onChange={handleRegister}
      />

      <Input
        label="Password"
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        value={register.password}
        required={true}
        onChange={handleRegister}
      />

      <div className="flex w-full flex-row items-center gap-4 font-body text-sm font-medium">
        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-primary text-background font-bold text-center"
        >
          Create account
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
