import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { rutas } from "./rutas.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/estilos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rutas} />
  </StrictMode>
);
