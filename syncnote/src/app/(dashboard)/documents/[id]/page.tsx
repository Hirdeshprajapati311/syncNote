import React from 'react';
import { recent } from '../page';
import { RxCounterClockwiseClock } from "react-icons/rx";
import { RiSparklingLine } from "react-icons/ri";
import { FaArrowUp } from 'react-icons/fa';



async function page({ params }: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const project = recent.find((d) => d.id === Number(id));

  return (
    <div className='flex flex-row h-full'>
      <div className='flex flex-1 flex-col  h-[89vh] '>

      </div>

      <aside className='w-72 border-l-2  border bg-white flex flex-col'>

        {/* Version History */}
        <div className='rounded-lg border p-2 m-6 bg-primary/10 justify-between flex flex-row  '>
          <div className='gap-1 items-center flex flex-row text-gray-700'>
            <RxCounterClockwiseClock />
            <span className='text-sm'>Version History</span>
          </div>

          <span className='p-1 rounded bg-blue-100 text-xs'>v1.0</span>
        </div>


        {/* Comments */}
        <div className='border-t border-gray-300 flex-col flex p-6 gap-2'>

          <div className="flex flex-row items-center justify-between">
            <span className='font-bold text-gray-800'>Comments</span>
            <p className='p-1 px-2 rounded bg-blue-100 text-xs'>3 New</p>
          </div>



        </div>


        <div className='mt-auto border-t border-gray-300 flex flex-col gap-2 p-4'>

          <div className='flex flex-row gap-1'>
            <button className='bg-primary text-white rounded p-1'>
              <RiSparklingLine />
            </button>

            <span className='text-primary font-bold'>Sync AI</span>


          </div>
          <div className='relative border border-gray-100 flex w-full'>
            <textarea placeholder='Ask AI to summarize or rewrite..' className=' bg-primary/20 resize-none rounded-lg w-full  p-2 text-xs h-20 ' />

            <button className='bg-primary text-white rounded absolute bottom-1 right-1 p-1'>
              <FaArrowUp size={16} />
            </button>
          </div>


        </div>


      </aside>
    </div>
  );
}

export default page;
