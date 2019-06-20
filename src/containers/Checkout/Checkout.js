import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData'
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        },
        totalPrice: 0
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){

        if(param[0] === 'price'){
            price = param[1]; 
        }else {
            ingredients[param[0]] = +param[1];
        }
        }
        //console.log({ingredients})
        this.setState({ingredients: ingredients, totalPrice : price})
    }
    handleCheckoutCancelled = () => {
        this.props.history.goBack();
    }
    handleCheckoutContinued = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    render() {
        return (
            <div>
                <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients} 
                checkoutCancelled={this.handleCheckoutCancelled} 
                checkoutContinued={this.handleCheckoutContinued}/>
                </div>
                
                <Route path={this.props.match.path + '/contact-data'}  render ={()=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...this.props}/>)} />
            </div>
        );
    }
}
export default Checkout;