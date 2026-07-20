import { Search, User, User2 } from 'lucide-react';
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { PiCirclesThreeBold } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import React from 'react';
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FiMessageSquare } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";


const filterData = [
  { id: 1, icon: <MdOutlineCalendarToday size={20} />, text: "Date: Any time" },
  { id: 2, icon: <MdOutlinePerson size={20} />, text: "Author: Everyone" },
  { id: 3, icon: <PiCirclesThreeBold size={20} />, text: "Workspace: All" },
  { id: 4, icon: <IoFilterSharp size={20} />, text: "More Filters" }
]

const recent = ["Q3 Strategy Review", "Branding Guidelines v2", "Mobile Roadmap"]


const members = [{
  id: 1, name: "Sarah Jenkins", designation: "Design Lead",
},
{
  id: 2, name: "David Chien", designation: "Product Manager"
}
]



const documnets = [
  {
    id: 1, title: "Engineering Sprint Logistics - Q4", content: " This document outlines the operational framework for the upcoming Q4 engineering sprints, including allocation of resources, key milestones, and critical path analysis for the SyncNote mobile... ",
    Time: "2hrs ago",
    from: "Product Ops",
    view: "12 views",
    status: "Hot"

  },
  {
    id: 2, title: "API Documentation - Version 2.4", content: "Comprehensive overview of the updated REST endpoints and the new WebSocket implementation for real-time collaboration syncing between local- first clients...", Time: "Yesterday", from: "Tech Space"
  }
]

const comments = [
  { id: 1, name: "Sarah Jenkins", from: "ON MARKETING DECK", comment: "We should definitely look into the color contrast  here to ensure we meet accessibility standards for the new dashboard" },
  {
    id: 2, name: "David Chien", from: "ON SPRINT 42 PLAN",
    comment: "Moved the security audit to the next milestone to prioritize the UI polish"
  }
]

const page = () => {
  return (
    <div className='mt-10  flex flex-col w-full gap-4 py-2 px-6'>


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
        {recent.map((r, i) => (
          <div key={i} className='px-1 gap-2 items-center text-gray-800  flex flex-row '>
            <RxCounterClockwiseClock size={16} />
            <div>{r}</div>
          </div>
        ))}

      </div>



      {/* TOP MEMBERS */}
      <div className='flex flex-col gap-4 mt-4'>
        <span className='text-gray-400'>TOP MEMBERS</span>
        {members.map((m) => (
          <div key={m.id} className='px-1 gap-2 items-center text-gray-800 justify-between flex flex-row '>
            <div className='flex flex-row gap-2 items-center'>
              <div className='p-2 rounded-full border'>
                <User />
              </div>
              <div className='flex flex-col'>
                <span className='text-gray-800'>{m.name}</span>
                <p className='text-sm text-gray-600'>{m.designation}</p>
              </div>
            </div>

            <button className='p-2 rounded-full cursor-pointer hover:bg-gray-100'>
              <FiMessageSquare size={24} />
            </button>
          </div>
        ))}
      </div>


      {/* DOCUMENTS */}
      <div className='flex flex-col gap-4 mt-4'>
        <div className='justify-between flex flex-row items-center'>
          <span className='text-gray-400'>DOCUMENTS</span>
          <button className='text-blue-500 text-sm'>View All</button>
        </div>
        {documnets.map((docs) => (
          <DocsCard key={docs.id} Time={docs.Time} title={docs.title} status={docs.status} view={docs.view} content={docs.content} from={docs.from} />
        ))}

      </div>



      {/* COMMENTS */}
      <div className='flex flex-col gap-4 mt-4 mb-10'>
        <div className='justify-between flex flex-row items-center'>
          <span className='text-gray-400'>COMMENTS</span>
          <button className='text-blue-500 text-sm'>View All</button>
        </div>
        <div className='flex flex-col bg-blue-50/70 border rounded-2xl gap-8 p-6'>
          {comments.map((comment) => (
            <Comment key={comment.id} name={comment.name} comment={comment.comment} from={comment.from} />
          ))}
        </div>

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


const DocsCard = ({ title, content, Time, status, from, view }: { title: string, content: string, Time: string, status?: string, from?: string, view?: string }) => {

  return (
    <div className='flex flex-row items-start p-6 gap-4 rounded-xl border bg-white'>
      <div className='text-primary  p-3 rounded-lg bg-primary/8'><IoDocumentTextOutline size={28} /></div>

      <div className='flex flex-col gap-2 pr-4'>
        <span className='gap-2 flex flex-row'>{title} {status && <span className='p-1 text-gray-800 bg-orange-100 text-sm  rounded-lg'>
          {status}
        </span>} </span>
        <p className='text-sm text-gray-600'>{content}</p>
        <div className='flex flex-row gap-4 items-center'>
          <div className='text-gray-400 flex flex-row gap-1 items-center text-xs'>
            <RxCounterClockwiseClock size={12} />
            {Time}
          </div>

          {from && <div className='text-gray-400 flex flex-row gap-1 items-center text-xs'>
            <FaRegFolder size={14} />
            {from}
          </div>}

          {view && <div className='text-gray-400 flex flex-row gap-1 items-center text-xs'>
            <MdOutlineRemoveRedEye size={14} />
            {view}
          </div>}
        </div>
      </div>

    </div>
  )
}


const Comment = ({ name, from, comment }: { name: string, from: string, comment: string }) => {
  return (
    <div className='flex flex-col items-start gap-1 '>
      <div className='flex flex-row gap-2 items-center'>
        <User2 className='rounded-full p-1 border bg-gray-100' size={28} />
        <span className='font-bold text-xs' >{name}</span>
        <p className='text-gray-500 text-xs -translate-y-0\.5 font-light self-start'>{from.toUpperCase()}</p>
      </div>

      <div className='flex flex-row gap-6'>
        <div className='w-0.5 rounded bg-gray-300' />
        <i className='text-sm font-light font- text-gray-800'>&ldquo;{comment}&rdquo;</i>
      </div>

    </div>
  )
}



