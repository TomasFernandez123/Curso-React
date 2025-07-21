import Card from "./Card"

export default function CardGrid() {
    const items = [
        { title: "Producto 1", src: "/carousel/1.jpg", price: 100 },
        { title: "Producto 2", src: "/carousel/2.jpg", price: 120 },
        { title: "Producto 3", src: "/carousel/3.jpg", price: 90 },
        { title: "Producto 4", src: "/carousel/4.jpg", price: 150 },
    ]

    return (
        <main className="max-w-5xl mx-auto">
            <h2 className="my-4 text-2xl font-semibold">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
            <div className="w-full flex flex-col items-center justify-center mt-4">
                <p className="opacity-70">See more</p>
                <a className="text-center" href="#">⬇</a>
            </div>
        </main>
    )
}
