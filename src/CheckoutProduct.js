import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, rating, price}) {

    const [{ basket }, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id
            /*item:{
                id: id,
                title: title,
                price: price,
                rating: rating,
                image : image
            }*/
        })
    }

    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct__image" src={image} alt="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                
                <p className="checkoutProduct__title">{title}</p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map( (_) => {
                            return <p>⭐</p>
                        })
                    }
                </div>

                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <button onClick={removeFromBasket}>Remove from basket</button>

            </div>
            
            
        </div>
    )
}

export default CheckoutProduct
