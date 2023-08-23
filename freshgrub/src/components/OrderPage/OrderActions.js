import React from 'react';
import './OrderActions.css';
import  { calculateOrderAmount} from './utils';
const OrderActions = ({ selectedPaymentMethod, walletBalance, onPlaceOrder}) => {
  const handlePlaceOrder = () => {
    onPlaceOrder();
  };
  const orderAmount = calculateOrderAmount(); // Calculate the order amount


  return (
    <div className="order-actions">
      <button className="place-order-btn" onClick={handlePlaceOrder} disabled={!selectedPaymentMethod|| walletBalance < orderAmount}  >
        Place Order
      </button>
      
      {selectedPaymentMethod === 1 && (
        <p className="wallet-balance-message"><span className="wallet-label">Your wallet balance:</span> <span className="wallet-balance">{walletBalance}/-</span></p>
      )}
    </div>
  );
};

export default OrderActions;
