import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const FormularioZodiaco = ({ alEnviar }) => {
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (nombre && fechaNacimiento) {
        alEnviar(nombre, fechaNacimiento);
        }
    };

    return (
        <Card className="shadow-lg">
        <Card.Body>
            <h3 className="text-center mb-4">Ingresa tus datos</h3>
            <Form onSubmit={manejarEnvio}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                type="text"
                placeholder="Ej. Eduardo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                required
                />
            </Form.Group>

            <div className="text-center">
                <Button type="submit" variant="primary">Descubre tu signo</Button>
            </div>
            </Form>
        </Card.Body>
        </Card>
    );
};

export default FormularioZodiaco;
