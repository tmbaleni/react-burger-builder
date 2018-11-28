import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
    const Controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
        {label: 'Bacon', type: 'bacon'},
    ];
    return (
      <div className={classes.BuildControls}>
        <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {Controls.map(item => {
          return <BuildControl 
                    key={item.label} 
                    label={item.label} 
                    added={() => props.ingredientAdded(item.type)}
                    removed={() => props.ingredientRemoved(item.type)}
                    disabled={props.disabled[item.type]}
                    />
        })}
        <button 
          className={classes.OrderButton} 
          disabled={!props.purchasable}
          onClick={props.purchasing}>
          Order Now</button>
      </div>
    )
}
export default buildControls;