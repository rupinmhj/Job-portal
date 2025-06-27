import React from 'react'
import images from '../assets/images'
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const navigate=useNavigate();
  const filter=()=>{
    navigate("/setfilters")
  }

  return (
    <div className='max-w-[1024px] mx-auto px-[24px]  flex font-urbanist items-center pt-[88px] bg-white'>
      
      <div className='py-[14px] border focus-within:border-gray-400 border-gray-200 w-full rounded-xl leading-[20px] flex items-center focus:border-gray-700'>
        <img src={images.searchIcon} className='pl-[18px] cursor-pointer' alt="" />
        
        <input type="text" className='text-[14px] px-[14px] text-textSearch  outline-none  w-full' placeholder='Search...'/>
        <img onClick={filter} src={images.option} className='pr-[14px]' alt="" />
      
      </div>
    </div>
  )
}

export default Search
