import React from 'react';
import Auxcontainer from '../../hoc/Auxcontainer';
import classes from './Layout.module.css';

const layout = (props) => (
    <Auxcontainer>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auxcontainer>
);

export default layout; 