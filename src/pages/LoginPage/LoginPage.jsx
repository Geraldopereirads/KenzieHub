import React, { useContext } from "react";
import Logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputLogin } from "../../components/inputLogin/inputLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../components/SchemaFormLogin/SchemaFormLogin";
import { StyledContainer } from "../../styles/grid";
import { LoginStyle } from "./LoginStyle";
import { UserContext } from "../../providers/UserContext";

export const LoginPage = () => {

const { LoginUser } = useContext(UserContext)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const submit = async (data) => {
    LoginUser(data);
    reset();
  };

  return (
    <LoginStyle>
      <StyledContainer>
        <img src={Logo} alt="" />

        <form onSubmit={handleSubmit(submit)} noValidate>
          <h2>Login</h2>
          <InputLogin
            label="email"
            type="email"
            placeholder="Digite aqui seu email"
            register={register("email")}
            error={errors.email}
          />

          <InputLogin
            label="senha"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register("password")}
            error={errors.password}
          />
          <button type="submit">Entrar</button>
          <Link to="/register">
            <small>Ainda não possui uma conta?</small>
            <span>Cadastre-se</span>
          </Link>
        </form>
      </StyledContainer>
    </LoginStyle>
  );
};
