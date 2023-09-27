import React, { useState } from 'react'
import "./SearchResultsList.css"
import { SearchResults } from './SearchResults'

export const SearchResultsList = ({ results, setOutput }) => {

  const [show, setShow] = useState(true);
  const [value, setValue] = useState("");
  
  if(!show){
    setOutput(value)
  }

  return (
    <div className='results-list'>
        {show && results.map((results) => {
              return <SearchResults results={results} key={results} setShow={setShow} setValue={setValue}/>
        })}
    </div>
  )

}

