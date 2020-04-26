import React, { useState } from 'react'

const AddRecipeForm = props => {
  const initialFormState = { id: null, name: '', type: '', ingredients:''}

    const [recipe, setRecipe] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setRecipe({ ...recipe, [name]: value })
        
      }


  return (
    <form 
    onSubmit={event => {
      event.preventDefault()
      if (!recipe.name || !recipe.type || !recipe.ingredients) return
  
      props.addRecipe(recipe)
      setRecipe(initialFormState)
    }}
    >
      <label>Recipe's name</label>
      <input type="text" name="name" value={recipe.name} onChange={handleInputChange} />
      <label>Type</label>
      <input type="text" name="type" value={recipe.type} onChange={handleInputChange} />
      <label>Ingredients</label>
      <textarea name="ingredients" rows="4" cols="50" value={recipe.ingredients} onChange={handleInputChange}/>
      <button>Add new recipe</button>
    </form>
  )
}

export default AddRecipeForm