import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal';
import Auxcontainer from '../Auxcontainer'

const wrapErrors = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount (){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req;
            });
            
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            });
        }
        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        handleClick = () => {
            this.setState({ error: null })
        }
        render (){
            return (
                <Auxcontainer>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.handleClick}>
                        <strong>{this.state.error? this.state.error.message : null}</strong>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxcontainer>
                
            );
        }
    }
}
export default wrapErrors;