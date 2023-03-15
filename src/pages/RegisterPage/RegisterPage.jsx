import React, { useContext } from "react";
import Logo from "../../assets/img/Logo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { InputRegister } from "../../components/InputsRegister/inputRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../components/SchemaFormRegister/SchemaFormRegister";
import { StyledContainer } from "../../styles/grid";
import { RegisterStyle, RegisterStyleContainer } from "./RegisterStyle";
import { UserContext } from "../../providers/UserContext";

export const RegisterPage = () => {

  const { registerUser } = useContext(UserContext);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });
  
  const submit = async (data) => {
    registerUser(data);
    reset();
  };
  
  return (
    <RegisterStyle>
      <StyledContainer>
        <RegisterStyleContainer>
          <img src={Logo} alt="logo" />
          <Link to="/">
            {" "}
            <span>Voltar</span>
          </Link>
        </RegisterStyleContainer>
        <div>
          <form onSubmit={handleSubmit(submit)} noValidate>
            <div>
              <h1>Crie sua conta</h1>
              <small>Rapido e grátis, Vamos nessa</small>
            </div>

            <InputRegister
              label="nome"
              type="text"
              placeholder="Digite aqui seu nome"
              register={register("name")}
              error={errors.name}
            />

            <InputRegister
              label="email"
              type="email"
              placeholder="Digite aqui seu email"
              register={register("email")}
              error={errors.message}
            />

            <InputRegister
              label="senha"
              type="password"
              placeholder="Digite aqui sua senha"
              register={register("password")}
              error={errors.password}
            />

            <InputRegister
              label="Confirmação de Senha"
              type="password"
              placeholder="Digite novamente sua senha"
              register={register("confirmarSenha")}
              error={errors.confirmarSenha}
            />

            <InputRegister
              label="bio"
              type="text"
              placeholder="Fale sobre você"
              register={register("bio")}
              error={errors.bio}
            />

            <InputRegister
              label="contato"
              type="number"
              placeholder="Opção de contato"
              register={register("contact")}
              error={errors.contact}
            />
            <fieldset>
              <label htmlFor="selecionarModulo">Selecionar Módulo</label>
              <select
                name=""
                id="selecionarModulo"
                {...register("course_module")}
              >
                <option value="">Escolha um Módulo</option>
                <option value="pPrimeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo (Introdução ao Frontend)
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo (Frontend Avançado)
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo (Introdução ao Backend)
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo (Backend Avançado)
                </option>
              </select>
              <button type="submit">Cadastrar</button>
            </fieldset>
          </form>
        </div>
      </StyledContainer>
    </RegisterStyle>
  );
};
