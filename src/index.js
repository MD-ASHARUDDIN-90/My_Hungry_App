import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import AllRestroPages from './Pages/AllRestroPage/AllRestroPage';
import HelpPage from './Pages/HelpPage/HelpPage';
import SearchFoodPage from './Pages/SearchFoodPage/SearchFoodPage';
import SingleRestroPage from './Pages/SingleRestaurantPage/SingleRestroPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/restaurant' element={<AllRestroPages/>} />
    <Route path='/help' element={<HelpPage/>} />
    <Route path='/search' element={<SearchFoodPage/>} />
    <Route path='/singlerestropage' element={<SingleRestroPage/>} />
    <Route path='/norestro' element={<h1>No Restro</h1>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
