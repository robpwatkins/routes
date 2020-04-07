import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Item() {
  useEffect(() => {}, []);

  const [item, setItem] = useState({});

  return (
    <div>
      <div>
        <h1>Item</h1>
      </div>
    </div>
  );
}

export default Item;