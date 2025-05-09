import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";

const Component = ({ back }) => {
  console.log("pages is seen");

  return (
    <div className='absolute top-0 w-[280px] h-screen overflow-y-auto z-50 bg-white font-urbanist'>
      <div className="flex pt-[16px] p-[24px]">
        <div className='p-[6px] border border-1/2 rounded-lg border-black '>
          <FaAngleLeft onClick={back} className='text-gray-500 cursor-pointer size-[14px]' />
        </div>
        <h2 className='text-[18px] font-bold ml-14'>Components</h2>
      </div>
      <div className="flex px-[24px] flex-col">
        <h2 className='pt-[16px] font-medium text-[15px]'>Alert</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Avatar</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Button</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Radio button</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Input</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Badge</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Dropdown</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Modal</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Progressbar</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Typography</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Switch</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Stepper</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Spinner</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Range slider</h2>
        <h2 className='pt-[16px] font-medium text-[15px]'>Language</h2>
      </div>
    </div>
  );
};

export default Component;
