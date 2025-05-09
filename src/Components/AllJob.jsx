import React from "react";

import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { motion } from 'framer-motion';
const AllJob = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, delay:0.1 }}
    className="h-screen overflow-y-scroll scroll-container"
  >
      <div className=" bg-white lg:px-[232px] xl:px-[274px]  text-[#121927] font-urbanist  w-full">
        <div className="fixed top-0 left-0 right-0 bg-white z-10">
          <div className="flex items-center justify-between px-[24px] pb-[24px] lg:px-[252px] py-[16px]">
            <div className="p-[6px] border rounded-lg border-black cursor-pointer">
              <FaAngleLeft
                onClick={back}
                className="text-gray-500  size-[14px]"
              />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">All Job</h2>
            <h2 className="w-[28px]"></h2>
          </div>
        </div>
        <div className="flex justify-between itesm-center mt-[74px] px-[24px] ">
          <p className="text-[15px] font-semibold leading-[18px]">
            189 Jobs Found
          </p>
          <img src={images.arrow} alt="" />
        </div>

        <div className="mt-[24px] px-[24px]">
          <div className="bg-bgColor  bg-opacity-65">
            <div className="relative bg-white flex p-[16px] mb-[16px] gap-[16px]">
              <div className="flex    justify-center items-start  ">
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                  <img src={images.notigoogle} className="size-[24px]" alt="" />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-google font-medium leading-[12px] text-[10px]">
                  Google LLC{" "}
                </span>
                <span className="text-[15px] leading-[18px] font-semibold">
                  Lead Product Designer
                </span>

                <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                  <p className="">
                    <img
                      src={images.wallet}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    $6k/month
                  </p>
                  <p className="">
                    <img
                      src={images.location}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    Berlin, Germany
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <img
                  src={images.bookmark2}
                  className=" right-2 top-5 h-5 w-5"
                  alt=""
                />
                <span className="text-[12px] text-gray-600 ">24h</span>
              </div>
            </div>

            <div className="relative flex p-[16px] mb-[16px] bg-white gap-[16px]">
              <div className="flex    justify-center items-start  ">
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                  <img src={images.mailchimp} className="size-[24px]" alt="" />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-google font-medium leading-[12px] text-[10px]">
                  Mailchimp{" "}
                </span>
                <span className="text-[15px] leading-[18px] font-semibold">
                  Lead Product Designer
                </span>

                <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                  <p className="">
                    <img
                      src={images.wallet}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    $8k/month
                  </p>
                  <p className="">
                    <img
                      src={images.location}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <img
                  src={images.bookmark2}
                  className=" right-2 top-5 h-5 w-5"
                  alt=""
                />
                <span className="text-[12px] text-gray-600 ">36h</span>
              </div>
            </div>

            <div className="relative flex p-[16px] mb-[16px] bg-white gap-[16px]">
              <div className="flex    justify-center items-start  ">
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                  <img src={images.slack} className="size-[24px]" alt="" />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-google font-medium leading-[12px] text-[10px]">
                  Slack{" "}
                </span>
                <span className="text-[15px] leading-[18px] font-semibold">
                  Mobile Apps Designer
                </span>

                <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                  <p className="">
                    <img
                      src={images.wallet}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    $8k/month
                  </p>
                  <p className="">
                    <img
                      src={images.location}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <img
                  src={images.bookmark2}
                  className=" right-2 top-5 h-5 w-5"
                  alt=""
                />
                <span className="text-[12px] text-gray-600 ">48h</span>
              </div>
            </div>

            <div className="relative flex p-[16px] mb-[16px] bg-white gap-[16px]">
              <div className="flex    justify-center items-start  ">
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                  <img src={images.treehouse} className="size-[24px]" alt="" />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-google font-medium leading-[12px] text-[10px]">
                  Treehouse{" "}
                </span>
                <span className="text-[15px] leading-[18px] font-semibold">
                  Graphic Designer
                </span>

                <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                  <p className="">
                    <img
                      src={images.wallet}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    $5k/month
                  </p>
                  <p className="">
                    <img
                      src={images.location}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    London
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <img
                  src={images.bookmark2}
                  className=" right-2 top-5 h-5 w-5"
                  alt=""
                />
                <span className="text-[12px] text-gray-600 ">3d</span>
              </div>
            </div>

            <div className="relative flex p-[16px] mb-[16px] bg-white gap-[16px]">
              <div className="flex    justify-center items-start  ">
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                  <img src={images.zapier} className="size-[24px]" alt="" />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-google font-medium leading-[12px] text-[10px]">
                  Zapier{" "}
                </span>
                <span className="text-[15px] leading-[18px] font-semibold">
                  Application Designer
                </span>

                <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                  <p className="">
                    <img
                      src={images.wallet}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    $6K/month
                  </p>
                  <p className="">
                    <img
                      src={images.location}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    Dublin, Ireland
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <img
                  src={images.bookmark2}
                  className=" right-2 top-5 h-5 w-5"
                  alt=""
                />
                <span className="text-[12px] text-gray-600 ">5h</span>
              </div>
            </div>

            <div className="relative flex p-[16px] mb-[16px] bg-white gap-[16px]">
              <div className="flex    justify-center items-start  ">
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                  <img src={images.evernote} className="size-[24px]" alt="" />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-google font-medium leading-[12px] text-[10px]">
                  Evernote{" "}
                </span>
                <span className="text-[15px] leading-[18px] font-semibold">
                  Lead Product Designer
                </span>

                <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                  <p className="">
                    <img
                      src={images.wallet}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    8k/month
                  </p>
                  <p className="">
                    <img
                      src={images.location}
                      className="size-[12px] mb-1 inline-block mr-[4px]"
                      alt=""
                    />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <img
                  src={images.bookmark2}
                  className=" right-2 top-5 h-5 w-5"
                  alt=""
                />
                <span className="text-[12px] text-gray-600 ">5d</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
  );
};

export default AllJob;
