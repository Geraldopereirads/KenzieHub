import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [editTechs, setEditTechs] = useState(null);
  const { techs, setTechs } = useContext(UserContext);
  const navigate = useNavigate();

  const RegisterTech = async (data) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Técnologia cadastrada com sucesso!");
      setTechs([...techs, response.data]);
      navigate("/home");
    } catch (error) {
      toast.error("Tecnologia ja cadastrada, tente outra!");
    }
  };

  const removeTech = async (id) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechs = techs.filter((tec) => tec.id !== id);
      setTechs(newTechs);
      toast.success("Técnologia detetada com sucesso!");
    } catch (error) {
      toast.error(
        "Não foi possivel deletar a técnologia no momento, tente mais tarde!"
      );
    }
  };

  const upadateTechsValue = async (data, id) => {
    console.log("cebola");
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = techs.map((tech) => {
        if (id === tech.id) {
          return { ...tech, ...data };
        } else {
          return tech;
        }
      });
      setTechs(newTechs);
      toast.success("Técnologia alterada com sucesso!");
    } catch (error) {
      console.log(error);
      console.log("batata")
      toast.error("Não foi possivel alterar a técnologia no momento.");
    }
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        RegisterTech,
        removeTech,
        upadateTechsValue,
        editTechs,
        setEditTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
