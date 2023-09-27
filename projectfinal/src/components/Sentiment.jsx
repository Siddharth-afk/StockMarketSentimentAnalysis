import React, { useState, useEffect } from 'react'

export const Sentiment = ({ output, setOn }) => {

  const [data, setData] = useState([])
  

/*   useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        //console.log(data)
      }
    )
  }, []) */
  useEffect(() => {
    fetch("/twitter",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data: output})
    }).then(response => response.text()).then(data => setData(JSON.parse(data))).catch(error => console.log(error))
  }, [])

  if(data.length === 0){
    console.log("beep")
  }else{
    console.log(Object.keys(data['tweets']).map((key)=>console.log(data['tweets'][key])))
  }

  return (
    <div className='mx-auto my-auto text-center'>
      {(data.length === 0 ? <p>loading...</p> : <p className='text-white'>{Object.keys(data['tweets']).map((key)=>(data['tweets'][key]))}</p>)}
    </div>
  )
}