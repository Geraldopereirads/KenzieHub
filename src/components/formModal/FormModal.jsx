import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { SchemaTechs } from "../SchemaFormTechs/SchemaFormTechs";
import { CloseModalStyle, FormStyle, FormStyleModal, ModalStyle } from "./FormModalStyle";

export const FormModal = ({ closeModal }) => {
  const { RegisterTech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(SchemaTechs),
  });

  const submit = (data) => {
    RegisterTech(data);
    reset();
  };
  return (
    <ModalStyle>
      <FormStyleModal>
        <CloseModalStyle>
          <h2>Cadastrar Tecnologia </h2>
          <span onClick={closeModal}>X</span>
        </CloseModalStyle>

        <FormStyle onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="title" id="title">
            Nome
          </label>
          <input
            {...register("title")}
            type="text"
            placeholder="Digite uma tecnologia..."
            name="title"
            id="title"
          />

          <label id="nivel" name="nivel" htmlFor="Selecionar status">
            Selecionar status
          </label>
          <select name="nivel" id="nivel" {...register("status")}>
            <option value="">Escolha um Nivel</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </FormStyle>
      </FormStyleModal>
    </ModalStyle>
  );
};
