import React, { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from "prop-types"
import { getGreeting } from "../redux/api_handler";

const HelloWorld = () => {

  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <main>
      <h1>{greeting.greeting}</h1>
      <p>A greeting in {greeting.language}</p>
      <button ></button>
    </main>
    );
}


HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
