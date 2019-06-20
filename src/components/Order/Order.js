import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const ingredients = [];
    for ( let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]})
    }
    const ingredientsOutput = ingredients.map(item => {
        return <span 
        style={{
            textTransform: 'capitalize',
            display: 'inline-block'
        }}
        key={item.name}>{item.name} ({item.amount}) ,  </span>
    })
    return (
    <div className={classes.Order}>
        <p>Ingredients:  {ingredientsOutput}</p>
        <p>Price: <strong> ${props.price.toFixed(2)}</strong></p>
    </div>
    )
}
export default order;