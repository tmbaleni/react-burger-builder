import React from 'react';
import Auxcontainer from '../../../hoc/Auxcontainer'
import Button from '../../UI/Button/Button'

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
        <p><strong>Total Price: {props.totalPrice}</strong></p>
        <p>Continue to checkout</p>
        <Button clicked={props.cancel} btnType='Danger'>Cancel</Button>
        <Button clicked={props.continue} btnType='Success'>Confrim</Button>
    </Auxcontainer>
    );
}
export default orderSummary;