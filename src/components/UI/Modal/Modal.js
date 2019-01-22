import React from 'react';
import classes from './Modal.module.css';
import Auxcontainer from '../../../hoc/Auxcontainer';
import Backdrop from '../Backdrop/Backdrop';

const modal= (props) => (
    <Auxcontainer>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
          style={{
              transform: props.show ? 'translateY(0)' : 'translateY(-200vh)',
              opactiy: props.show ? '1' : '0'
          }}>
          {props.children}
        </div>
    </Auxcontainer>
);

export default modal;