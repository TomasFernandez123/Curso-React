import Icon from "./Icon";
import { Link } from 'react-router-dom';

export default function Navbar({ search, searchValue, onSearchChange }) {
    return (
        <nav className="border border-gray-100 shadow-2xl text-black p-4">
            <div className="container mx-auto flex justify-between max-w-5xl items-center">
                <section className="flex items-center gap-2">
                    <Icon name="icon-shop" size={20} />
                    <h1 className="text-xl font-semibold"><Link to="/">ModernMart</Link></h1>
                </section>

                <ul className={`flex gap-4 ${!search ? "mr-6" : ""} `}>
                    <li><Link className="hover:font-semibold transition-transform" to="/">Home</Link></li>
                    <li><Link className="hover:font-semibold transition-transform" to="/productos">Shop</Link></li>
                    <li><Link className="hover:font-semibold transition-transform" to="#">Deals</Link></li>
                    <li><Link className="hover:font-semibold transition-transform" to="#">Contact</Link></li>
                </ul>

                <section className="flex gap-3 items-center">

                    {search && (
                        <input
                            className="border border-gray-400 rounded-2xl px-2 py-1"
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    )}

                    <ul className="flex gap-4">
                        <li>
                            <Link to="" className="hover:underline">
                                <Icon name="icon-profile" size={22} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/carrito" className="hover:underline">
                                <Icon name="icon-shopping-cart" size={22} />
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
        </nav>
    )
}
