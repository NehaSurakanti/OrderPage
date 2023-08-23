import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './OrderMain.css';
import PaymentMethodOptions from './PaymentMethodOptions';
import OrderActions from './OrderActions';
import CustomNavbar from '../CustomNavbar'
import { calculateOrderAmount, isBalanceSufficient } from './utils';
import getAllItemsInCart from '../../services/Cart/getAllCartItems';
import Item from './item';
import getWalletAmount from '../../services/Order/getWalletAmount';

const paymentMethods = [
  { id: 1, name: 'Wallet' },
];

function OrderMain() {
  const userId = useParams().userId;

  const [cartItems, setCartItems] = useState(null);
  const [totalItem, setTotalItems] = useState()

  const getItems = async () =>{
    const res = await getAllItemsInCart(userId);
    if(res.data?.success){
        setCartItems(res.data)
        setTotalItems(res.data?.cartItems.reduce((acc,item)=>acc+item.qty,0))
    }
}
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [walletBalance, setWalletBalance] = useState(
    //parseFloat(localStorage.getItem('walletBalance')) || 1000
  );

  const getAmount = async () =>{
    const res = await getWalletAmount(userId);
    if(res.data?.success){
      console.log(res.data)
        setWalletBalance(res.data)

    }
}
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('walletBalance', walletBalance);
  }, [walletBalance]);

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedPaymentMethod(parseInt(methodId));
  };

  const handlePlaceOrder = () => {
    /*if (selectedPaymentMethod) {
      const orderAmount = calculateOrderAmount();
      if (isBalanceSufficient(walletBalance, orderAmount)) {
        setWalletBalance(prevBalance => prevBalance - orderAmount);
        setModalMessage('Order successful');
        setIsModalOpen(true);
      } else {
        setModalMessage('Insufficient balance');
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false); // Close the pop-up after a delay
          setModalMessage(''); // Clear the modal message
        }, 2000); // Adjust the delay time as needed
      }
    } else {
      setModalMessage('Please select a payment method before placing the order.');
      setIsModalOpen(true);
    }*/
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <CustomNavbar/>
      <center>
      <h1><b>Order Page</b></h1>

      <div className="cart-items">
                    <div className="cart-items-container">

                        {cartItems.cartItems.map(item => <Item {...item}/>)}

                    </div>
                </div>

      <PaymentMethodOptions
        paymentMethods={paymentMethods}
        onSelect={handlePaymentMethodSelect}
      />
      <OrderActions
        selectedPaymentMethod={selectedPaymentMethod}
        walletBalance={walletBalance}
        onPlaceOrder={handlePlaceOrder}
      />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
      </center>
    </div>
  );
}

export default OrderMain;
