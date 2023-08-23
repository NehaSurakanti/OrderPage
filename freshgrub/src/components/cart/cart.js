import { Button } from "bootstrap";
import "./cart.css";
import getAllItemsInCart from "../../services/Cart/getAllCartItems";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import  Item  from "./item";


const Cart = () => {

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

    const updateTotalItemsFromChild = ()=>{
        setTotalItems(totalItem+1);
    }

    useEffect(()=>{
            getItems();
        },[totalItem]
    )

    return (cartItems === null || cartItems.length === 0) ?(<h1>No items in the Cart</h1>):
    (
        <div className="cartBody">
            {console.log(cartItems)}
            <header>
                <div className="continue-shopping">
                    <i className="fa-solid fa-arrow-left fa-2xl arrow-icon"></i>
                    <h3>Continue Adding items</h3>
                </div>
            </header>
            <hr/>
            <section className="main-cart-section">
                <h3>Your Cart</h3>
                <p className="total-items">
                    <h5>You have <span className="total-items-count">{totalItem}</span>items in your cart</h5>
                </p>

                {/* --------------------------------------------------------------------------------------------- */}
                <div className="cart-items">
                    <div className="cart-items-container">

                        {cartItems.cartItems.map(item => <Item {...item} updateParent={updateTotalItemsFromChild}/>)}

                    </div>
                </div>

                <div className="card-total">
                    <h3>cart Total : <span>{cartItems.cartItems.reduce((acc,item)=>acc+(item.qty*item.item[0].price),0)}</span></h3>
                    <Link to={`/user/checkout/${userId}`}><button>Checkout</button></Link>
                </div>
            </section>
        </div>

    );
};

export default Cart;