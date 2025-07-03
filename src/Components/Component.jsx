import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";

const Component = ({ back }) => {
  console.log("pages is seen");

  return (
    <div className='absolute top-0 w-[280px] h-screen overflow-y-auto z-50 bg-white dark:bg-[#111d39] font-urbanist'>
      <div className="flex pt-[16px] p-[24px]">
        <div className='p-[6px] border border-1/2 rounded-lg border-black dark:border-white'>
          <FaAngleLeft
            onClick={back}
            className='text-gray-500 dark:text-white cursor-pointer size-[14px]'
          />
        </div>
        <h2 className='text-[18px] font-bold ml-14 dark:text-white'>Components</h2>
      </div>

      <div className="flex px-[24px] flex-col text-custBlackBold dark:text-white">
        {[
          'Alert', 'Avatar', 'Button', 'Radio button', 'Input', 'Badge',
          'Dropdown', 'Modal', 'Progressbar', 'Typography', 'Switch',
          'Stepper', 'Spinner', 'Range slider', 'Language'
        ].map((item, index) => (
          <h2 key={index} className='pt-[16px] font-medium text-[15px] cursor-pointer'>
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Component;
