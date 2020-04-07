import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);
  // console.log(match);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      'https://gist.githubusercontent.com/robpwatkins/3fddbada918e592e3901a474b0953df9/raw/220b62c60c864ee86430f8ad73266d37b813c081/puppyAPI.json'
    );
    const items = await data.json();
    const id = match.params.id;
    const item = items.find(pup => pup.name === id);
    setItem(item);
    console.log(item);
  }

  return (
    <div>
      <div>
        <h1>{item.name}</h1>
        <img style={{maxWidth: "350px"}} src={item.imgUrl}></img>
      </div>
    </div>
  );
}

export default ItemDetail;