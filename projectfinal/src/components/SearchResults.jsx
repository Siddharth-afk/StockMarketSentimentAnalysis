import React, { useState } from 'react'
import "./SearchResult.css"

export const SearchResults = ({ results, setShow, setValue }) => {

  const hide = () => {
    setValue(results[1]);
    setShow(false);
  }

  return (
    <div  className='search-result font-semibold' onClick={hide}>{ results[0] + "    (" + results[1] + ")"}</div>
  )
}
