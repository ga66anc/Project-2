import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import loadingGif from './loadingimg.gif'

export default function Cocktails() {
  const [cocktails, setCocktails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getCocktailData() {
      try {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
        )
        const { drinks } = response.data

        if (drinks.length > 0) {
          setCocktails(drinks)
        } else {
          console.error('No cocktails found.')
        }

        setLoading(false)
      } catch (err) {
        console.error('Error fetching cocktail data:', err)
        setLoading(false)
      }
    }

    getCocktailData()
  }, [])

  return (
    <>
      <h1>Cocktails</h1>
      {loading ? (
        <div className="loading-container">
          <img src={loadingGif} alt="Loading" className="loading-gif" />
        </div>
      ) : (
        <div className="cocktail-grid">
          {cocktails.map(({ strDrink, idDrink, strDrinkThumb }) => (
            <div key={idDrink} className="cocktail-card">
              <img
                src={strDrinkThumb}
                alt={strDrink}
                className="cocktail-image"
              />
              <Link to={`/cocktails/${strDrink}`}>{strDrink}</Link>
            </div>
          ))}
        </div>
      )}
    </>
  )
}