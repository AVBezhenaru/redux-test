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

const reducer = (state = 0, action) => {
  if (action.type === 'DEC') {
    return state - 1;
  }

  if (action.type === 'INC') {
    return state + 1;
  }

  if (action.type === 'RND') {
    return state + action.payload;
  }

  return state;
};

const store = createStore(reducer);

const count = document.getElementById('count');
document.getElementById('inc').addEventListener('click', () => {
  store.dispatch({ type: 'INC' });
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({ type: 'DEC' });
});

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch({ type: 'RND', payload });
});

const update = () => {
  count.innerHTML = store.getState();
};

store.subscribe(update);
