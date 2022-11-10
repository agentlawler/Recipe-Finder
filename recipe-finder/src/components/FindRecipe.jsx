import { useState } from "react"

import { useNavigate } from "react-router-dom"

const FindRecipe = ({recipes}) => {

    const initialState = {
        id: '',
        ingredient: '',
    }

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState([])
    
    const [formState, setFormState] = useState(initialState)

    const addIngredient = (event) => {
        event.preventDefault()
        setIngredients(...ingredients, newIngredient[''])
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addIngredient(event)
        setFormState(initialState)
        
    }

    const handleChange = (event) => {
        setFormState({...formState, ['']: event.target.value})
        console.log(formState)
        setNewIngredient({...newIngredient, ['']: event.target.value})
        console.log(newIngredient)
    }

     const searchFilter = () => {
        let meals
        recipes.filter((recipe) => {
            console.log(recipe)
            if (recipe.ingredients.food.includes(ingredients)){return(recipe)} 
        })
     }  

     let navigate = useNavigate()

     const showRecipe = (recipe) => {
         navigate(`${recipe.idMeal}`)
     }
 

    //console.log(ingredients)
    
    return (
        <div>
            <div className="finderForm">
                
                <h2>This is the finder page</h2>
                <p>Instruction blurb</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="ingredients"></label>
                        <input type='text'
                                id="ingredients"
                                onChange={handleChange}
                                value={formState.ingredients}>
                                </input>
                        
                        <button type='submit'>Add</button>
                </form>
            </div>
            <div className="recipeBlock">
                {/* {
                    recipes.map((recipe, i) => {
                        let recipeIng = Object.keys(recipe)
                        const filt = recipeIng.filter((key) => key.startsWith('strIngredient'))
                        console.log(filt)
                        if recipe[filt[i]].includes(ingredients) 
                        return ( 
                        <div className='recipeCard' onClick={() => showRecipe(recipe)} key={recipe.strMeal}> 
                            
                            <img className="recipePreview" src={recipe.strMealThumb} alt={recipe.strMeal}/>
                            <h3>{recipe.strMeal}</h3>
                        </div>
                    )})
                } */}
            </div>
            <div className="addedIng">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )

}
export default FindRecipe