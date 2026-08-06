"use client"
import Image from 'next/image';
import React from 'react';
import { FaSync } from "react-icons/fa";
import { motion } from "framer-motion"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from 'react-icons/md';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const page = () => {



  return (
    <div className='items-center flex h-screen flex-row justify-center p-10'>

      <div className='flex flex-row rounded-2xl shadow-2xl border '>

        {/* Left blue */}
        <div className=' hidden relative lg:flex bg-secondary  lg:w-1/2 p-16 flex-col justify-between rounded-l-lg gap-6'>
          {/*Fog Top Left */}
          <div className='absolute top-0 -translate-x-1/2 -translate-y-1/2   z-10 left-0 rounded-full p-32 bg-white/50 blur-3xl' />
          {/* Fog Bottom right */}
          <div className='absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 rounded-full p-32 z-10 bg-white/50 blur-3xl' />
          <div className='flex flex-row items-center z-30 gap-2'>
            <Image src="/favicon.png" width={40} height={40} alt='sync logo' className='rounded-md object-cover' />
            <span className='text-lg text-white'>SyncNote</span>
          </div>

          <div className='flex flex-col z-30 w-[18rem] text-gray-300 text-sm  gap-2'>
            <span>Your thoughts,
              synced across every dimension.</span>
            <span>Capture inspiration instantly and access it
              anywhere. Minimalist focus for professional
              masters.</span>
          </div>

          {/* Decoration */}
          <div className='relative h-60 flex items-center justify-center'>
            <Circle css='h-[40px]! w-[40px]! absolute left-16 top-0' />

            <Line css='h-32! absolute top-0 left-34 rotate-135 ' />

            <Square css='h-16! w-16! rotate-45 '> <FaSync className='text-white rotate-45 scale-y-[-1]' size={18} /> </Square>
            <Square css='h-10! w-10! rounded-lg! right-10 bottom-20 border-none! absolute rotate-30' />

            <motion.div className='absolute right-18 bottom-0' animate={{ y: [-4, 4, -4] }} transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}>
              <Circle css='h-[50px]! w-[50px]! ' />
            </motion.div>

            <Line css='h-40! absolute bottom-0 right-34 translate-y-4 rotate-135 ' />


            <motion.div className='absolute left-12 bottom-1' animate={{ y: [-2, 2, -2] }} transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}>
              <Circle css='h-[58px]! w-[58px]! 0' />
            </motion.div>

            <Line css='h-32! absolute bottom-6 left-34 rotate-60 ' />

          </div>

          <span className='text-gray-300 text-sm'>© 2024 SyncNote Workspace. All rights reserved.</span>
        </div>

        {/* Right Login */}
        <div className='flex flex-col bg-white p-6 sm:p-8 md:p-10 lg:p-16 py-20 w-full md:w-4/3 lg:w-1/2 rounded-l-2xl border-l md:border-l-0 md:rounded-l-none rounded-r-lg gap-6'>

          <div className='flex flex-row items-center justify-center lg:hidden z-30 gap-2 '>
            <Image src="/favicon.png" width={40} height={40} alt='sync logo' className='rounded-md object-cover' />
            <span className='text-lg text-secondary'>SyncNote</span>
          </div>

          <div className='flex flex-col'>
            <span className='text-gray-600'>Welcome back</span>
            <p className='text-gray-500 text-sm'>Enter your credentials to access your workspace.</p>
          </div>



          {/* Thirdparty login */}

          <div className='grid grid-cols-2 gap-4'>
            <button className='flex flex-row gap-2 items-center justify-center rounded-lg border py-1 shadow'>
              <FcGoogle size={24} />
              <span>Google</span>
            </button>

            <button className='flex flex-row gap-2 items-center justify-center rounded-lg border py-1 shadow'>
              <FaGithub size={24} />
              <span>GitHub</span>
            </button>
          </div>



          {/* Seperator */}
          <div className='w-full -mt-2 gap-2 flex flex-row items-center justify-center'>
            <div className='h-0.5 w-full bg-gray-200' />
            <span className='text-gray-400 flex flex-row items-center whitespace-nowrap justify-center text-sm'>or continue with the email</span>
            <div className='h-0.5 w-full bg-gray-200' />

          </div>



          <form className='flex flex-col gap-4' action="">
            {/* Email Input */}
            <div className='gap-1 flex text-sm flex-col'>
              <label className='text-gray-600' htmlFor="">Email Address</label>
              <div className='p-3 flex flex-row bg-primary/20 border rounded-lg gap-2 items-center hover:ring-1 w-full ring-primary/10 transition-all duration-150'><MdOutlineMail className='text-primary' size={24} />
                <input type="email" className='border-0 w-full outline-0 ring-0' placeholder='name@company.com' autoComplete='off' />
              </div>
            </div>

            {/* Password Inpu */}
            <div className='gap-1 flex text-sm flex-col'>
              <div className='flex flex-row items-center justify-between'>
                <label className='text-gray-600' htmlFor="">Password</label>

                <button className='text-primary text-xs cursor-pointer'>Forgot password</button>
              </div>
              <div className='p-3 w-full flex flex-row bg-primary/20 border rounded-lg gap-2 items-center hover:ring-1 ring-primary/10 transition-all duration-150'><MdOutlineMail className='text-primary' size={24} />
                <input autoComplete='new-password' type="password" className='border-0 outline-0  w-full ring-0' />
              </div>
            </div>

            {/* Remember me */}
            <div className='flex flex-row items-center gap-2 mt-2' >
              <input type="checkbox" />
              <span className='text-gray-600 text-xs'>Remember me for 30 days</span>
            </div>


            {/* signIn */}

            <button className='bg-secondary rounded-lg text-white flex flex-row justify-center py-2 text-sm gap-2 items-center '>Sign In <ArrowRight size={20} /></button>
          </form>


          <div className='items-center flex flex-row justify-center w-full text-sm'>
            <span className='text-gray-500 '>Don't have an account?</span>
            <Link className='font-bold text-sm text-primary' href={"/register"}>&nbsp;Sign up for free</Link>

          </div>
        </div>

      </div>

    </div >
  );
}

export default page;



const Square = ({ css, children }: { css?: string, children?: React.ReactNode }) => {
  return (
    <motion.div className={`${css} bg-gray-50/10 border-gray-50/50 border flex items-center justify-center rounded-2xl h-20 w-20`} >{children}</motion.div>
  )
}


const Circle = ({ css }: { css?: string }) => {
  return (
    <motion.div className={`${css} bg-gray-50/10 border border-gray-50/20 rounded-full h-20 w-20`} />
  )
}

const Line = ({ css }: { css?: string }) => {
  return (
    <motion.div className={`${css} bg-gray-50/20 w-[1.5px] h-16`} />
  )
}