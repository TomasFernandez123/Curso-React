import { useState } from "react"

const images = [
    "/carousel/1.jpg",
    "/carousel/2.jpg",
    "/carousel/3.jpg",
    "/carousel/4.jpg"
]

export default function Carrusel() {
    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden m-2">
            <div className="relative h-64 md:h-96 transition-all duration-500">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    />
                ))}
            </div>

            <button onClick={prevSlide} className="absolute top-1/2 left-2 transform 
                -translate-y-1/2 z-20  text-black p-2 rounded-full 
                shadow hover:bg-white transition">
                ⬅
            </button>

            <button onClick={nextSlide} className="absolute top-1/2 right-2 transform 
                -translate-y-1/2 z-20 text-black p-2 rounded-full 
                shadow hover:bg-white transition">
                ➡
            </button>
        </div>
    )
}
