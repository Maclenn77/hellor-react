import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/api_handler';

const HelloWorld = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <main>
      <h1>{greeting.greeting}</h1>
      <p>
        A greeting in&nbsp;
        {greeting.language}
      </p>

    </main>
  );
};

export default HelloWorld;
