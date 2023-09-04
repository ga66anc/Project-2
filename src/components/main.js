import React, { useState } from 'react'
import axios from 'axios'

export default function Main() {
  const [randomCocktail, setRandomCocktail] = useState(null)

  const fetchRandomCocktail = async () => {
    try {
      const response = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      );
      const { drinks } = response.data;

      if (drinks && drinks.length > 0) {
        setRandomCocktail(drinks[0])
      } else {
        console.error('Random cocktail not found.')
      }
    } catch (err) {
      console.error('Error fetching random cocktail:', err)
    }
  };

  return (
    <main className="mains">
      <h1>Welcome to Cocktail Party</h1>
      <button id='random' onClick={fetchRandomCocktail}>Random Cocktail</button>

      {randomCocktail && (
        <div className="random-cocktail-details">
          <div className="random-cocktail-card">
            <h2>{randomCocktail.strDrink}</h2>
            <img
              src={randomCocktail.strDrinkThumb}
              alt={randomCocktail.strDrink}
              className="cocktail-image"
            />
            <h3>Instructions:</h3>
            <p>{randomCocktail.strInstructions}</p>
          </div>
        </div>
      )}
    </main>
  )
}