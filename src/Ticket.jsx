
import React, { useState } from 'react';
import './Styles/Style.css';
import Payment from './payment'; // Import the Payment component
import { useNavigate } from 'react-router-dom';
const Ticket = () => {
    const [name, setName] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isPaymentPage, setIsPaymentPage] = useState(false);
    const ticketPrice = 400; 
 const navi=useNavigate("");
    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleConfirm = () => {
        if (name) {
            setIsConfirmed(true);
        } else {
            alert("Please enter your name.");
        }
    };

    const handlePaymentSuccess = () => {
        // Handle payment success (e.g., redirect to a confirmation page)
        alert("Payment was successful!");
        navi("/payment");
    };

    return (
        <>
            {!isConfirmed ? (
                <div className='event'>
                    <h2>Event Booking</h2>
                    <p>Ticket Price: ₹{ticketPrice}</p>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={handleInputChange} 
                    />
                    <button onClick={handleConfirm}>Confirm Booking</button>
                </div>
            ) : isPaymentPage ? (
                <Payment 
                    name={name} 
                    ticketPrice={ticketPrice} 
                    onPaymentSuccess={handlePaymentSuccess} 
                />
            ) : (
                <div className='event'>
                    <h2>Booking Confirmed!</h2>
                    <p>Thank you, {name}, for booking your ticket!</p>
                    <p>Your ticket is confirmed for the event at ₹{ticketPrice}.</p>
                    <button onClick={() => setIsPaymentPage(true)}>Proceed to Payment</button>
                </div>
            )}
        </>
    );
};

export default Ticket;