import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

// Helper function to import images
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

// Use require.context to import all images from the specified folder
const images = importAll(require.context('../Assets/Products', false, /\.(png|jpe?g|svg|webp)$/));

const Item = (props) => {
  const firstImage = props.images && props.images.length > 0 ? `${props.images[0]}` : '';

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={images[firstImage]} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">€{props.new_price}</div>
        <div className="item-price-old">€{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
