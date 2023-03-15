import React from "react";
import { InputsRegisterStyle } from "./inputsRegisterStyle";

export const InputRegister = ({
  label,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <InputsRegisterStyle>
      {label && <label htmlFor={register.name}>{label}</label>}
      <input
        type={type}
        id={register.name}
        {...register}
        placeholder={placeholder}
      />
      {error && <p>{error.message}</p>}
    </InputsRegisterStyle>
  );
};
