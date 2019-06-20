import React, {Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from './../../../axios-orders';
class ContactData extends Component {
    state = {
        name:'',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
        price: 0 
    }
    orderHandler = (e) =>{
        e.preventDefault();
    
        this.setState({loading:true});
        //alert('continue clicked')
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Themby Tshuma Mbaleni',
                address: {
                    street: 'Dodoma road',
                    country: 'South Africa'
                },
                email: 'test@test.com'
                
            }
        }
        axios.post('/orders.json',order)
            .then(response => { 
                this.setState({loading:false})
                this.props.history('/')
            })
            .catch(response => {
                this.setState({loading:false})
            })
            
    }
    render() {
        let form = (
                <form>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='email' name='email' placeholder='Email' />
                    <input type='text' name='street' placeholder='Street' />
                    <input type='text' name='postalCode' placeholder='Postal Code' />
                    <Button btnType='Success' clicked={this.orderHandler}>Order</Button>
                </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                 <h4>Enter Your Contact Data</h4>
                 {form}
            </div>
        )
    }
}

export default ContactData;