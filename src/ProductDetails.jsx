import React, {  useState } from 'react'
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();

  const [singleItem, setSingleItem]=useState(0);

  const filterData = async () => {
    try{
    const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=c71b3518`);

    setSingleItem(response.data);
   
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  
  
  };
  filterData();
  
  let snavigate = useNavigate(); 

  return (
    <div className='flex'>
      <div>
      
</div>

      <div className='mx-16 flex my-16'>
    
               <img
                 src={singleItem.Poster}
                 alt={singleItem.Title}
                 className="w-full my-2 h-88 border border-white object-scale-down"
               />
<div className='w-full mx-8 '>
<h2 className='text-4xl my-2 font-semibold w-120'>Movie : {singleItem.Title}</h2>
               <p className=' text-3xl   font-semibold w-120'>Year : {singleItem.Year}</p>
              <p className=' text-3xl   font-semibold w-120'>Released :  {singleItem.Released}</p>
             
              <p className=' text-2xl   font-semibold w-120'>Runtime :  {singleItem.Runtime}</p>
              <p className=' text-2xl   font-semibold w-120'>Genre :  {singleItem.Genre}</p>
              <p className=' text-2xl   font-semibold underline w-120'>Director :  {singleItem.Director}</p>
               <p className=' text-lg my-2  font-semibold w-150'>Plot : {singleItem.Plot}</p>
               <p className=' text-2xl my-4  font-semibold w-150'>Actors : {singleItem.Actors}</p>
               <div>
      <button
        onClick={() => snavigate("/")}
        className="font-bold  my-8 px-2 py-2 rounded-full   bg-blue-600 text-yellow-300 pointer"
      >Back To Home</button></div>
               </div>
              
      </div>
      
    </div>
  )
}

export default ProductDetails
