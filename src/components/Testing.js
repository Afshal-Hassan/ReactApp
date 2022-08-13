import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import "./Testing.css";

export default function Testing() {

    const onToken=(token)=>{
        console.log(token)

    }
  return (
    <div>

<div id='Pay'>
<StripeCheckout token={onToken}
            name="Buy Subscription"
            description='Subscription for 1 month'
            stripeKey="pk_live_51LPedhL5pgdDtYn94rIhlAgMqXyFQOo1vZbqRT0Au16L0AYLSuBFaewcxzADjoJE85daZyK6EjJ99XBg0w65YauN00iKU6iQPw"
            amount={3 * 100}
            currency="USD"
           // email={emailContact}
            billingAddress={true}
            zipCode={true}
           // opened={onOpen}

          >
           <span><button className="btn btn-primary" id='Pay-Button'>Pay 3$ </button></span>
          </StripeCheckout>

</div>

    </div>
  )
}
