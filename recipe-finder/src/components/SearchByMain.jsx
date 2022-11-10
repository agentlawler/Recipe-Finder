import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'

const SearchByMain = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        const getRecipes = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`)
            console.log(response.data.meals)
            setRecipes(response.data.meals)
        }

        getRecipes()
    }, [])

    let navigate = useNavigate()

    const showRecipe = (recipe) => {
        navigate(`${recipe.idMeal}`)
    }
    const initialState = {
        id: '',
        ingredient: '',
    }

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState([])
    
    const [formState, setFormState] = useState(initialState)

    const addText = (event) => {
        event.preventDefault()
        setIngredients(...ingredients, newIngredient[''])
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addText(event)
        setFormState(initialState)
        
    }

    const handleChange = (event) => {
        setFormState({...formState, ['']: event.target.value})
        console.log(formState)
        setNewIngredient({...newIngredient, ['']: event.target.value})
        console.log(newIngredient)
    }




if (!recipes) {
    return <h2>Cooking up Recipes from Scratch, Please Wait~</h2>
} else {
return(
        <div className="recipePage">
            
                <img className="banner" src='https://lh6.googleusercontent.com/HW6PxLdAfMbKPpLpP-lIVhna5QnbskPTz_pLydSL5b7qrJ6X_3Vzq5bot8ad7GBZNbwy6eyBzxtjuWeUkeHdqgC9C36cuTC-2wGmVVNOs-peP5hfgjlQr4SAV-b04eXJ5SluB7b6' alt='bannerAd'/>
            
                <form onSubmit={handleSubmit}>
                    <label htmlFor="ingredients"></label>
                        <input type='text'
                                id="ingredients"
                                onChange={handleChange}
                                value={formState.ingredients}>
                                </input>
                        
                        <button type='submit'>Search</button>
                </form>
                <h5>Search bar currently under construction</h5>
        <div className="recipeDisplay">
        {
            recipes.map((recipe) => (
                <div className='recipeCard' onClick={() => showRecipe(recipe)} key={recipe.strMeal}> 
                    
                    <img className="recipePreview" src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h3 className="recipeTitle">{recipe.strMeal}</h3>
                </div>
            ))
        }
        </div>
    </div>
    )
}
}

export default SearchByMain