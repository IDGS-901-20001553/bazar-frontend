// src/paginas/ComprasRegistradas.jsx
import { useEffect, useState } from "react";
import { api } from "../api";
import { Row, Col, Card, Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ComprasRegistradas() {
    const [datos, setDatos] = useState({ total: 0, sales: [] });
    const navegar = useNavigate();

    useEffect(() => {
        let activo = true;
        api
        .obtenerVentas()
        .then((d) => activo && setDatos(d))
        .catch(() => setDatos({ total: 0, sales: [] }));
        return () => (activo = false);
    }, []);

    return (
        <div className="py-2 text-center">
        <h3 className="fw-bold mb-4 text-white">Compras Registradas</h3>

        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {datos.sales.map((v) => {
            const total = (v.price || 0) * (v.qty || 1);
            const fecha = v.createdAt
                ? new Date(v.createdAt).toLocaleString()
                : "-";
            return (
                <Col key={v.id}>
                <Card
                    className="h-100 shadow border-0 rounded-4"
                    style={{ backgroundColor: "#d0b69a" }} 
                >
                    <Card.Body>
                    <Card.Title>{v.title}</Card.Title>
                    <Card.Text>
                        <strong>Fecha:</strong> {fecha}
                    </Card.Text>
                    <Card.Text>
                        <strong>Precio:</strong> ${v.price} · Cantidad:{" "}
                        <Badge bg="secondary">{v.qty}</Badge>
                    </Card.Text>
                    <Card.Text>
                        <strong>Total:</strong> ${total}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            );
            })}
        </Row>

        <div className="mt-5">
            <Button variant="dark" size="lg" onClick={() => navegar("/")}>
            Salir
            </Button>
        </div>
        </div>
    );
}
