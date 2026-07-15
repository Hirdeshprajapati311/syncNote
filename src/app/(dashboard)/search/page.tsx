import { Search } from 'lucide-react';
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { PiCirclesThreeBold } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import React from 'react';
import { RxCounterClockwiseClock } from "react-icons/rx";


const filterData = [
  { id: 1, icon: <MdOutlineCalendarToday size={20} />, text: "Date: Any time" },
  { id: 2, icon: <MdOutlinePerson size={20} />, text: "Author: Everyone" },
  { id: 3, icon: <PiCirclesThreeBold size={20} />, text: "Workspace: All" },
  { id: 4, icon: <IoFilterSharp size={20} />, text: "More Filters" }
]

const recent = ["Q3 Strategy Review", "Branding Guidelines v2", "Mobile Roadmap"]

const page = () => {
  return (
    <div className='mt-10  flex flex-col w-full gap-4'>


      <div className='flex flex-row bg-success-light/20 border  items-center rounded-lg gap-1 px-4'>
        <Search className='text-primary' size={16} />
        <input className='p-4 w-full outline-0 ring-0 border-0' type="text" placeholder='Search across documents, comments, and members...' />
      </div>



      <div className='flex flex-row gap-4 px-1'>
        {filterData.map((data) => (
          <Filter icon={data.icon} key={data.id} text={data.text} />
        ))}

      </div>


      {/* RECENT */}
      <div className='flex flex-col gap-4 mt-4'>
        <span className='text-gray-400'>RECENT</span>
        {recent.map((r) => (
          <div className='px-1 gap-2 items-center text-gray-800  flex flex-row '>
            <RxCounterClockwiseClock size={16} />
            <div>{r}</div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default page;

const Filter = ({ icon, text }: { icon: React.ReactNode, text: string }) => {
  return (
    <div className='flex text-xs md:text-sm flex-row px-3 p-2 bg-white border-2 items-center text-gray-700 rounded-3xl gap-2'>
      <div >{icon}</div>
      <span>{text}</span>
    </div>
  )
}
