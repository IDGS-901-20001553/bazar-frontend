import { Outlet, useLocation, Link, useSearchParams } from "react-router-dom";
import { Container, Navbar, Image } from "react-bootstrap";
import BarraBusqueda from "./BarraBusqueda";

export default function Contenedor() {
    const { pathname } = useLocation();
    const [sp] = useSearchParams();
    const termino = sp.get("search") || "";

    const mostrarFondo =
        pathname === "/" ||
        pathname.startsWith("/items") ||
        pathname.startsWith("/item") ||
        pathname.startsWith("/sales");

    const estiloFondo = mostrarFondo
        ? {
            minHeight: "100vh",
            backgroundImage: "url('/bg.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
        }
        : { minHeight: "100vh", backgroundColor: "#f7f7f7" };

    return (
        <div style={estiloFondo}>
        {pathname.startsWith("/items") && (
            <Navbar bg="transparent" className="pt-3 px-3">
            <Navbar.Brand
                as={Link}
                to="/"
                className="d-flex align-items-center gap-2 text-light fw-bold"
            >
                <Image src="/icon.png" alt="logo" width={32} height={32} />
                <span>Bazar Online</span>
            </Navbar.Brand>
            <div
                className="ms-auto"
                style={{ minWidth: 360, maxWidth: 560, width: "100%" }}
            >
                <BarraBusqueda inicial={termino} botonOscuro />
            </div>
            </Navbar>
        )}

        <Container className="py-4">
            <Outlet />
        </Container>
        </div>
    );
}
