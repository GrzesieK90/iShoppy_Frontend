import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to SHOPPER <br /> <br />
          At SHOPPER, we bring the world of online shopping right to your fingertips. Explore a diverse range of products and discover the convenience of shopping from the comfort of your home. Here's why you'll love shopping with us: <br /> <br />
          Wide Selection: Browse through our extensive collection of products, from trendy fashion items to cutting-edge electronics and everything in between.
          Quality Guaranteed: We source our products from trusted suppliers to ensure that you receive only the best quality items.
          Secure Checkout: Shop with confidence knowing that your transactions are secure and your personal information is protected.
        </p>
        <p>
          Fast Shipping: Get your orders delivered straight to your doorstep in no time, so you can enjoy your new purchases without delay.
          24/7 Customer Support: Our dedicated customer support team is here to assist you every step of the way, ensuring a seamless shopping experience.
          Whether you're looking for the latest fashion trends, tech gadgets, home essentials, or unique gifts, SHOPPER has something for everyone. Start shopping today and experience the convenience of online shopping like never before!
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox