import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'

const RecipeList = ({recipes}) => {

    // const [recipes, setRecipes] = useState([])

    // useEffect(()=>{
    //     const getRecipes = async () => {
    //         const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    //         console.log(response.data.meals)
    //         setRecipes(response.data.meals)
    //     }

    //     getRecipes()
    // }, [])

    let navigate = useNavigate()

    const showRecipe = (recipe) => {
        navigate(`${recipe.idMeal}`)
    }

    
    if (!recipes) {
        return <h2>Cooking up Recipes from Scratch, Please Wait~</h2>
    } else {
    return(
            <div className="recipePage">
                
                    <img src='https://lh6.googleusercontent.com/HW6PxLdAfMbKPpLpP-lIVhna5QnbskPTz_pLydSL5b7qrJ6X_3Vzq5bot8ad7GBZNbwy6eyBzxtjuWeUkeHdqgC9C36cuTC-2wGmVVNOs-peP5hfgjlQr4SAV-b04eXJ5SluB7b6' alt='bannerAd'/>
                
            <h2>This is the recipe page</h2>
            <div className="recipeDisplay">
            {
                recipes.map((recipe) => (
                    <div className='recipeCard' onClick={() => showRecipe(recipe)} key={recipe.strMeal}> 
                        
                        <img className="recipePreview" src={recipe.strMealThumb} alt={recipe.strMeal}/>
                        <h3>{recipe.strMeal}</h3>
                    </div>
                ))
            }
            </div>
        </div>
        )
    }

}
export default RecipeList

//