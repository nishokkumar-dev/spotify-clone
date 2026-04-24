import React from 'react'
import bgintro from '../assets/bgintro.mp4'

const opening = () => {
  return (
    <div className='h-screen bg-[#121212] flex items-center justify-center'>
        <video className='w-[75%] object-cover mix-blend-screen' src={bgintro} preload='auto' autoPlay loop muted></video>
    </div>
  )
}

export default opening