import { Card, Image } from "react-bootstrap";
import BarraBusqueda from "../components/BarraBusqueda";

export default function Inicio() {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "75dvh" }}>
        <Card className="p-4 shadow-lg" style={{ maxWidth: 520, width: "100%", backdropFilter: "blur(2px)" }}>
            <div className="text-center mb-3">
            <Image src="/icon.png" alt="logo" width={56} height={56} />
            </div>
            <h2 className="text-center mb-3">Bazar Online</h2>
            <BarraBusqueda />
        </Card>
        </div>
    );
}
