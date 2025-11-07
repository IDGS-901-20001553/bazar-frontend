const API = import.meta.env.VITE_API_BASE_URL;
console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL);


async function solicitud(ruta, opciones) {
    const res = await fetch(`${API}${ruta}`, opciones);
    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
    return res.json();
}

export const api = {
    buscar: (q) => solicitud(`/api/items${q ? `?q=${encodeURIComponent(q)}` : ""}`),
    obtenerPorId: (id) => solicitud(`/api/items/${id}`),
    agregarVenta: (productoId, cantidad = 1) =>
        solicitud(`/api/addSale`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: Number(productoId), qty: cantidad }),
        }),
    obtenerVentas: () => solicitud(`/api/sales`),
    };
