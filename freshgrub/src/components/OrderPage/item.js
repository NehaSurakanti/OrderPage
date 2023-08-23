import React, { useEffect, useState } from "react";
// import incrementItem from "../../services/Cart/incrItem"
import addToCart from "../../services/Cart/addToCart";
import decrement from "../../services/Cart/decrementItem";
import remove from "../../services/Cart/deleteItem";
import { toast } from "react-toastify";

const Item = ({_id,userId,item,qty}) => {
    const {id,stallId,menuItemName,price,menuItemImage} = item[0];
    return (
        <div>
          <div className="items-info">
            <div className="product-img">
              <img
                src={`data:image/jpeg;base64,${menuItemImage}`}
                alt="product1"
              />
            </div>
            <div className="title">
              <h2>{menuItemName} </h2>
            </div>
    
            <div className="plus-minus">
              <p>{qty}</p>
            </div>
    
            <div className="price">
              <h3>{price*qty}</h3>
            </div>
            
          </div>
          <hr />
        </div>
      );
    };
    export default Item;