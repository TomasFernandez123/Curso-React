export default function AddCart({ name, size = 12, handleClick = null, active = true }) {
    return (
        <button
            className={`rounded-2xl px-2 py-1 ml-1 mt-1 
                ${active ? 'bg-amber-400 shadow-2xl hover:scale-105 transition-transform cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            onClick={handleClick}
        >
            <p style={{ fontSize: size }} className="text-white/90">{name}</p>
        </button>
    );
}
