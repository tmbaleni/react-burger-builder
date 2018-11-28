import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let modifiedingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
               return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((prev,cur) => {
            //add current element(array of number of each ingredient) to default array returned from reduce func
            return prev.concat(cur)
        }, []);
    console.log(modifiedingredients)
    if(modifiedingredients.length === 0){
        modifiedingredients = <p>Please Start Adding Ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"} />
            {modifiedingredients}
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    );
};
export default burger;