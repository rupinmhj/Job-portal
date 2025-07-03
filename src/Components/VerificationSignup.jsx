import React, { useState ,useEffect,useRef} from "react";
import { FaAngleLeft, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import images from "../assets/images";

const VerificationSignup = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  // const home=()=>navigate("/home");
  const signup=()=>navigate("/signup");

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputRefs=[
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  useEffect(()=>{
    inputRefs[0].current?.focus(); //we use ? so that it doesn't shows error even if the curren is null
  },[]);

  const[seconds,setSeconds]=useState(59);
  useEffect(()=>{
    if(seconds>0){
      const timer=setTimeout(()=>setSeconds(seconds-1),1000);
      return()=>clearTimeout(timer);
    }
  })

  const handleInput=(index,e)=>{
    console.log("handleInputclicked")
    const inputElement=e.target;

    //Replace any non-digit with empty string
    inputElement.value=inputElement.value.replace(/[^\d]/g,'');
    
    if(inputElement.value && index<3){
      inputRefs[index+1].current?.focus();
    }
  }

  const handleKeyDown=(index,e)=>{
     console.log("handleKeyclicked")
    if(e.key==='Backspace' && !e.target.value && index>0){
      const prevInput=inputRefs[index-1].current;
      prevInput.value="";
      prevInput.focus();
    }
  }

  

  return (
    <>
      <div className="bg-white lg:px-[232px] xl:px-[274px] px-[24px] pb-[24px] mb-[35.6px] pt-[16px] font-urbanist text-[#121927] w-full">
        <div className="fixed top-0 left-0 right-0 bg-white z-10">
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
            <div onClick={back} className="p-[6px] border rounded-lg border-black cursor-pointer">
              <FaAngleLeft  className="text-gray-500 size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Verification</h2>
            <h2 className="w-[14px]"></h2>
          </div>
        </div>
      </div>

      <div className="bg-white lg:px-[232px] xl:px-[274px] px-[24px] font-urbanist text-[#121927]">
        <div className="w-full">
          
          <div className="w-full mt-[16px]">
            <h2 className="text-[#71757D] text-[14px] leading-[24px] font-medium">
             We’ve send you the verification code on
            </h2>
            <h2 className="text-[14px] leading-[24px] font-medium">rupinmaharjan@gmail.com</h2>
          </div>
        </div>

        <div>
           <div className="flex justify-center space-x-4 p-4">
               {[0,1,2,3].map((index)=>(
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength={1}
              inputMode="numeric "
              className="h-[55px] w-[55px] text-center text-[24px] font-bold border rounded-[12px] focus:outline-custBlackBold"
              onInput={(e)=>handleInput(index,e)}
              onKeyDown={e=>handleKeyDown(index,e)}
              
         /> ))}
           </div>
         
        </div>


        
       

          <button
          onClick={()=>navigate('/signin')}
          className="w-full cursor-pointer bg-[#2869FE] p-[16px] text-[16px] font-bold text-white rounded-xl mt-[20px]"
        >
          Sign In
        </button>

        <div className="text-[14px] mt-[48px] leading-[24px] font-medium text-google flex gap-2 justify-center">
          <h1>Code expires in 00:{seconds}</h1>
          {seconds===0 && <p className="text-[#2869FE]">Resend code </p>}
        </div>
      </div>
    </>
  );
};

export default VerificationSignup;
