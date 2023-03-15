import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const autoLoginUser = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization:  `Bearer ${token}`,
            }
          });

          setUser(response.data);
          setTechs(response.data.techs);
          navigate("/home");
          
        } catch (error) {
          console.error(error)
          setUser(null)
          localStorage.removeItem("@TOKEN");
        }
      }
      autoLoginUser()
    }
  }, []);


  const LoginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      setTechs(response.data.user.techs);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Login efetuado com sucesso");
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha invalido");
    }
  };


  const LogoutUser = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };



  const registerUser = async (data) => {
    try {
      await api.post("/users", data);
      navigate("/home");
      toast.success("Usuário criado com sucesso");
    } catch (error) {
      toast.error("Erro ao cadastrar um usuário, Tente usar outro Email");
    }
  };

  return (
    <UserContext.Provider
      value={{
        techs,
         setTechs,
        LoginUser,
        user,
        registerUser,
        LogoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
