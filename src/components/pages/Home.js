import React, { useState, useEffect } from 'react';

const Home = () => {
  const [listVaue, setListValue] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('DOM loaded');
  }, []);

  return (
    <div>
      <p>Hello world - home page</p>
    </div>
  );
};

export default Home;
