import React from 'react';
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {

    const [{ basket , user }] = useStateValue();

    //Ternary operator is used.
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ADS" />
                
                
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping basket is Empty.</h2>
                        <p> You have no item in your basket. to buy one or more items, Click "Add to basket" next to the item.</p>
                    </div>
                ) : (
                    <div>
                        <h3 className="checkout__title_1">Hello, {user ? user.email : "Please Sign In"}</h3>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* List all the checkout products */}
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                price={item.price}
                            />
                        ))}
                        
                    </div>
                )}
            </div>
            
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
            

        </div>
    );
}

export default Checkout
