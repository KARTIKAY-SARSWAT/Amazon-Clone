import React from 'react';
import  "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {

    const [{}, dispatch ] = useStateValue();
    //dispatch is used when we have to manipulate data layer or we can say data.(in case of add or remove items)

    const addToBasket = () => {
        //Add item to basket...
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                price: price,
                rating: rating,
                image : image
            }
        })

    };


    return (
        <div className="product">
            <div className="product__info">
                
                <p className="product__title">{title}</p>

                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map( (_) => {
                            return <p>⭐</p>
                        })
                    }
                </div>

            </div>
            
            <img src={image} alt="product_image" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
