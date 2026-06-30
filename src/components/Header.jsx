import React from 'react'

const Header = () => {
  return (
     <div className='w-full h-1/4  text-amber-50  '>
      <div className='flex gap-3 items-center justify-between'>
        <div className='flex  items-center justify-between'>
      <a href='/' className='m-2'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
        width="56"
        height="56">

  <defs>

    <linearGradient id="pink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff4ea3"/>
      <stop offset="100%" stop-color="#ff0077"/>
    </linearGradient>

    <linearGradient id="cyan" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#53ffff"/>
      <stop offset="100%" stop-color="#00a8ff"/>
    </linearGradient>

    <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2d3138"/>
      <stop offset="100%" stop-color="#0d1016"/>
    </linearGradient>

    <filter id="glowPink" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8"/>
    </filter>

    <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8"/>
    </filter>

  </defs>

  <rect width="512" height="512" rx="90" fill="#05070b"/>


  <path
  d="
  M118 155
  L215 58
  L300 58
  L215 143
  L215 308
  L300 393
  L215 393
  L118 296
  Z"
  fill="url(#metal)"
  stroke="url(#pink)"
  stroke-width="8"/>

  <path
  d="
  M118 155
  L215 58
  L300 58
  "
  stroke="#ff2d92"
  stroke-width="10"
  fill="none"
  filter="url(#glowPink)"/>


  <path
  d="
  M394 155
  L297 58
  L212 58
  L297 143
  L297 308
  L212 393
  L297 393
  L394 296
  Z"
  fill="url(#metal)"
  stroke="url(#cyan)"
  stroke-width="8"/>

 
  <path
  d="
  M394 155
  L297 58
  "
  stroke="#39e8ff"
  stroke-width="10"
  fill="none"
  filter="url(#glowBlue)"/>

  <rect
  x="236"
  y="172"
  width="40"
  height="168"
  rx="8"
  fill="url(#metal)"
  stroke="url(#pink)"
  stroke-width="6"/>

      </svg>
    
  </a>
  <a href="/" className='text-3xl text-cyan-50 font-bold pb-2'>VibeCoder</a>
  </div>

  <div className='flex gap-7 items-center'>
    <a href='/product'>Products</a>
    <a href='/work'>For Work</a>
    <a href='/resources'>Resources</a>
    <a href='/security'>Security</a>
    <a href='/pricing'>Pricing</a>
  </div>

  <div className='flex items-center justify-end gap-3 mr-2'>
    <a href='/contact'>Contact sales</a>
    <a href='/login'>Login</a>
    <button className='border-cyan-400 text-cyan-400  p-2.5 border-2 rounded-3xl '>Create Account</button>
  </div>
  </div>

  

      
    </div>
  )
}

export default Header
