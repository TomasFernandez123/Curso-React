import Navbar from './components/NavBar'
import Card from './components/CardGrid'
import Footer from './components/Footer'
import Carrusel from './components/Carrusel'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <Carrusel/>
      
      <Card/>
      <Footer />
    </div>
  )
}

export default App
