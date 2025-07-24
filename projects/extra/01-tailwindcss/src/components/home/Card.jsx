import { useRef } from 'react'
import Button from '../common/Button'
import { toast } from 'react-toastify'

export default function Card({ title, image, price, handleClick, id }) {
  const inputRef = useRef()

  const onClick = () => {
    const quantity = Number(inputRef.current.value) || 1
    handleClick(id, quantity)
    toast.success("Producto agregado al carrito")
  }

  return (
    <div className="flex flex-col items-start">
      <img className="shadow-2xl rounded-2xl w-full h-40 object-cover mb-2" src={image} alt={title} />
      <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
      <p className="text-gray-600">${price}</p>
      <input
        ref={inputRef}
        type="number"
        min={1}
        className="w-[70px] border border-gray-600 shadow-lg rounded-2xl px-2 opacity-75 text-sm
        ml-1 mt-1"
      />
      <Button name={"Add to cart"} handleClick={onClick}/>
    </div>
  )
}
