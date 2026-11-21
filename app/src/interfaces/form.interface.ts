import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
