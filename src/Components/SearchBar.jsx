import React from 'react'
import { Link } from 'react-router-dom';


function SearchBar({setSearchTerm, searchTerm,setSearchType}) {


    console.log(searchTerm);
  return (
    <div className='flex  justify-between border-0 bg-red-500 rounded-lg '>
<h1 to='./' className='m-4 text-yellow-300 text-2xl font-bold'>BookMySeat</h1>
<div className='mx-8 my-2'>
      <input type="text" 
      className='w-120 p-2 ps-10 text-lg rounded-full bg-white'
     onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search Movies here....'></input>
      <select
          className="p-2 mx-2 bg-white w-24 border rounded "
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="" className="text-black">
            All
          </option>
          <option value="movie" className="text-black">
            Movie
          </option>
          <option value="series" className="text-black">
            Series
          </option>
          <option value="episode" className="text-black">
            Episode
          </option>
        </select>
       
        {/* <div className='text-2xl flex font-bold flex-row m-4'><h1>home</h1><h1 className='mx-2'>Movies</h1></div> */}
        </div>
    </div>
  )
}

export default SearchBar
