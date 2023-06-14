import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
//data
const notes = [
  {
  id:1,
  content:'working with Lists',
  important:true
  },
  {
    id:2,
  content:'Usage of Keys',
  important:false

  },
  {
    id:3,
  content:'conditional rendering',
  important:true

  },
  {
    id:4,
  content:'Handling events',
  important:false

  },
  {
    id:5,
  content:'Props and state',
  important:true

  }

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <App notes={notes} />
   
);

