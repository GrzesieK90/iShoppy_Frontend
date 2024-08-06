import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [sortOption, setSortOption] = useState('dateAdded');

  const handleLoadMore = (event) => {
    event.preventDefault();
    setVisibleProducts(prevCount => prevCount + 12);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const getSortedProducts = (products) => {
    switch (sortOption) {
      case 'alphabetical':
        return products.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'priceLowToHigh':
        return products.slice().sort((a, b) => a.new_price - b.new_price);
      case 'priceHighToLow':
        return products.slice().sort((a, b) => b.new_price - a.new_price);
      case 'dateAdded':
        return products.slice().sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
      case 'biggerDiscount':
        return products.slice().sort((a, b) => {
          const discountA = a.old_price - a.new_price;
          const discountB = b.old_price - b.new_price;
          return discountB - discountA;
        });
      case 'newestToOldest':
        return products.slice().reverse();
      default:
        return products;
    }
  };

  const filteredProducts = all_product.filter(item => item.category === props.category);
  const sortedProducts = getSortedProducts(filteredProducts);
  const displayProducts = sortedProducts.slice(0, visibleProducts);

  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{visibleProducts > sortedProducts.length ? sortedProducts.length : visibleProducts}</span> out of {sortedProducts.length} products
        </p>
        <div>
          Sort by: 
          <select className="shopcategory-sort" value={sortOption} onChange={handleSortChange}>
            <option value="dateAdded">Default</option>
            <option value="newestToOldest">Newest</option>
            <option value="alphabetical">A to Z</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="priceHighToLow">Price High to Low</option>
            <option value="biggerDiscount">Higher Discount</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {displayProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            images={item.images}
            new_price={item.new_price}
            old_price={item.old_price}
            dateAdded={item.dateAdded}
          />
        ))}
      </div>
      {visibleProducts < sortedProducts.length && (
        <button type="button" className="shopcategory-loadmore" onClick={handleLoadMore}>
          Explore More
        </button>
      )}
    </div>
  );
};

export default ShopCategory;