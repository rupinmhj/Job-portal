import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import images from '../assets/images';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#a55fff]">
        <div className="flex gap-2 items-center mb-12">
      <img src={images.jobkoLogo} alt="Logo" className="w-12 h-12 " />
      <h2 className='font-urbanist text-white font-bold text-[20px]'>Jobko</h2>
        </div>
      {/* <ClipLoader color="#401b8aff" size={50} speedMultiplier={0.6} /> */}
      <div className="w-12 h-12 border-[6px] border-white border-dashed rounded-full animate-spin spin-slow"></div>

    </div>
  );
};

export default Loading;
