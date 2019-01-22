import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxcontainer from '../../../hoc/Auxcontainer';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    } 
    return (
        <Auxcontainer >
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo  height={'10%'}/> 
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxcontainer>
        
    );
};

export default sideDrawer;