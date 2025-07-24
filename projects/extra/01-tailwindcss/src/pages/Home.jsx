import Carrusel from "../components/home/Carrusel"
import Card from "../components/home/CardGrid"
import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error al obtener productos:', err));
    }, []);

    return (
        <div>
            <Carrusel />

            <Card products={products}/>
        </div>
    )
}