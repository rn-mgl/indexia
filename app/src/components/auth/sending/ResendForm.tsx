"use client";

import Input from "@/components/form/Input";
import { SendingApiResponse } from "@/app/src/interfaces/auth.interface";
import React from "react";

const ResendForm = () => {
  const [resend, setResend] = React.useState({
    email: "",
  });

  const handleResend = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setResend((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/auth/sending`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resend),
      });

      const resolve: SendingApiResponse = await response.json();

      if (!resolve.success) {
        throw new Error(resolve.data.error);
      }
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
        value={resend.email}
        required={true}
        onChange={handleResend}
      />

      <div className="flex w-full flex-row items-center gap-4 font-body text-sm font-medium">
        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-primary text-background font-bold text-center"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ResendForm;
