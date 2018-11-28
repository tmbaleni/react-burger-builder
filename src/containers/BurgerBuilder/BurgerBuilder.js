import React, { Component } from 'react';
import Auxcontainer from '../../hoc/Auxcontainer';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//Object of ingredient and their prices
const INGREDIENTS_PRICES = {
    salad: .4,
    cheese: .5,
    meat: .8,
    bacon: .7
  }
  
//burger builder component is a smart component holds state of order
class BurgerBuilder extends Component {
    state = {
        ingredients:  {
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad: 0
        },
        totalPrice: 3,
        purchasable: false,
        purchasing: false
    }
    //func called to determine if order is not empty returns true or false
    updatePurchaseState = (ingredients) =>{
        const sum = Object.keys(ingredients)
        //object of keys from inredients
            .map(myKey =>{
                //return array of values for each ingredient key item
                return ingredients[myKey]
                //reduce array into a single number value sum
            }).reduce((sum, el) =>{
                return sum + el;
            },0)
            //if sum is greater than zero update state to new sum
            this.setState({purchasable: sum > 0})
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients: updatedIngredients,totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return
        }
        const updatedIngredients = {
            ...this.state.ingredients
        }
        const updatedCount = oldCount - 1;
            updatedIngredients[type] = updatedCount;
            const priceReduction = INGREDIENTS_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceReduction;
            this.setState({ingredients: updatedIngredients,totalPrice: newPrice});
            this.updatePurchaseState(updatedIngredients);
    }
    puchaseHandler = () => {
        this.setState({purchasing: true})
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }
    render () {
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] =  disabledInfo[key] <= 0;
        }
        return (
            <Auxcontainer>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} cancel={this.purchaseCancelHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.puchaseHandler}
                />
            </Auxcontainer>
        );
    }
}

export default BurgerBuilder;