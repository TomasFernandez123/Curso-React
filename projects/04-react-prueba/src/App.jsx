import './App.css';
import { useCatFact } from './hooks/useCatFact';

export function App() {
  const { fact, imageURL, refreshFact } = useCatFact();

  console.log(imageURL)

  return (
    <main className='app'>
      <h1>App de Gatos</h1>
      <button onClick={refreshFact}>Get new Fact</button>
      {fact && <p id='fact'>{fact}</p>}
      {imageURL && <img id='image-fact' src={imageURL} alt={imageURL}/>}
    </main>
  );
}
