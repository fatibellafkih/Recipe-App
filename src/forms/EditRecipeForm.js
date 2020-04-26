import React, { useState, useEffect } from 'react'

const EditRecipeForm = props => {
  const [recipe, setRecipe] = useState(props.currentRecipe)

  // useEffect
  useEffect(
    () => {
      setRecipe(props.currentRecipe)
    },
    [ props ]
  )

  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target
    setRecipe({ ...recipe, [name]: value })
  }

  // Editing form
  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateRecipe(recipe.id, recipe)
      }}>
    
       <label>Recipe's name</label>
      <input type="text" name="name" value={recipe.name} onChange={handleInputChange} />
      <label>Type</label>
      <input type="text" name="type" value={recipe.type} onChange={handleInputChange} />
      <label>Ingredients</label>
      <textarea name="ingredients" rows="4" cols="50" value={recipe.ingredients} onChange={handleInputChange}/>
      <button>Update Recipe</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditRecipeForm