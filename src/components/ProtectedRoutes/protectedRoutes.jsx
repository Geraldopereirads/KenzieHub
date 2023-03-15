import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return <>{user ? <Outlet /> : null}</>;
};
