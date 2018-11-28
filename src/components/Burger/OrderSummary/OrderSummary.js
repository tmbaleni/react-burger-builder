import React from 'react';
import Auxcontainer from '../../../hoc/Auxcontainer'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(myKey => {
            return <li key={myKey+1}><span style={{textTransform: 'capitalize'}}>{myKey}</span> : {props.ingredients[myKey]}</li>
        })
    return (<Auxcontainer>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients:</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p>Continue to checkout</p>
        <button onClick={props.cancel}>Cancel</button>
        <button>Confrim</button>
    </Auxcontainer>
    );
}
export default orderSummary;