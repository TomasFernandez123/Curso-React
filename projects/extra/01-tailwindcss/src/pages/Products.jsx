import { useEffect, useState } from "react";
import CardGrid from "../components/home/CardGrid"

export default function Products({ searchValue }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al obtener productos:', err)
                setLoading(false)
            });
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 
                border-blue-500 border-solid"></div>
            </div>
        );
    }

    return (
        <CardGrid active={false} title={"List of products"} products={filteredProducts} />
    )
}