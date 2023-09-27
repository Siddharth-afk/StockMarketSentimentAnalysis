import React, { useState } from 'react'
import './SearchBar.css'
import { FaSearch, FaSteamSymbol } from 'react-icons/fa'
import axios from 'axios'

export const SearchBar = ({ setResults }) => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
      axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=NMZHDA9R7VSRKCCT`).then((response) => {
        const results = (response.data.bestMatches.map((result) => [result["2. name"], result["1. symbol"]]))
        setResults(results)
      }).catch((error) => {
        console.log(error)
      })
    }

    const handleChange = (value) => {
        setInput(value)
        if(value.length > 3){
          fetchData(value)
        }
    }

  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input 
          placeholder='Type to search..' 
          value={input} 
          onChange={(e) => {
              handleChange(e.target.value)
            }
          }
      />
    </div>
  )
}

