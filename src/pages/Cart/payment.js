import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";

class PaymentForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    const { token } = await this.props.stripe.createToken();
    const amount = 1000;

    const response = await fetch("http://localhost:5001/api/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Payment successful");
    } else {
      console.error("Payment error:", result.error);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button type="submit">Pay</button>
      </form>
    );
  }
}

export default injectStripe(PaymentForm);
