"use client";
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

      const resolve = await response.json();
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
          value={resend.email}
          required={true}
          onChange={(e) => handleResend(e)}
          className="w-full p-2 bg-surface border-text/10 border outline-none rounded-lg text-sm placeholder:text-text/20 text-text"
        />
      </div>

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
