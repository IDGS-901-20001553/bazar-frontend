import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import { Card, Badge, Button, Alert, Spinner } from "react-bootstrap";

export default function DetalleProducto() {
    const { id } = useParams();
    const navegar = useNavigate();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState({
        mostrar: false,
        variante: "success",
        texto: "",
    });

    useEffect(() => {
        let vivo = true;
        api
        .obtenerPorId(id)
        .then((d) => vivo && setProducto(d))
        .catch(() => setProducto(null))
        .finally(() => vivo && setCargando(false));
        return () => (vivo = false);
    }, [id]);

    const comprar = async () => {
        try {
        await api.agregarVenta(id, 1);
        setAlerta({
            mostrar: true,
            variante: "success",
            texto: "Compra registrada correctamente",
        });
        setTimeout(() => navegar("/sales"), 800);
        } catch {
        setAlerta({
            mostrar: true,
            variante: "danger",
            texto: "Error al registrar la compra",
        });
        }
    };

    if (cargando)
        return (
        <div className="py-5 text-center">
            <Spinner animation="border" />
        </div>
        );
    if (!producto) return <div className="py-5">Producto no encontrado</div>;

    return (
        <Card
        className="shadow-lg border-0 rounded-4 p-4 mx-auto"
        style={{ maxWidth: 800, backgroundColor: "#d0b69a" }} 
        >
        {alerta.mostrar && <Alert variant={alerta.variante}>{alerta.texto}</Alert>}

        {producto.images?.[0] && (
            <img
            src={producto.images[0]}
            alt={producto.title}
            className="img-fluid rounded mb-3"
            style={{ maxHeight: 300, objectFit: "contain" }}
            />
        )}

        <h3 className="fw-bold">{producto.title}</h3>
        <div className="mb-2">
            <Badge bg="success">${producto.price}</Badge>
            <small className="ms-2">⭐ {producto.rating ?? 0}</small>
        </div>
        <p>
            <strong>Marca:</strong> {producto.brand} ·{" "}
            <strong>Categoría:</strong> {producto.category}
        </p>
        <p>
            <strong>Stock:</strong> {producto.stock}
        </p>
        <p>{producto.description}</p>

        <div className="d-flex gap-3 mt-3 justify-content-center">
            <Button variant="dark" onClick={comprar}>
            Comprar
            </Button>
            <Button variant="outline-success" onClick={() => navegar("/")}>
            Regresar
            </Button>
        </div>
        </Card>
    );
}
