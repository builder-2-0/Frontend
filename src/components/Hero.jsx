import React from 'react'

const Hero = () => {
  return (
    <div className='h-dvh w-dvh flex-col gap-2'>
        <p className=' text-5xl text-center text-amber-50 relative left-full top-46 '>Trust Me , I can Fix You ! </p>
        <p className=' font-medium text-center text-amber-50 relative left-full top-50 '>Turn ideas into apps in minutes — no coding needed </p>
        
        
        <div className='relative left-[115%] top-56 h-28 w-150 rounded-3xl  border-2 border-purple-600 bg-cyan-100'>
            
            <input type='text' className=' h-28 w-150 p-10 outline-0 ' placeholder='What can I build for you ?'></input>
        </div>
      
    </div>
  )
}

export default Hero
