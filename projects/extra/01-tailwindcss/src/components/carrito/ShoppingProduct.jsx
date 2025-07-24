import Button from '../common/Button'
import { toast } from 'react-toastify'

const ShoppingProduct = ({ id, src, title, price, quantity, updateQuantity, deleteProduct }) => {
    const total = price * quantity;

    const handleClick = () => {
        deleteProduct(id)
        toast.success("Producto eliminado del carrito")
    }

    return (
        <div className="p-4 bg-white shadow-lg rounded-2xl flex justify-between">
            <div className="flex gap-2">
                <img className="rounded-2xl object-cover" src={src} width={150} alt={title} />
                <div className="flex flex-col gap-0.5 justify-center items-start">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <label htmlFor={`qty-${id}`}>Quantity:</label>
                    <input
                        id={`qty-${id}`}
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value >= 1) {
                                updateQuantity(id, value);
                            }
                        }}
                        className="w-[70px] border border-gray-600 shadow-lg rounded-2xl px-2 opacity-75 text-sm"
                    />
                    <p>Unit price: ${price}</p>
                    <p>Total: ${total}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <Button size={14} name={"Remove"} handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default ShoppingProduct;
