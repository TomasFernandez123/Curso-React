import Icon from "./Icon";

export default function Navbar() {
    return (
        <nav className="border border-gray-100 shadow-2xl text-black p-4">
            <div className="container mx-auto flex justify-between max-w-5xl items-center">
                <section className="flex items-center gap-2">
                    <Icon name="icon-shop" size={20} />
                    <h1 className="text-xl font-semibold">ModernMart</h1>
                </section>

                <ul className="flex gap-4">
                    <li><a className="hover:font-semibold transition-transform" href="#">Home</a></li>
                    <li><a className="hover:font-semibold transition-transform" href="#">Shop</a></li>
                    <li><a className="hover:font-semibold transition-transform" href="#">Deals</a></li>
                    <li><a className="hover:font-semibold transition-transform" href="#">Contact</a></li>
                </ul>

                <section className="flex gap-3 items-center">
                    <input className="border border-gray-400 rounded-2xl
                    px-2 py-1" type="text" name="" id="" placeholder="Search..."/>

                    <ul className="flex gap-4">
                        <li>
                            <a href="#" className="hover:underline">
                                <Icon name="icon-profile" size={22} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                <Icon name="icon-shopping-cart" size={22} />
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </nav>
    )
}
