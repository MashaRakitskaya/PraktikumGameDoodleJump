import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Power from '../../images/power.svg';

const Home = () => (
  <>
    <h1>Home</h1>
    <img src={Power} alt="img" />
    <ul>
      <li key="1">
        <Link to="/first-page">First Page</Link>
      </li>
      <li key="2">
        <Link to="/second-page">Second Page</Link>
      </li>
    </ul>
  </>
);

const FirstPage = () => (
  <>
    <h1>First Page</h1>
    <Link to="/">Go back Home</Link>
  </>
);

const SecondPage = () => (
  <>
    <h1>Second Page</h1>
    <Link to="/">Go back Home</Link>
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Home />} />
      <Route path="/first-page" element={<FirstPage />} />
      <Route path="/second-page" element={<SecondPage />} />
    </Routes>
  );
}

export default App;
