
import axios from 'axios';
import './App.css'
import {  useEffect, useState } from 'react';
import Results from './Components/Results'
import SearchBar from './Components/SearchBar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductDetails from './ProductDetails'






function App() {


  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  
  const fetchData = async () => {
    try{
    const response = await axios.get(`https://www.omdbapi.com/?apikey=c71b3518&s=${searchTerm}&type=${searchType}`);

    setItems(response.data.Search || [{Message : "Search For Entertainment .....", Poster : "https://moviereviewmom.com/wp-content/uploads/2018/09/searching-movie-poster.jpg"}]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  
  
  };

  
useEffect(() => {
  fetchData(); 

}, [searchTerm , searchType])

      



  
  return (
    <>
    <SearchBar setSearchTerm={setSearchTerm} setSearchType={setSearchType} searchTerm={searchTerm}/>
    
    <BrowserRouter>
    <Routes>
      
     
      <Route path='/' element={<Results  items={items}  setItems={setItems} />} />
      <Route path='/ProductDetails/:id' element={<ProductDetails />}/> 

      </Routes>
      </BrowserRouter>
    
      
    </>
  )
}

export default App
