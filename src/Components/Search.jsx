import React from 'react'
import images from '../assets/images'
const Search = () => {
  return (
    <div className='lg:mx-[232px] px-[24px]  flex font-urbanist items-center pt-[88px]'>
      
      <div className='py-[14px] border border-gray-200 w-full rounded-xl leading-[20px] flex items-center'>
        <img src={images.searchIcon} className='pl-[18px] cursor-pointer' alt="" />
        
        <input type="text" className='text-[14px] px-[14px] text-textSearch bg-bgColor focus:outline-none w-full' placeholder='Search...'/>
        <img src={images.option} className='pr-[14px]' alt="" />
      
      </div>
    </div>
  )
}

export default Search
