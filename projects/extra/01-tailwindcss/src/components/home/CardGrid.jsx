import Card from "./Card"
import Icon from "../common/Icon"
import { Link } from 'react-router-dom';

export default function CardGrid({ active = true, title = "Featured Products", products }) {

    const handleClick = (id, quantity) => {
        const index = products.findIndex(item => item.id === id);

        if (index !== -1) {
            const carrito = JSON.parse(localStorage.getItem('cart')) || [];
            const obj = { ...products[index], quantity };

            const existingIndex = carrito.findIndex(item => item.id === id);

            if (existingIndex !== -1) {
                carrito[existingIndex].quantity += quantity;
            } else {
                carrito.push(obj);
            }

            localStorage.setItem('cart', JSON.stringify(carrito));
        }
    };


    return (
        <main className="max-w-5xl mx-auto grow">
            <h2 className="my-4 text-2xl font-semibold">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((item, index) => (
                    <Card key={index} {...item} handleClick={handleClick} />
                ))}
            </div>
            {active && (
                <div className="w-full flex flex-col items-center justify-center mt-4">
                    <p className="opacity-70">See more</p>
                    <Link className="text-center rotate-[270deg] border p-1 rounded-full animate-pulse"
                        to="/productos">
                        <Icon name="icon-arrow-left" size={20} /></Link>
                </div>
            )}
        </main>
    )
}
