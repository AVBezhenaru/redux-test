import { createStore } from 'redux';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import reducer from './reducer';
import { inc, dec, rnd } from './actions';

const store = createStore(reducer);



const count = document.getElementById('count');
document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch(rnd(payload));
});

const update = () => {
  count.innerHTML = store.getState();
};

store.subscribe(update);
