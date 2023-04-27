import './App.css';
import './card.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
export default function App() {
  // const base = import.meta.env.VITE_APP_URL;
  const [data, setData] = useState([])

  const dataShow = 
  data.map((card) => <Card   title={card.title} city={card.city}
  desc={card.desc} image={card.image} key={card.id}  />) ;

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => setData(data.map((card) => card)))
  }, [])


  return (
    <main>
      <section className='cards'>
        <div className="container">
          <div className="mainCard">
            <h1 className='title'>
              Responsive dynamic cards
            </h1>
            <div className='row'>
              {dataShow}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


