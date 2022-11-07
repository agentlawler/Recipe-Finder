import { useState } from "react"

const FindRecipe = () => {

    const initialState = {
        ingredients: '',
    }

    const [formState, setFormState] = useState(initialState)

    // const addIngredient = (event) => {
    //     event.preventDefault()
    //     const currentIng = 
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        //add
        setFormState(initialState)
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <div className="finderForm">
                <img src='https://www.hornmatters.com/wp-content/uploads/2016/01/banner-adplaceholder.png' alt='bannerAd'/>
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
                {/* this is where mapped recipes go */}
            </div>
            <div className="addedIng">

            </div>
        </div>
    )

}
export default FindRecipe