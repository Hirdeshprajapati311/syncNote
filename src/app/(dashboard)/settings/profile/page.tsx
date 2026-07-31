import { Copy, Edit2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { IoLink } from "react-icons/io5";
import { RiSparkling2Line } from "react-icons/ri";

import { LuLockKeyhole } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const page = () => {


  const isEdit = false
  return (
    <div className='mt-4 lg:mt-10  flex flex-col  w-full gap-10 py-2 px-4 sm:px-6 md:px-28 lg:px-36 overflow-y-auto h-screen'>

      <div className='flex flex-col '>
        <span className='text-2xl font-bold font-inter'>Profile Settings</span>
        <p className='text-sm text-gray-500'>Manage your personal identity and workspace preferences across the platform.</p>
      </div>

      <div className='grid grid-1 md:grid-cols-3 lg:grid-cols-7 gap-4 space-y-6'>
        <div className='col-span-1 md:col-span-2 lg:col-span-5 gap-4 space-y-6'>
          {/* First Card */}
          <div className='flex flex-col items-center justify-center md:items-start md:flex-row gap-8 p-4 md:p-10 rounded-lg border w-full border-gray-300'>
            <div className='relative w-20 h-20 shrink-0 mt-4 md:mt-0 object-fill'>
              <Image src="https://img.magnific.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?semt=ais_hybrid&w=740&q=80" alt="profile image" fill className="object-cover  rounded-2xl" />

              <button className='absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-lg p-1.5'><Edit2 size={12} /></button>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="">Full Name</label>

                  <span className='px-4 py-2 text-gray-700 rounded-lg bg-blue-50 border-gray-300 border min-w-40 max-w-60 truncate'>Hirdesh Prajapati</span>

                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="">Email Address</label>

                  <span className='px-4 py-2 text-gray-700 rounded-lg bg-blue-50 border-gray-300 border min-w-40  max-w-60 md:max-w-80 truncate'>hirdeshprajapati314@gmail.com</span>

                </div>

              </div>


              <div className='flex flex-col gap-2'>
                <label htmlFor="">Brief Bio</label>

                <span className='px-4 py-2 text-gray-700 rounded-lg bg-blue-50 border-gray-300 border max-w-60 md:max-w-96 md:min-w-84 line-clamp-3'>JS Developer with strong grasp in MERN Technologies and understanding of Larvel and good knowledge of VectorDB and Genrative AI</span>

              </div>


            </div>

          </div>

          {/* Second Card */}
          <div className='flex flex-col p-10  rounded-lg border   border-gray-300 gap-2'>
            <div className='flex flex-col md:flex-row justify-between gap-2 md:gap-0 items-start md:items-center'>
              <div className='flex flex-row gap-2 md:gap-4'>
                <IoLink size={24} className='text-primary' />
                <p className='text-gray-600'>Personal URL</p>
              </div>

              <p className='font-semibold font-serif text-primary '>Change Slug</p>

            </div>


            <div className='flex flex-col md:flex-row  gap-4 md:gap-0 justify-between items-center mt-4 bg-blue-50 border-primary/50 border rounded-lg p-4'>
              <span className='text-xs md:text-sm text-secondary italic'>syncnote.io/u/hirdesh-prajapati</span>

              <div className='text-gray-600 text-sm md:text-base  flex flex-row gap-1'><Copy /> Copy</div>

            </div>

            <p className='text-gray-600 text-sm mt-2 md:w-[90%]'>This link allows others to view your public profile and shared documents.</p>

          </div>
        </div>

        <div className='col-span-1 lg:col-span-2 space-y-6'>

          {/* Active WorkSpace Card */}

          <div className='flex flex-col gap-4 rounded-lg bg-primary p-6'>
            <span className='text-gray-50/70'>ACTIVE WORKSPACE</span>


            <div className='flex flex-row gap-6'>

              <div className='p-3 rounded-2xl bg-gray-50/30 text-white bg-seconndary'>
                <RiSparkling2Line size={40} />
              </div>

              <div className='flex flex-col  justify-center'>
                <span className='font-bold text-xl text-white'>Design Team</span>
                <p className='text-gray-50/70 text-sm font-bold '>Enterprise Plan</p>


              </div>

            </div>

            <div className='flex flex-col gap-2'>
              <div className='rounded-lg items-center flex flex-row justify-between p-3 bg-gray-50/20 w-full '>
                <span className='font-bold text-white'>Members</span>
                <span className='font-bold text-white'>42</span>

              </div>
              <div className='rounded-lg items-center flex flex-row justify-between p-3 bg-gray-50/20 w-full '>
                <span className='font-bold text-white'>Your Role</span>
                <span className='font-bold text-white'>Admin</span>

              </div>

            </div>

            <div className='rounded-lg text-center font-bold p-3 text-primary bg-white w-full '>
              Manage Workspace

            </div>

          </div>

          {/* Quick Actions Card */}


          <div className='flex flex-col gap-6 rounded-lg border p-6'>
            <span className='font-bold text-gray-700'>Quick Actions</span>

            <div className='gap-6 flex flex-col justify-center font-semibold'>

              <div className='flex flex-row gap-4 items-center text-gray-600'><LuLockKeyhole size={34} className='p-2 rounded-full bg-secondary/20 text-primary' /> Update Passowrd</div>

              <div className='flex flex-row gap-4 items-center text-gray-600'><IoMdNotificationsOutline size={34} className='p-2 rounded-full bg-secondary/20 text-primary' /> Notification Hub</div>


              <div className='flex flex-row gap-4 items-center text-red-600'><MdLogout size={34} className='p-2 rounded-full bg-red-100 text-red-500' />Log Out of Session</div>

            </div>



          </div>

        </div>

      </div>


    </div >
  );
}

export default page;
