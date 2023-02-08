// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MQZYECUuA7LI75fuYOhaLemw67ncahkHrbnFWis34Yt0H2sUXELJwvUPVu3D4swqldGoa8ACIymdEMsZkNnmpuc00GMJWcKxC');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {

  console.log(req.body.cartItems);
  const session = await stripe.checkout.sessions.create({
    submit_type: 'pay',
    mode: 'payment',
    payment_method_types: ['card'],
    billing_address_collection: 'auto',

    shipping_options: [
      {shipping_rate: 'shr_1MQf7aCUuA7LI75fB6ahwzNv'},
      {shipping_rate: 'shr_1MQfFvCUuA7LI75fnTgiT6oy'},
    ],
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 35,
        quantity: 1,
      },
    ],
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));