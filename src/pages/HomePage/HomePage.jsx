import React, { useContext, useState } from "react";
import Logo from "../../assets/img/Logo.svg";
import adicionar from "../../assets/img/adicionar.svg";
import {
  AdicionarModal,
  BorderHomeDiv,
  ButtonSair,
  DivOpenModal,
  HomePageStyle,
  ImgLogoHome,
} from "./HomePageStyle";
import { UserContext } from "../../providers/UserContext";
import { FormModal } from "../../components/formModal/FormModal";
import { TechList } from "../../components/TechList/TechList";
import { UpdateTechs } from "../../components/UpdateTechs/UpdateTechs";
import { TechContext } from "../../providers/TechContext";

export const HomePage = () => {
  const { user, LogoutUser } = useContext(UserContext);
  const [modalIsOpen, setOpenModal] = useState(false);
  const { editTechs, setEditTechs } = useContext(TechContext);

  function openModal() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <>
      <HomePageStyle>
        <header>
          <ImgLogoHome src={Logo} alt="logo" />
          <ButtonSair onClick={() => LogoutUser(true)}>Sair</ButtonSair>
        </header>
        {user && (
          <BorderHomeDiv>
            <h2>Olá {user.name}</h2>
            <small>{user.course_module}</small>
          </BorderHomeDiv>
        )}

        <DivOpenModal>
          <span>Tecnologia</span>
          <AdicionarModal onClick={openModal}>
            <img src={adicionar} alt="Abrir Modal" onClick={openModal} />
          </AdicionarModal>
          {modalIsOpen ? <FormModal closeModal={closeModal} /> : null}
          {editTechs ? <UpdateTechs setEditTechs={setEditTechs} /> : null}
        </DivOpenModal>

        <TechList setEditTechs={setEditTechs} />
      </HomePageStyle>
    </>
  );
};
