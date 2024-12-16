import React from 'react'

const SmallNavBar = () => {
  return (
    <div className='sticky top-0 bg-white z-20'>
    <div className='flex flex-row '>
      <ul className='flex flex-row gap-3 my-2.5 px-10 text-xs'>
        <li><a href="">Do More, Be More</a></li>
        <li><a href="">Tryin3D</a></li>
        <li><a href="">StoreLocator</a></li>
        <li><a href="">Singapore</a></li>
        <li><a href="">UAE</a></li>
        <li><a href="">John Jacobs</a></li>
        <li><a href="">Aqualens</a></li>
        <li><a href="">Cobrowsing</a></li>
        <li><a href="">Engineering Blog</a></li>
        <li><a href="">Partner With Us</a></li>
      <p className=' text-xs relative left-[42vw]' ><a href="">Contact Us</a></p>
      </ul>
    </div>
    </div>
  )
}

export default SmallNavBar
