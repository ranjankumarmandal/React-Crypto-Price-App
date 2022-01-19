import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [listVaue, setListValue] = useState([]);
  const [text, setText] = useState('');

  useEffect(async () => {
    let response = await axios.get(
      'https://api.coinstats.app/public/v1/coins?skip=0'
    );
    setListValue(response.data.coins);
  }, []);

  return (
    <div>
      {listVaue.map((coin) => (
        <div>{coin.name}</div>
      ))}
    </div>
  );
};

export default Home;
