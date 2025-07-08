import { useNavigate } from 'react-router-dom';
import { useState, useContext,useRef } from 'react';
import images from '../assets/images';
import ThemeContext from './ThemeContext'; // Added ThemeContext for dark mode

const SearchRecruiter = () => {
  const searchRef=useRef(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useContext(ThemeContext); // Use theme from context

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate("/application", { state: { searchTerm } });
    }
  };

  const filter = () => {
    navigate("/application");
  };

  return (
    <div className='max-w-[1024px] mx-auto px-6 flex font-urbanist items-center pt-[88px] bg-white dark:bg-[#111d39] dark:text-white'>
      <div  className='py-[14px] border border-gray-200 dark:border-gray-700 focus-within:border-gray-400 dark:focus-within:border-white w-full rounded-xl leading-[20px] flex items-center'>
        
        <img
          src={theme === 'light' ? images.searchIcon : images.searchIconDark}
          className='pl-[18px] cursor-pointer'
          alt="search"
          onClick={()=>searchRef.current?.focus()}
        />
        
        <input
        ref={searchRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
            
          onKeyDown={handleSearch}
          className='text-[14px] px-[14px] bg-transparent text-textSearch dark:text-white dark:bg-[#111d39] outline-none w-full'
          placeholder='Search applicants, jobs, or applications…'
        />
        
        <img
          onClick={filter}
          src={images.option}
          className='pr-[14px] cursor-pointer'
          alt="filter"
        />
      </div>
    </div>
  );
};

export default SearchRecruiter;
