import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I97myGYAIXU6zwpkAiyo72vo9mlYwSndEDXjgXwifhr2JTQvlTKVtDm0S3jbZesI4mZPNTikf3JHZKPLvdBpYzT00wC40wHuJ';
    const onToken = token => {
        console.log(token);
        alert('Successful payment')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name=' Crown Clothing'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Payment'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;