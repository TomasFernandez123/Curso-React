import Button from './AddCart'

export default function Card({ title, src, price }) {
  return (
    <div className="flex flex-col items-start">
      <img className="rounded-xl w-full h-40 object-cover mb-2" src={src} alt={title} />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">${price}</p>
      <Button/>
    </div>
  )
}
