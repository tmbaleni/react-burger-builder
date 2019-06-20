import React,{ Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WrapErrors from '../../hoc/WrapErrors/WrapErrors';

class Orders extends Component {
    state = {
        orders : [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json').then(res => {
            let fetchedOrders = [];
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                })
            }
            this.setState({loading: false, orders: fetchedOrders});
        }).catch(err => {})
    }
    render () {
        let ordersComp = this.state.orders.map(order=>(
            <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
        ))
        if(this.state.loading){
            ordersComp = <Spinner />
        } else {
            
        }

        return (
            <div>
                {ordersComp}
            </div>
        );
    }
}
export default WrapErrors(Orders, axios);
