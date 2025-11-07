import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { api } from "../api";
import { Row, Col, Card, Badge, Button } from "react-bootstrap";

export default function ResultadosBusqueda() {
    const [sp] = useSearchParams();
    const termino = sp.get("search") || "";
    const [datos, setDatos] = useState({ total: 0, items: [] });

    useEffect(() => {
        let activo = true;
        api
        .buscar(termino)
        .then((d) => activo && setDatos(d))
        .catch(() => setDatos({ total: 0, items: [] }));
        return () => (activo = false);
    }, [termino]);

    return (
        <div>
        <p className="mt-3 text-white fw-semibold text-center fs-5">
            Resultados de la búsqueda de:{" "}
            <span className="fw-bold">{termino || "—"}</span> ·{" "}
            <span>{datos.total}</span>
        </p>

        <Row xs={1} md={2} lg={3} className="g-4">
            {datos.items.map((p) => (
            <Col key={p.id}>
                <Card
                className="h-100 shadow-lg border-0 rounded-4"
                style={{ backgroundColor: "#d0b69a" }} 
                >
                {p.images?.[0] && (
                    <Card.Img
                    variant="top"
                    src={p.images[0]}
                    alt={p.title}
                    style={{
                        objectFit: "contain",
                        height: 220,
                        backgroundColor: "#fff",
                        borderTopLeftRadius: "1rem",
                        borderTopRightRadius: "1rem",
                    }}
                    />
                )}
                <Card.Body>
                    <Card.Title className="fw-bold text-dark">
                    {p.title}
                    </Card.Title>
                    <div className="mb-2">
                    <Badge bg="info" className="me-2">
                        {p.category}
                    </Badge>
                    <small>⭐ {p.rating ?? 0}</small>
                    </div>
                    <Card.Text style={{ minHeight: 64 }}>
                    {(p.description || "").slice(0, 100)}
                    {(p.description || "").length > 100 ? "…" : ""}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                    <h5 className="fw-bold">${p.price}</h5>
                    <Button
                        as={Link}
                        to={`/item/${p.id}`}
                        variant="dark"
                        size="sm"
                        className="rounded-pill px-3"
                    >
                        Ver detalle
                    </Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </div>
    );
}
