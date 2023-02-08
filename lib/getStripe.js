import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

export const getStripe = () => {
    if(!stripePromise){
        stripePromise = loadStripe(`${import.meta.env.VITE_REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
    }

    return stripePromise;
}

