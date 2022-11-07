import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'

const RecipeList = (props) => {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        const getRecipes = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            console.log(response.data.meals)
            setRecipes(response.data.meals)
        }

        getRecipes()
    }, [])

    let navigate = useNavigate()

    const showRecipe = (recipe) => {
        navigate(`${recipe.idMeal}`)
    }

    
    if (!recipes) {
        return <h2>Cooking up Recipes from Scratch, Please Wait~</h2>
    } else {
    return(
            <div className="recipePage">
                
                    <img src='https://www.hornmatters.com/wp-content/uploads/2016/01/banner-adplaceholder.png' alt='bannerAd'/>
                
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