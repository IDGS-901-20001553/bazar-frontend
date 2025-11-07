import { createBrowserRouter } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import ResultadosBusqueda from "./Pages/ResultadosBusqueda";
import DetalleProducto from "./Pages/DetalleProducto";
import ComprasRegistradas from "./Pages/ComprasRegistradas";
import Contenedor from "./components/Contenedor";

export const rutas = createBrowserRouter([
    {
        element: <Contenedor />,
        children: [
        { path: "/", element: <Inicio /> },
        { path: "/items", element: <ResultadosBusqueda /> },
        { path: "/item/:id", element: <DetalleProducto /> },
        { path: "/sales", element: <ComprasRegistradas /> },
        ],
    },
]);
