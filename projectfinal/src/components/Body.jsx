import React, { useState, useEffect, useRef } from 'react'
import './Body.css'
import  { SearchBar }  from './SearchBar'
import  { SearchResultsList }  from './SearchResultsList'
import { SearchResults } from './SearchResults'
import { Sentiment } from './Sentiment'

function body() {

  const [results, setResults] = useState([])
  const [output, setOutput] = useState("")

  
  return(
    <div className='bg-gradient-to-b from-black to-myblue w-screen h-screen'>
        <div className='search-bar-container'>
          <SearchBar setResults={setResults} />
          {
            (output !== "" ? null : (<SearchResultsList results={results} setOutput={setOutput}/>))
          }
        </div>
        <div className='flex w-screen pt-5'>
          {
            (output !== "" ? <Sentiment output={output}/> : null)
          }
        </div>
    </div>
    )
  
}

export default body