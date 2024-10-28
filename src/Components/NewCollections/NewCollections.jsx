import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';
import productsData from '../Assets/Products/products.json'; // Importowanie danych z pliku JSON

const NewCollections = () => {
  const [newCollectionsWomen, setNewCollectionsWomen] = useState([]);
  const [newCollectionsMen, setNewCollectionsMen] = useState([]);
  const [newCollectionsKids, setNewCollectionsKids] = useState([]);

  useEffect(() => {
    // Funkcja do filtrowania, sortowania i ograniczania do 4 produktów na kategorię
    const filterAndSortByDate = (category) => {
      return productsData
        .filter(product => (product.newCollection || new Date(product.date) >= new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)) && product.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4); // Ograniczamy do 4 produktów
    };

    // Filtrowanie, sortowanie i przypisanie do stanu dla poszczególnych kategorii
    setNewCollectionsWomen(filterAndSortByDate('women'));
    setNewCollectionsMen(filterAndSortByDate('men'));
    setNewCollectionsKids(filterAndSortByDate('kid'));
  }, []);

  return (
    <div className='new-collections'>
      {/* Nowa Kolekcja dla kobiet */}
      <h1>NEW COLLECTIONS FOR WOMEN</h1>
      <hr />
      <div className="collections">
        {newCollectionsWomen.length > 0 ? (
          newCollectionsWomen.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              images={item.images} // Przekaż tablicę z nazwami obrazów
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No new collections available in Women.</p> // Informacja o braku nowych kolekcji
        )}
      </div>

      {/* Nowa Kolekcja dla mężczyzn */}
      <h1>NEW COLLECTIONS FOR MEN</h1>
      <hr />
      <div className="collections">
        {newCollectionsMen.length > 0 ? (
          newCollectionsMen.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              images={item.images} // Przekaż tablicę z nazwami obrazów
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No new collections available in Men.</p>
        )}
      </div>

      {/* Nowa Kolekcja dla dzieci */}
      <h1>NEW COLLECTIONS FOR KIDS</h1>
      <hr />
      <div className="collections">
        {newCollectionsKids.length > 0 ? (
          newCollectionsKids.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              images={item.images} // Przekaż tablicę z nazwami obrazów
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No new collections available in Kids.</p>
        )}
      </div>
    </div>
  );
};

export default NewCollections;
