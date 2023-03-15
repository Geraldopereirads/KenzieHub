import React from "react";
import { InputLoginStyle } from "./InputLoginStyle";


export const InputLogin = ({label,type, placeholder, register, error}) => {
  
    return (
      <InputLoginStyle>
        {label && <label htmlFor={register.name}>{label}</label>}
        <input type={type} id={register.name} {...register} placeholder={placeholder} />
        {error && <p>{error.message}</p>}
      </InputLoginStyle>
    );
  };
