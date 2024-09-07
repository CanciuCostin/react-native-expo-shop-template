export async function fetchPaymentSheetParams() {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_STRIPE_PAYMENT_URL}/payment-sheet`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const { paymentIntent, ephemeralKey, customer } = await response.json();
  return {
    paymentIntent,
    ephemeralKey,
    customer,
  };
}
