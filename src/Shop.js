import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://gist.githubusercontent.com/robpwatkins/3fddbada918e592e3901a474b0953df9/raw/2248e409849ec1945a0b356205c771311b22ed7a/puppyAPI.json'
    );
    const items = await data.json();
    setItems(items);
  };

  return (
    <div>
      {items.map((item, index) => {
        return (
        <h1 key={index}>
          <Link to={`/shop/${item.name}`}>{item.name}</Link>
        </h1>
        )
      })}
    </div>
  );
}

export default Shop;