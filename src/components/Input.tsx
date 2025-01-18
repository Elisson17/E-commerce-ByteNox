import React, { forwardRef } from "react";
import { IMaskInput } from "react-imask";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  mask?: string;
  isLoginPage?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, mask, type, placeholder, required }: InputProps) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <div>
          <IMaskInput mask={mask} className="" type={type} placeholder={placeholder} required={required} />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
