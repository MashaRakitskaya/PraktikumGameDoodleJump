import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PowerImg from '../../images/PowerImg';
import Presentation from '../../pages/Presentation/Presentation';

const Home = () => <Presentation />;

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
