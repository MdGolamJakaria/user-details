import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i< cart.length; i++){
        const employee = cart [i];
        total = total+employee.yearlysalary;
    }
    return (
        <div>
            <h4>Selected Members:</h4>
            <h5>Total selected: {cart.length} </h5>
            <h5>Total: {total} </h5>
        </div>
    );
};

export default Cart;