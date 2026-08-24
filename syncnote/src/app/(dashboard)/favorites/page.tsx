import React from 'react';
import { HiOutlineSparkles } from "react-icons/hi2";
import { IoMdCode } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { BsFillPinFill } from "react-icons/bs";
import { FiZap } from "react-icons/fi";
import { RxStarFilled } from "react-icons/rx";

const quickAccess = [
  { id: 1, title: "Product Roadmap 2024", content: "Strategy and key milestones for the upcoming fiscal quarters with detailed Q3 focus...", time: "Updated 2h ago", people: "8 Members", icon: <HiOutlineSparkles size={24} /> },
  { id: 2, title: "API Documentation", content: "Internal technical specifications for the v2.4 endpoint migration and security protocols.", time: "Updated 1d ago", people: "Personal", icon: <IoMdCode size={24} /> },
  { id: 3, title: "Brand Guidelines v3", content: "Color tokens, typography hierarchy, and asset library for the new web redesign project.", time: "Updated 5h ago", people: "12 Members", icon: <IoColorPalette size={24} /> }

]

const page = () => {
  return (
    <div className='mt-4 lg:mt-10  flex flex-col w-full gap-10 py-2 px-6 overflow-y-auto h-screen'>






      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center px-4">
          <span className='text-amber-700'><FiZap size={24} /></span>
          <span className="text-lg md:text-2xl text-gray-600">Quick Access</span>


        </div>


        <div className="flex flex-col  md:grid md:grid-cols-2  lg:grid-cols-3   gap- md:gap-4  ">
          {quickAccess.map((fav,) => (
            <QuickAccessCard key={fav.id} title={fav.title} people={fav.people} icon={fav.icon} time={fav.time} content={fav.content} />
          ))}

        </div>

      </div>

    </div>
  );
}

export default page;

const QuickAccessCard = ({ title, content, time, people, icon }: { title: string, content: string, time: string, people: string, icon: React.ReactNode }) => {
  return (
    <div className="rounded-4xl mb-12  bg-white col-span-1 border gap-4 p-6 flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="bg-primary/20 text-primary rounded-lg p-2">{icon}</div>
        <div className=" text-amber-800">
          <BsFillPinFill size={26} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-base md:text-xl">{title}</span>
        <p className=" text-xs md:text-base ">{content}</p>
      </div>

      <span className='flex flex-row gap-2'>
        <p className='text-sm font-light text-gray-700'>{time}</p>
        •
        <p className='text-sm font-light text-gray-700'>{people}</p>

      </span>


    </div>
  )
}
