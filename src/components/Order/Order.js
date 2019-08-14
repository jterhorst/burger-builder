import React from 'react';

import classes from './Order.module.css';

const order = (props) => (
    <div className={classes.Order}>
        <p>Ingredients: lettuce (1)</p>
        <p>Price: <string>$5.45</string></p>
    </div>
);

export default order;