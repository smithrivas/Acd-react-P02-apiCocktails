import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cocktails from './components/Cocktails'
import Alert from './components/Alert'

function App() { 
  // Recoge los datos de la Api
  const [dataCocktail, setDataCocktail] = useState([])
  // Se le asigna el nombre a buscar
  const[name, setName] = useState("")

  useEffect(()=>{
    getData()
  }, [name])
        
  // Función que se encarga de traer los datos
  const getData = () => {
    axios      
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then(resp=>{        
        setDataCocktail(resp.data.drinks)
      })
      .catch(error=>{
        console.error(error)
      })
  }  

  // Se encarga de pasar al estado la palabra que se quiere buscar
  const searchDrink = (e) => {
    e.preventDefault()        
    setName(e.target[0].value.toLowerCase())    
  }

  return (
    <div className="App">
      <h1>Busca<span>Cocktail</span></h1>
      <div className='form'>
        <form onSubmit={(e)=>searchDrink(e)}>
          <input type="text" placeholder='Buscar por nombre' />
          <button type='submit'>Buscar</button>
          {
            dataCocktail === null ? <Alert/> : <></>
          }
        </form>      
      </div>
      
      <div className="cards">
        { 
          dataCocktail !== null ? dataCocktail.map( (cocktail, index)=> <Cocktails data={cocktail} key={index} /> ) : <></>
        }
      </div>
      <div>

      </div>
    </div>
  )
}

export default App
