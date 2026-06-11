import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export const PLANS = {
  FREE_TRIAL: {
    name: "Free Trial",
    price: 0,
    duration: 7,
  },
  PRO: {
    name: "WellTribe Pro",
    price: 9.99,
    priceId: process.env.STRIPE_PRICE_ID!,
  },
};
