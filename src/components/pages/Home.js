import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../utils/Coin';

const Home = () => {
  const [listVaue, setListValue] = useState([]);
  const [text, setText] = useState('');

  useEffect(async () => {
    let response = await axios.get(
      'https://api.coinstats.app/public/v1/coins?skip=0'
    );
    setListValue(response.data.coins);
  }, []);

  const filteredCoin = listVaue.filter((coin) =>
    coin.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div>
      <div className='cryptoHeader'>
        <input
          type='text'
          placeholder='Bitcoin...'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className='cryptoDisplay'>
        {filteredCoin.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            icon={coin.icon}
            price={coin.price}
            symbol={coin.symbol}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
