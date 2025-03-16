import React, { useState } from 'react';
import './Styles/Style.css';


const Payment = ({ name, ticketPrice, onPaymentSuccess }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
   

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    const handleCvvChange = (e) => {
        setCvv(e.target.value);
    };

    const handlePayment = () => {
        // Here you can add validation for card details
        if (cardNumber && expiryDate && cvv) {
            setIsPaymentSuccessful(true);
            onPaymentSuccess(); // Call the success callback
        } else {
            alert("Please fill in all payment details.");
        }
    };

    return (
        <div className='payment'>
            {!isPaymentSuccessful ? (
                <>
                    <h2>Payment Page</h2>
                    <p>Ticket Price: ₹{ticketPrice}</p>
                    <input 
                        type="text" 
                        placeholder="Card Number" 
                        value={cardNumber} 
                        onChange={handleCardNumberChange} 
    
                    />
                    <input 
                        type="text" 
                        placeholder="Expiry Date (MM/YY)" 
                        value={expiryDate} 
                        onChange={handleExpiryDateChange} 
                    />
                    <input 
                        type="text" 
                        placeholder="CVV" 
                        value={cvv} 
                        onChange={handleCvvChange} 
                    />
                    <button onClick={handlePayment}>Make Payment</button>
                </>
            ) : (
                <div>
                    <h2>Payment Successful!</h2>
                    <p>Thank you, {name}, for your payment of ₹{ticketPrice}!</p>
                </div>
            )}
        </div>
    );
};

export default Payment;