import React from 'react'

const RecipeTable = props => {
 
  return (
  <table >
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Ingredients</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
{props.recipes.length > 0 ? (
   props.recipes.map(recipe =>
      <tr key={recipe.id}>
            <td>{recipe.name}</td>
            <td>{recipe.type}</td>
            <td>{recipe.ingredients}</td>
        <td>
        <button onClick={() => { props.editRow(recipe) }} className="button muted-button"> Edit </button>
        <button className="button muted-button" onClick={() => props.deleteRecipe(recipe.id)} >Delete</button>
        </td>
      </tr>
  ) ): (
        <tr>
        <td colSpan={3}>No recipes</td>
      </tr>
    )
  }</tbody>
  </table>
  
)}

export default RecipeTable
