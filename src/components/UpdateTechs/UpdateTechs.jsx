import React from "react";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import {
  UpdateTechModalsStyle,
  UpadateTechAll,
  UpadateTechHeader,
  DivButtonsTech,
  ButtonTechsOne,
  ButtonTechsTwo,
} from "../UpdateTechs/UpdateTechsStyle";
import { useForm } from "react-hook-form";

export const UpdateTechs = ({ setEditTechs }) => {
  const { removeTech, upadateTechsValue, editTechs } = useContext(TechContext);
  const { techs } = useContext(UserContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: editTechs.title,
      status: editTechs.status,
    },
  });
  const techId = techs.map((tech) => tech.id);

  const submit = async (data) => {
    console.log("oi");
    await upadateTechsValue(data, editTechs.id);
    setEditTechs(null);
  };

  return (
    <UpdateTechModalsStyle>
      <UpadateTechAll>
        <UpadateTechHeader>
          <h2>Tecnologia Detalhes</h2>
          <span
            onClick={() => {
              setEditTechs(null);
            }}
          >
            X
          </span>
        </UpadateTechHeader>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="title" id="title">
            Nome do projeto
          </label>
          <input
            type="text"
            placeholder="Digite uma tecnologia..."
            name="title"
            id="title"
            {...register("title")}
            disabled
          />

          <label id="status" name="status" htmlFor="Selecionar status">
            Selecionar status
          </label>
          <select name="status" id="status" {...register("status")}>
            <option value="">Escolha um status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <DivButtonsTech>
            <ButtonTechsOne type="submit">Salvar alterações</ButtonTechsOne>

            <ButtonTechsTwo
              type="button"
              onClick={() => {
                removeTech(techId[0]);
                setEditTechs(null);
              }}
            >
              Excluir
            </ButtonTechsTwo>
          </DivButtonsTech>
        </form>
      </UpadateTechAll>
    </UpdateTechModalsStyle>
  );
};
