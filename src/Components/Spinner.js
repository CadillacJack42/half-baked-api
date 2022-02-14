import React from 'react';
import logo from '../logo.svg';

export default function Spinner() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Fetching your data. Page will load momentarily.</h3>
    </div>
  );
}
