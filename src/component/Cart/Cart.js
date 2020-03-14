import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total =total + product.price ;
    }

    let shipcoust = 0;
    if (total > 40){
        shipcoust=0;
    }
    else if(total> 10.99){
        shipcoust= 4.99
    }

    const tex = total / 10 ;
    

    return (
        <div>
            <h4>Oder Summary</h4>
            <h6>Item Odders {cart.length}</h6>
            <h6>Total Price {total}</h6>
            <h6>Sheping Coust {shipcoust}</h6>
            <h6> tex {tex}</h6>
            Total {total+shipcoust+tex}

        </div>
    );
};

export default Cart;