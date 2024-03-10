"use client"

import { useRouter } from 'next/navigation';
import click_icon from "../../../public/assets/chevron-right.svg";
import Image from "next/image";

export function Hero() {

  const router = useRouter()

  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[80px]">
        <h1 className="text-left text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[150px] lg:leading-[150px]">
          Find 
        </h1>
        <h1 className="text-left text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[150px] lg:leading-[150px]">
            Your  
        </h1>
        <h1 className="text-left text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[150px] lg:leading-[150px]">
            Perfect Match
        </h1>
        
          
        <p className="text-start pt-6 text-[#36485C] lg:text-[30px] lg:leading-7px">
          No more roomate Drama..
        </p>

        <div className="flex w-full pt-8 gap-x-6 justify-end ">
          <div>
            <button onClick={() => router.push('/interests')} className="bg-transparent w-1/2 py-4 px-8 text-white rounded-[4px]  items-start lg:w-fit">
              <Image src={click_icon} alt="next_icon" className="h-20 w-20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}