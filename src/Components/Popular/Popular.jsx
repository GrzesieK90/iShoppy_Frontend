import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';
import productsData from '../Assets/Products/products.json'; // Importowanie lokalnego pliku z danymi produktów

const Popular = () => {
  const [popularInWomen, setPopularInWomen] = useState([]);
  const [popularInMen, setPopularInMen] = useState([]);
  const [popularInKids, setPopularInKids] = useState([]);

  useEffect(() => {
    // Filtrowanie popularnych produktów dla kobiet, mężczyzn i dzieci
    const womenProducts = productsData
      .filter(product => product.category === 'women' && product.popularity >= 5)
      .sort((a, b) => b.popularity - a.popularity).slice(0, 4);;

    const menProducts = productsData
      .filter(product => product.category === 'men' && product.popularity >= 5)
      .sort((a, b) => b.popularity - a.popularity).slice(0, 4);;

    const kidsProducts = productsData
      .filter(product => product.category === 'kid' && product.popularity >= 5)
      .sort((a, b) => b.popularity - a.popularity).slice(0, 4);;

    setPopularInWomen(womenProducts);
    setPopularInMen(menProducts);
    setPopularInKids(kidsProducts);
  }, []);

  return (
    <div className="popular">
      {/* Sekcja popularnych produktów dla kobiet */}
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularInWomen.length > 0 ? (
          popularInWomen.map((item) => (
            <Item
              key={item.id} // Użyj id jako klucz
              id={item.id}
              name={item.name}
              images={item.images} // Przekaż tablicę z nazwami obrazów
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No popular products available in Women.</p>
        )}
      </div>

      {/* Sekcja popularnych produktów dla mężczyzn */}
      <h1>POPULAR IN MEN</h1>
      <hr />
      <div className="popular-item">
        {popularInMen.length > 0 ? (
          popularInMen.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              images={item.images}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No popular products available in Men.</p>
        )}
      </div>

      {/* Sekcja popularnych produktów dla dzieci */}
      <h1>POPULAR IN KIDS</h1>
      <hr />
      <div className="popular-item">
        {popularInKids.length > 0 ? (
          popularInKids.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              images={item.images}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No popular products available in Kids.</p>
        )}
      </div>
    </div>
  );
};

export default Popular;

