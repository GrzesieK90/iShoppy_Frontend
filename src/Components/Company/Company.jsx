import React from 'react';
import './Company.css';
import company_image_1 from '../Assets/company_image_1.jpg';
import company_image_2 from '../Assets/company_image_2.jpg';
import company_image_3 from '../Assets/company_image_3.jpg';
import company_image_4 from '../Assets/company_image_4.jpg';

const Company = () => {
  return (
    <div className='company'>
      <h1>Company History</h1>
      <div className='box1'>
      <p className='txt1'>
        Welcome to iShopping, your number one source for all things shoes. 
        We're dedicated to giving you the very best of footwear, with a focus 
        on quality, customer service, and uniqueness.
        <br/>
        Founded in 2020 by a group of shoe enthusiasts, iShopping has come a 
        long way from its beginnings in a home office. When we first started 
        out, our passion for providing high-quality, affordable shoes drove 
        us to do tons of research so that iShopping can offer you the most 
        stylish and comfortable footwear.
        <br/>
        <br />
        Our company started its journey in a small, cozy shop on the outskirts of the city. 
        It was a family business founded by Anna and Marcin, who always dreamed of sharing 
        their passion with others.
        From the very beginning, they knew they wanted to offer their customers more 
        than just products - they wanted to provide experiences that would be remembered 
        for a long time.
        Anna was an artist at heart, and her handcrafted decorations and ornaments were 
        very popular among the local community. Marcin, on the other hand, had a talent 
        for finding unique products from various corners of the world. Their shared passions 
        and dedication allowed them to create a place that quickly became a favorite shop 
        for many residents.
        However, their ambitions reached further. They wanted their unique products to reach 
        people all over the world. In the digital age, the natural step was to create a website 
        that would enable them to fulfill this dream. Thus, our online store was born, and it 
        quickly gained immense popularity.
        <br/>
        <span className='txt1'>
        </span>
      </p>
      <img className='img1' src={company_image_1} alt='Company History 1' />
      </div>
      <div className='box2'>
        <div className='img-box'>
      <img className='img2' src={company_image_2} alt='Company History 1' /><br />
      <img className='img2' src={company_image_4} alt='Company History 1' /><br />
      <img className='img2' src={company_image_3} alt='Company History 1' />
      </div>
      <p className='txt2'>
        <span className='fat-txt'> Expanding Worldwide </span> <br />
        Thanks to the internet, our products could finally reach customers on all continents. <br />
        Starting in Europe, we quickly expanded our operations to North America, Asia, Australia, and even Africa. <br />
        Every new order was a cause for joy and motivation for further growth. <br />
        Thanks to the diversity of the products we offer, everyone could find something for themselves. <br /> 
        Our assortment included both handmade decorations and unique, carefully selected products from various cultures. <br /> 
        Our store became a place where people could discover new trends and enjoy the beauty of things with their own story. <br />
        <br />
        <br />
        <span className='fat-txt'> Excellent Shopping Experience </span> <br />
        However, success wouldn't have been possible without our dedication to customer care. <br /> 
        From the very beginning, we were determined to provide our customers with the best possible shopping experience. <br /> 
        We knew that online shopping could sometimes be stressful, so we strove to make our site intuitive and easy to navigate. <br /> 
        Our team worked tirelessly to ensure that every aspect of shopping was as user-friendly as possible. <br />
        Our customer service was always ready to help with any issue. If our customers had any questions or comments, they could count on quick and professional assistance. <br /> 
        We ensured that every interaction with our company was a positive experience. <br />
        <br />
        <br />
        <span className='fat-txt'> Looking to the Future </span> <br />
        Today, we proudly serve customers all over the world and are thrilled that we've been able to turn our passion into our own website. <br /> 
        Our story is a tale of dreams that became reality through hard work, dedication, and a love for what we do. <br />
        We look to the future with optimism and excitement. We still have many ideas on how to further improve our products and services. <br /> 
        We want to continue inspiring our customers by offering unique products that bring joy and beauty into their lives. <br />
        We thank all our customers for their trust and support. It's because of you that we can do what we love. <br /> 
        If you have any questions or comments, please don't hesitate to contact us. <br />
        We are here to serve you and make every shopping experience unforgettable. <br />
        <br />
        <br />
        <span className='fat-txt'> Contact Us </span> <br />Contact Us
        If you have any questions, comments, or suggestions, please reach out to us. We are here to listen and help. <br /> 
        You can write to us, call us, or use the contact form on our website. Your satisfaction is our top priority, and every feedback you provide is valuable to us. <br />
        We warmly invite you to continue exploring our store, and we hope you find something that delights you. Thank you for being a part of our story.
        <br/>
        <br/>
        <br/>
      </p>
      </div>
    </div>
  );
};

export default Company;