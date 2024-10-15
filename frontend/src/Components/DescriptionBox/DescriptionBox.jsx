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
            <p>Welcome to Ecommerce website! Discover a wide range of quality products at unbeatable prices. From fashion to electronics, home essentials to gadgets, we have something for everyone. Shop now and enjoy exclusive deals! At Ecommerce website, we are passionate about bringing you the best online shopping experience. With a curated selection of top brands and a commitment to quality, we strive to offer you convenience, reliability, and affordability. Our mission is to make online shopping easy and enjoyable for everyone.</p>
            <p>Don't just take our word for it! Here’s what our customers are saying: "Amazing quality and fast shipping! I'm in love with my new outfit." "Best online shopping experience. The customer service was top-notch." "Great selection of products at affordable prices. Highly recommend!"
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox