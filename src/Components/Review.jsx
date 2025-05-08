import React from "react";
import images from "../assets/images";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
const Review = () => {
  const [ratings, setRatings] = useState([
    { stars: 5, count: 124, percentage: 68 },
    { stars: 4, count: 56, percentage: 42 },
    { stars: 3, count: 23, percentage: 18 },
    { stars: 2, count: 12, percentage: 12 },
    { stars: 1, count: 7, percentage: 6 },
  ]);

  const totalReviews = ratings.reduce((sum, rating) => sum + rating.count, 0);
  return (
    <div>
      <div className="text-[#121927] shadow-sm mt-[24px] py-[20px] px-[18px] gap-[40px]">
        <div className="flex ">
          <div className="flex flex-col flex-1  ">
            <div className="flex gap-[16px]">
              <div className=" flex ">
                <p className="text-[36px] leading-[20px] font-bold">4.6</p>
                <p className="text-[18px] font-semibold leading-[26px] ">/5</p>
              </div>
              <img src={images.review} alt="" />
            </div>
            <p className=" leading-[20px] text-[12px] text-[#12192799]">
              Based on 10K+ Reviews
            </p>
            <div className="mt-[12px] flex ">
              {Array.from({ length: 4 }).map((_, index) => (
                <img key={index} src={images.star} alt="" />
              ))}
              <img src={images.star2} alt="" />
            </div>
          </div>
          <div className="min-w-[50%]">
            <div className="max-w-md mx-auto px-4 bg-white rounded-lg ">
              {/* <p className="text-sm text-gray-600 mb-4">Based on {totalReviews} reviews</p> */}

              <div className="space-y-3">
                {ratings.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-1">
                    <div className="w-8 text-[10px] font-medium text-gray-500 leading-[12px]">
                      {rating.stars} Star
                    </div>

                    <div className="flex-1 h-[8px] bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] flex justify-between items-center">
        <h1 className="text-[16px] leading-[19px] ">Employee Reviews</h1>
        <select className="cursor-pointer pl-[20px] pr-[5px] outline-none bg-white text-[14px] leading-[24px] font-medium ">
          <option value="">Most Recent</option>
          <option value="">Old Recent</option>
        </select>
      </div>

      <div className="mt-[20px]">
        <div className="p-[16px] mb-[20px]">
          <div className="flex w-full  bg-white rounded-xl mb-[12px] gap-[12px] items-center">
            <img
              src={images.messenger2}
              className="border h-[28px] w-[28px] flex-shrink-0 border-green-800 rounded-full"
              alt=""
            />
            <div className="flex flex-col flex-grow gap-[6px]">
              <p className="text-[15px] leading-[18px] font-bold">
                Jane Cooper{" "}
                <span className="inline-block h-[3px] w-[3px] bg-green-600 rounded-full mb-[2px] mx-[2px] "></span>{" "}
                <span className="inline-block text-[12px] leading-[20px] font-medium text-[#12192799] ">
                  10 mins ago
                </span>
              </p>
            </div>
            <div className="flex  text-google flex-shrink-0 gap-[2px] items-end">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  className="size-[16px]"
                  src={images.star}
                  alt=""
                />
              ))}
            </div>
          </div>
          <p className=" text-[11px] font-medium text-gray-500 leading-[20px]">
            “Google is a fantastic multinational company. It focusing on search
            engine technology, web application software, quantum computing. I
            love this company”
          </p>
        </div>
        <div className="p-[16px] mb-[20px]">
          <div className="flex w-full  bg-white rounded-xl mb-[12px] gap-[12px] items-center">
            <img
              src={images.messenger4}
              className="border h-[28px] w-[28px] flex-shrink-0 border-green-800 rounded-full"
              alt=""
            />
            <div className="flex flex-col flex-grow gap-[6px]">
              <p className="text-[15px] leading-[18px] font-bold">
                Arijit Singh{" "}
                <span className="inline-block h-[3px] w-[3px] bg-green-600 rounded-full mb-[2px] mx-[2px] "></span>{" "}
                <span className="inline-block text-[12px] leading-[20px] font-medium text-[#12192799] ">
                  6 hours ago
                </span>
              </p>
            </div>
            <div className="flex  text-google flex-shrink-0 gap-[2px] items-end">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  className="size-[16px]"
                  src={images.star}
                  alt=""
                />
              ))}
            </div>
          </div>
          <p className=" text-[11px] font-medium text-gray-500 leading-[20px]">
            “Google is a fantastic multinational company. It focusing on search
            engine technology, web application software, quantum computing. I
            love this company”
          </p>
        </div>
        <div className="p-[16px] mb-[20px]">
          <div className="flex w-full  bg-white rounded-xl mb-[12px] gap-[12px] items-center">
            <img
              src={images.messenger3}
              className="border h-[28px] w-[28px] flex-shrink-0 border-green-800 rounded-full"
              alt=""
            />
            <div className="flex flex-col flex-grow gap-[6px]">
              <p className="text-[15px] leading-[18px] font-bold">
                Sonu Nigam{" "}
                <span className="inline-block h-[3px] w-[3px] bg-green-600 rounded-full mb-[2px] mx-[2px] "></span>{" "}
                <span className="inline-block text-[12px] leading-[20px] font-medium text-[#12192799] ">
                  2 days ago
                </span>
              </p>
            </div>
            <div className="flex  text-google flex-shrink-0 gap-[2px] items-end">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  className="size-[16px]"
                  src={images.star}
                  alt=""
                />
              ))}
            </div>
          </div>
          <p className=" text-[11px] font-medium text-gray-500 leading-[20px]">
            “Google is a fantastic multinational company. It focusing on search
            engine technology, web application software, quantum computing. I
            love this company”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
