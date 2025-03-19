import React from 'react'
// import { movieContext} from '../App';
import { useNavigate } from 'react-router-dom';



function Results( {items}) {
// const [items]=useContext(movieContext);

console.log(items);

let navigate = useNavigate();
  return (
    <div >

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {items.map((movie) => (
           
             <div className="border-none shadow p-4 rounded"  onClick={()=>navigate(`/ProductDetails/${movie.imdbID}`)} >
               <h2 className="text-xl font-semibold">{movie.Message}</h2>
               <img
                 src={movie.Poster}
                 alt={movie.Title}
                 className="w-full h-88 border border-white object-scale-down"
               />

               <h2 className="text-xl text-center font-semibold">{movie.Title}</h2>
               <p className='text-center'>{movie.Year}</p>
             </div>

         ))}
             </div>
        
        
        
    </div>
  )
}

export default Results
