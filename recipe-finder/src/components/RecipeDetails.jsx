import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const RecipeDetails = ({recipes}) => {

    let {idMeal} = useParams()

    const [recipe, setRecipe] = useState(null)

    useEffect (() => {
        let selectedRecipe = recipes.find(
            recipe => recipe.idMeal == parseInt(idMeal)
        )
            setRecipe(selectedRecipe)
            
    },[recipe,idMeal])


    return recipe ? (
        <div className="recipeDetail">
            
            <div className="detailHeader">
                <img src={recipe.strMealThumb}/>
            </div>
            <div className="recipeInfo">
                <h1 className="recipeTitle">{recipe.strMeal}</h1>
                <h3 className="recipeCat">{recipe.strCategory}</h3>
                <h3 className="recipeOrigin">Origin: {recipe.strArea}</h3>
                
                <ul className="ingList" >
                    <li>{recipe.strMeasure1} {recipe.strIngredient1}</li>
                    <li>{recipe.strMeasure2} {recipe.strIngredient2}</li>
                    <li>{recipe.strMeasure3} {recipe.strIngredient3}</li>
                    <li>{recipe.strMeasure4} {recipe.strIngredient4}</li>
                    <li>{recipe.strMeasure5} {recipe.strIngredient5}</li>
                    <li>{recipe.strMeasure6} {recipe.strIngredient6}</li>
                    <li>{recipe.strMeasure7} {recipe.strIngredient7}</li>
                    <li>{recipe.strMeasure8} {recipe.strIngredient8}</li>
                    <li>{recipe.strMeasure9} {recipe.strIngredient9}</li>
                    <li>{recipe.strMeasure10} {recipe.strIngredient10}</li>
                    <li>{recipe.strMeasure11} {recipe.strIngredient11}</li>
                    <li>{recipe.strMeasure12} {recipe.strIngredient12}</li>
                    <li>{recipe.strMeasure13} {recipe.strIngredient13}</li>
                    <li>{recipe.strMeasure14} {recipe.strIngredient14}</li>
                    <li>{recipe.strMeasure15} {recipe.strIngredient15}</li>
                    <li>{recipe.strMeasure16} {recipe.strIngredient16}</li>
                    <li>{recipe.strMeasure17} {recipe.strIngredient17}</li>
                    <li>{recipe.strMeasure18} {recipe.strIngredient18}</li>
                    <li>{recipe.strMeasure19} {recipe.strIngredient19}</li>
                    <li>{recipe.strMeasure20} {recipe.strIngredient20}</li>
                </ul>
                {/* NEED TO FIGURE OUT HOW TO MAKE THIS NULL IF NO MORE INGREDIENTS */}
                <p className="recipeInstruct">Instructions: {recipe.strInstructions}</p>
            </div>
        </div>
    ): null
}

export default RecipeDetails