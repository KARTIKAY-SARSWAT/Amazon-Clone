import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_1500x600._CB661592357_.jpg" 
            alt="Banner"
            />

            {/*Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                id="12354"
                title="Amazon Brand - Solimo Water Resistant Cotton Mattress Protector 78x72 - King Size, Grey"
                price={839.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71B0vbMooUL._SL1500_.jpg"
                />
                <Product 
                id="12435"
                title="
                Lenovo Yoga Smart Tablet with The Google Assistant (10.1 inch, 4GB, 64GB, WiFi + 4G LTE), Iron Grey"
                price={19999.59}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/814AjiAo5GL._SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                id="12345"
                title="Redmi Note 10 Pro Max (Glacial Blue, 6GB RAM, 128GB Storage)"
                price={19999.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/719iIpuMQbL._SL1500_.jpg"
                />
                <Product 
                id="12435"
                title="FCUK Analog Black Dial Men's Watch-FK0006C"
                price={2375.00}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71LyEo9kROL._UL1500_.jpg"
                />
                <Product 
                id="54321"
                title="Adidas Men's Performo M Running Shoe easy & efficient"
                price={3799.00}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71kODSuYhCL._UL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                id="12534"
                title="AmazonBasics 109cm (43 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB43U20PS (Black)"
                price={29999.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81c5klKpUdL._SL1500_.jpg"
                />
                                
            </div>

            
            
            {/*Product */}
            

        </div>
    )
}

export default Home;
