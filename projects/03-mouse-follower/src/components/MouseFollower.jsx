import { useEffect, useState } from 'react';

export function MouseFollower() {
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        console.log('Proyecto 3: Mouse Follower', { enabled })

        const handleMove = (e) => {
            const { clientX, clientY } = e
            setPosition({ x: clientX, y: clientY })
        }

        if (enabled) {
            window.addEventListener('mousemove', handleMove)
        }

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    }, [enabled])
    
    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled)

        return () => {
            document.body.classList.remove('no-cursor')
        }
    }, [enabled])

    return (
        <main>
            <div style={{
                position: 'absolute',
                background: '#000',
                boxShadow: '-20px -10px 50px #fff',
                borderRadius: '50%',
                opacity: 0.5,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                transform: `translate(${position.x}px, ${position.y}px)`,
            }} />
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar' : 'Activar'} Puntero</button>
        </main>
    )
}