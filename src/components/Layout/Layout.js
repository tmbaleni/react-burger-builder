import React from 'react';
import Auxcontainer from '../../hoc/Auxcontainer';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxcontainer>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxcontainer>
);

export default layout; 