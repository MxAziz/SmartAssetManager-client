import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div className="mt-32 w-1/2 mx-auto space-y-4">
      <Helmet><title>Payment - SmartAssetManager</title></Helmet>
      <h3 className="text-4xl font-bold text-center">
        Please Complete Your Payment
      </h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
