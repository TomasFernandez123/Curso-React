import { useState } from 'react'
import './App.css'

const users = [
  { id: 1, name: 'Juan Perez', email: 'juan@example.com' },
  { id: 2, name: 'Ana López', email: 'ana@example.com' },
  { id: 3, name: 'Carlos García', email: 'carlos@example.com' },
  { id: 4, name: 'Lucía Martínez', email: 'lucia@example.com' }
]

function App() {
  const [search, setSearch] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <main>
      <form>
        <input name='name' type="text" value={search} onChange={(e) => setSearch(e.target.value)} 
        placeholder='🔎 Buscar' onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}/>
      </form>

      {isFocused && (
        <section>
          <h2>Resultados</h2>
          {filteredUsers.length>0
            ? <ul>
              {filteredUsers.map(user => (
                <li key={user.id}>
                  <img src="../public/vaso.png" />
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
            : <p>No se encontraron resultados</p>
            }
        </section>
      )}

    </main>
  )
}

export default App
