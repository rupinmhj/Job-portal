import React from 'react'
import images from '../assets/images'
const CompanyDetail = () => {
  return (
    <div>
      
      <div className="mt-[24px]">
        <h1 className="text-[16px] font-bold leading-[19px]">About this Company</h1>
        <p className="mt-[14px] text-[12px] text-[#12192799]">
        Google is an American multi-national technology company focusing on search engine technology, computer software, quantum computing, online advertising, e-commerce, cloud computing, artificial intelligence, and consumer electronics.
        </p>
      </div>
        <div className="mt-[24px]">
            <div className="flex gap-[12px] items-center mb-[16px]">
                <img src={images.web} alt="" />
                <div className="flex w-full justify-between items-center">
                    <h1 className='font-semibold text-[15px] leading-[18px]'>Website</h1>
                    <h1 className=' text-[#12192799] text-[14px] leading-[24px] font-medium'>www.google.com</h1>
                </div>
            </div>
            <div className="flex gap-[12px] items-center mb-[16px]">
                <img src={images.location3} alt="" />
                <div className="flex w-full justify-between items-center">
                    <h1 className='font-semibold text-[15px] leading-[18px]'>Headquarters</h1>
                    <h1 className=' text-[#12192799] text-[14px] leading-[24px] font-medium'>California, USA</h1>
                </div>
            </div>
            <div className="flex gap-[12px] items-center mb-[16px]">
                <img src={images.calender3} alt="" />
                <div className="flex w-full justify-between items-center">
                    <h1 className='font-semibold text-[15px] leading-[18px]'>Founded</h1>
                    <h1 className=' text-[#12192799] text-[14px] leading-[24px] font-medium'>September 4, 1998</h1>
                </div>
            </div>
            <div className="flex gap-[12px] items-center mb-[16px]">
                <img src={images.people} alt="" />
                <div className="flex w-full justify-between items-center">
                    <h1 className='font-semibold text-[15px] leading-[18px]'>Size</h1>
                    <h1 className=' text-[#12192799] text-[14px] leading-[24px] font-medium'>100,000 Employee</h1>
                </div>
            </div>
            <div className="flex gap-[12px] items-center mb-[16px]">
                <img src={images.wallet2} alt="" />
                <div className="flex w-full justify-between items-center">
                    <h1 className='font-semibold text-[15px] leading-[18px]'>Revenue</h1>
                    <h1 className=' text-[#12192799] text-[14px] leading-[24px] font-medium'>$25,000 Billion</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CompanyDetail
