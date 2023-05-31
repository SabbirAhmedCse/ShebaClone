import React, { useState } from 'react'

const Searching = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);
  const search = () =>{
    console.log(searchQuery);
  }
  return (
     <div className=" d-flex col-md-4 inline align-items-center pb-2">
        <input
          type="text"
          placeholder="Search . . . ."
          className="form-control me-2"
          onChange={(search) => setSearchQuery(search.target.value.toLowerCase()) }
        />
        <button className="btn btn-secondary" onClick={(e) => search(e)}>Search</button>
      </div>
  )
}

export default Searching