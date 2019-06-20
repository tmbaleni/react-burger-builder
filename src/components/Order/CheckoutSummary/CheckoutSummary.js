import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.checkoutSummary}>
            
            <div style={{width: '100%',height: '300px', margin: 'auto'}}>
            <h1 style={{textAlign: 'center'}}>We hope it tastes good!</h1>
                <Burger ingredients={props.ingredients}/>
                <div style={{textAlign: 'center',  margin: 'auto'}}>
                <Button btnType='Danger' clicked={props.checkoutCancelled}>Cancel</Button>
                <Button btnType='Success' clicked={props.checkoutContinued}>Continue</Button>
                </div>
                
            </div>
        </div>
    )
}
export default checkoutSummary;