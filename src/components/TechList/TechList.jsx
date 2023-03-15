import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechListStyle, TechListStyleDiv} from "./TechlistStyle";

export const TechList = ({setEditTechs}) => {
  const { techs } = useContext(UserContext);


  return (
    <>
      {techs.length > 0 ? (
        <TechListStyle>
          {techs.map(tech => (
            <li key={tech.id} onClick={ () => {setEditTechs(tech)} }>
              <h4>{tech.title}</h4>
              <h5>{tech.status}</h5>
            </li>
          ))}
        </TechListStyle>
      ) : (
        <TechListStyleDiv>
          <p>Nenhuma Tecnologia foi cadastrada ainda</p>
        </TechListStyleDiv>
      )}
    </>
  );
};
