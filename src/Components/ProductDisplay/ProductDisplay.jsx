import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    setError(''); // Clear error message when size is selected
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product.id, selectedSize);
    } else {
      setError('You need to select size!');
    }
  };

  const renderSizeOptions = () => {
    let sizes = [];
    switch (product.category) {
      case 'kid':
        sizes = ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'];
        break;
      case 'women':
        sizes = ['32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'];
        break;
      case 'men':
        sizes = ['38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'];
        break;
      default:
        sizes = [];
        break;
    }

    return sizes.map((size) => (
      <option key={size} value={size}>
        {size}
      </option>
    ));
  };

  console.log('Product category:', product.category);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={product.name} onClick={() => setMainImage(img)} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={mainImage} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{product.old_price}€</div>
          <div className="productdisplay-right-price-new">{product.new_price}€</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with 
          a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <select
            value={selectedSize}
            onChange={handleSizeChange}
            className='productdisplay-right-sizes'
          >
            <option value=''>Choose size</option>
            {renderSizeOptions()}
          </select>
          {error && <p className="error-message">{error}</p>}
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span> {product.category} </p>
        <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest </p>
      </div>
    </div>
  );
}

export default ProductDisplay;