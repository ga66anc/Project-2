import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Cocktails(){

const [ cocktail, setCocktail ] = useState([])

useEffect(() => {
  async function getCocktailData(){
    try {
      const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      setCocktail(data)
    } catch (err) {
      console.log(err)
    }
  }
  getCocktailData()
}, [])


  return (
    <>
    <h1>Cocktails</h1>
    { cocktail.length > 0 ? 
    <ul className='cocktail-list'>
      {cocktail.map(({ strDrink, idDrink }) => {
        return <li key={idDrink} >{strDrink}</li>
      })}
    </ul>
    :
    'Loading'
    }
    </>
  )

}