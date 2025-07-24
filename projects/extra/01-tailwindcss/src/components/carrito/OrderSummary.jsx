import { useEffect, useState } from 'react';
import Button from '../common/Button';

export default function OrderSummary({ products , active}) {
    const [subTotal, setSubTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!products || products.length === 0) {
            setSubTotal(0);
            setShipping(0);
            setTotal(0);
            return;
        }

        const newSubTotal = products.reduce((acc, product) => {
            return acc + product.price * product.quantity;
        }, 0);

        const estimatedShipping = newSubTotal > 0 ? newSubTotal * 0.05 : 0;
        const newTotal = newSubTotal + estimatedShipping;

        setSubTotal(newSubTotal);
        setShipping(estimatedShipping);
        setTotal(newTotal);
    }, [products]);

    return (
        <div className="p-4 bg-white shadow-lg rounded-2xl">
            <h1 className="text-lg mb-2">Order Summary</h1>
            <p className="text-sm">SubTotal: ${subTotal.toFixed(2)}</p>
            <p className="text-sm">Estimated Shipping: ${shipping.toFixed(2)}</p>
            <strong className="text-lg mt-1 block">Total: ${total.toFixed(2)}</strong>
            <div className="w-full flex justify-center mt-4">
                <Button size={18} name={"Proceed to checkout"} active={active}/>
            </div>
        </div>
    );
}
