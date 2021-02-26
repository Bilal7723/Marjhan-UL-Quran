// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { SWRConfig } from 'swr';
// import reportWebVitals from './reportWebVitals';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// ReactDOM.render(  
// <React.StrictMode>
//     <SWRConfig value={{ fetcher }}>
//         <App />
//     </SWRConfig>
// </React.StrictMode>, document.getElementById('root'));
// reportWebVitals();



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./storeJS/store/index";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Provider store={store}>
    <App /></Provider>,document.getElementById('root')
);
reportWebVitals();
