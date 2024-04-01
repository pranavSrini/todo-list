'use client'
import React from 'react';


const Item = (props) => {
    return (
        <div onClick = {() => props.func()} style  = {{textDecoration: props.bool % 2 == 0 ? 'line-through' : 'none'}}>
            {props.name}
        </div>
    );
 };

 export default Item;