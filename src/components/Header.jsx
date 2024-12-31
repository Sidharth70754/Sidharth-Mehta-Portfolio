import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 py-14 px-20'>
        <button className='bg-black border-4 text-xl px-3 py-1 hover:bg-gray-500 text-cyan-50 rounded-full '>Hire me</button>
        <i className="ri-menu-unfold-2-fill text-2xl ml-2"></i>
    </div>
  )
}

export default Header