import React from 'react'

function Header() {
  return (
    <div>
        <div className='grid grid-cols-12 bg-black w-screen h-32'>
           
            <div className='col-span-6 mx-auto my-auto'>
                <h1 className='text-white text-6xl font-bold font-sans'>SMSA</h1>
                <p className='pt-1 text-white font-semibold font-sans hover:text-xl'>Stock Market Sentiment Analysis</p>
            </div>

            <div className='col-start-7 col-end-9 my-auto pt-16 mx-auto'>
                <a href=''><p className='text-white font-semibold hover:text-xl hover:underline'>ABOUT US</p></a>
            </div>

            <div className='col-start-9 col-end-12 mx-auto my-auto pt-16'>
                <a><p className='text-white font-semibold hover:text-xl hover:underline'>HOW WE DID IT</p></a>
            </div>

        </div>
    </div>
  )
}

export default Header