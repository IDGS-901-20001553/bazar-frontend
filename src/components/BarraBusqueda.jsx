import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BarraBusqueda({ inicial = "", botonOscuro = false }) {
    const [texto, setTexto] = useState(inicial);
    const navegar = useNavigate();

    const enviarBusqueda = (e) => {
        e.preventDefault();
        navegar(`/items?search=${encodeURIComponent(texto)}`);
    };

    return (
        <Form onSubmit={enviarBusqueda}>
        <InputGroup>
            <Form.Control
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Buscar producto..."
            />
            <Button type="submit" variant={botonOscuro ? "dark" : "primary"}>
            Buscar
            </Button>
        </InputGroup>
        </Form>
    );
}
