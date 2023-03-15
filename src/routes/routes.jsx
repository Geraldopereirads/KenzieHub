import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProtectedRoutes } from "../components/ProtectedRoutes/protectedRoutes";
import { TechProvider } from "../providers/TechContext";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<h1>404 Pagina não encontrada</h1>} />

      <Route path="/home" element={<ProtectedRoutes />}>
        <Route
          path="/home"
          element={
            <TechProvider>
              <HomePage />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};
