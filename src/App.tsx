import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [seachText, setSearchText] = useState(null);

  useEffect(() => {
    console.log('serach', seachText);

    const timer = setTimeout(() => seachData(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [seachText]);

  const seachData = async () => {
    const res = await fetch(
      'https://fakestoreapi.com/products?sort=desc&str=' +
        seachText
    );
    const data = res.json();
    console.log('data', data);
  };
  return (
    <div>
      <input
        type="text"
        value={seachText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
}
