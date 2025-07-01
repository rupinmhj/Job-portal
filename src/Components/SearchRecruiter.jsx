import images from '../assets/images'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const SearchRecruiter = () => {
  const navigate=useNavigate();
  const [searchTerm,setSearchTerm]=useState("");

  const handleSearch=(e)=>{
    if(e.key==="Enter"){
      navigate("/application",{state:{searchTerm}});
    }
  }
  const filter=()=>{
    navigate("/setfilters")
  }
  return (
    <div className='max-w-[1024px] mx-auto px-6 flex font-urbanist items-center pt-[88px] bg-white'>
      
      <div className='py-[14px] border focus-within:border-gray-400 border-gray-200 w-full rounded-xl leading-[20px] flex items-center focus:border-gray-700'>
        <img src={images.searchIcon} className='pl-[18px] cursor-pointer' alt="" />
        
        <input type="text"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
        className='text-[14px] px-[14px] text-textSearch  outline-none  w-full' placeholder='Search applicants, jobs, or applications…'/>
      </div>
    </div>
  )
}
export default SearchRecruiter
