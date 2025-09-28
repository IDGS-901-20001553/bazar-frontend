import { Card } from 'react-bootstrap';

const ResultadoZodiaco = ({ datosUsuario, informacionZodiaco }) => {
    return (
        <Card className="shadow-lg text-center">
        <Card.Body>
            <h3>Tu resultado</h3>
            {informacionZodiaco && datosUsuario ? (
            <>
                <h4 className="text-primary">Tu Signo es: {informacionZodiaco.signo}</h4>
                <img 
                src={informacionZodiaco.imagen} 
                alt={informacionZodiaco.signo} 
                className="img-fluid rounded-circle border border-primary my-3"
                style={{ width: '120px', height: '120px' }}
                onError={(e) => { e.target.src = '/images/default.png'; }}
                />
                <h5>{datosUsuario.nombre}</h5>
                <p className="text-muted">{datosUsuario.fechaNacimiento}</p>
                <p><strong> {datosUsuario.nombre}:</strong> {informacionZodiaco.horoscopo}</p>
            </>
            ) : (
            <p className="text-muted">Aquí aparecerá tu signo cuando completes el formulario.</p>
            )}
        </Card.Body>
        </Card>
    );
};

export default ResultadoZodiaco;
