"use client";

import type { InputProps } from "@/src/interfaces/form.interface";

const Input = (props: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-1 font-body">
      <label htmlFor={props.id} className="text-xs text-text/50">
        {props.label}
      </label>

      <input
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        required={props.required}
        onChange={props.onChange}
        className="w-full p-2 bg-surface border-text/10 border outline-none rounded-lg text-sm placeholder:text-text/20 text-text"
      />
    </div>
  );
};

export default Input;
