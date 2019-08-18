import React, { Fragment } from 'react';
import Header from '../src/containers/header/Header';
import Home from '../src/components/home/Home';

const App = () => {
  return (
      <Fragment>
        <Header className='Header'></Header>
        <Home></Home>
      </Fragment>
  );
}

export default App;
