import ShoppingProduct from "./ShoppingProduct"
import OrderSummary from "./OrderSummary"
import { useEffect, useState } from "react";

const ShoppingCard = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const updateQuantity = (id, newQty) => {
        const updatedItems = [...items];
        const index = updatedItems.findIndex(item => item.id === id);
        if (index !== -1) {
            updatedItems[index] = {
                ...updatedItems[index],
                quantity: newQty,
            };
            setItems(updatedItems);
        }
    };

    const deleteProduct = (id) => {
        const updatedItems = items.filter(item => item.id !== id)
        setItems(updatedItems)
    }

    // Persistir en local storage
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(items))
    },[items])


    return (
        <div className="bg-gray-50 rounded-2xl w-full max-w-5xl mx-auto shadow-2xl p-4">
            <h1 className="text-[20px] mb-2">Shopping Cart</h1>
            <div className="flex flex-col gap-2">
                {items.length > 0 ? (
                    items.map(item => (
                        <ShoppingProduct
                            key={item.id}
                            id={item.id}
                            src={item.image}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                            updateQuantity={updateQuantity}
                            deleteProduct={deleteProduct}
                        />
                    ))
                ) : (
                    <p className="text-gray-600 text-center py-4">No hay productos en el carrito.</p>
                )}
            </div>
            <OrderSummary products={items} active={items.length>0}/>
        </div>
    )
}

export default ShoppingCard