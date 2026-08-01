import { Lock, ShieldCheck } from 'lucide-react';
import React from 'react';

import { MdQrCode2 } from "react-icons/md";
import { MdDevices } from "react-icons/md";

import { Laptop, Smartphone, Monitor } from "lucide-react";

export const signedInDevices = [
  {
    id: 1,
    device: "MacBook Pro 16\"",
    icon: Laptop,
    browser: "Chrome",
    location: "San Francisco, CA",
    ip: "192.168.1.45",
    currentSession: true,
    status: "Active now",
  },
  {
    id: 2,
    device: "iPhone 15 Pro",
    icon: Smartphone,
    browser: "SyncNote iOS App",
    location: "London, UK",
    ip: "104.28.12.9",
    currentSession: false,
    status: "Last active: 2h ago",
  },
  {
    id: 3,
    device: "Windows Workstation",
    icon: Monitor,
    browser: "Edge",
    location: "Berlin, DE",
    ip: "82.165.44.120",
    currentSession: false,
    status: "Last active: Dec 12, 2023",
  },
];


const page = () => {
  return (
    <div className='mt-4 lg:mt-6  flex flex-col  w-full gap-6 py-2 px-4 sm:px-6 md:px-28  overflow-y-auto h-screen'>

      <div className='flex flex-col '>
        <span className='text-2xl font-bold font-inter'>Security Settings</span>
        <p className='text-sm text-gray-500'>Manage your account security, two-factor authentication, and monitor active sessions to
          keep your workspace safe.</p>
      </div>




      {/* Security */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>

        {/* Change Password */}
        <div className='col-span-1  md:col-span-3 p-6 bg-white rounded-2xl border'>
          <div className='flex-col flex gap-4 w-full'>


            <div className='flex flex-row items-center gap-4'>

              <Lock size={30} className='p-2 rounded bg-primary/20 text-primary' />

              <p className='text-gray-600'>Change Password</p>
            </div>

            <div className='flex flex-col  mt-2 gap-1'>
              <label className='text-gray-400' htmlFor="">Current Password</label>

              <span className='border rounded-lg bg-primary/10 tracking-widest text-primary p-3 '>•••••••••</span>


            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4'>

              <div className='flex flex-col col-span-1 gap-1 '>
                <label className='text-gray-400' htmlFor="">New Password</label>

                <span className='border rounded-lg bg-primary/10 tracking-widest text-primary p-3 '>•••••••••</span>


              </div>


              <div className='flex flex-col col-span-1  gap-1'>
                <label className='text-gray-400' htmlFor="">Confirm New Password</label>

                <span className='border rounded-lg bg-primary/10 tracking-widest text-primary p-3 '>•••••••••</span>


              </div>

            </div>


            <div className='flex flex-row items-center justify-end'>
              <button className='px-4 p-2 rounded-lg bg-blue-700 text-white'>Update Password</button>

            </div>

          </div>




        </div>


        {/* 2FA Setup */}
        <div className='col-span-1 flex-col md:col-span-2 p-6 h-fit gap-10 flex  bg-white rounded-2xl border'>


          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-2'>
              <ShieldCheck size={30} className='p-2 bg-orange-100 rounded-lg text-orange-700' />

              <span className='text-gray-600'>2FA Setup</span>

            </div>


            <span className='tracking-8 text-sm text-red-700 p-1 px-2 rounded-lg bg-red-100'>DISABLED</span>
          </div>

          <p className='text-gray-500 text-sm'>
            Add an extra layer of security to your
            account by requiring more than just a
            password to log in.
          </p>


          <button className='border-2 border-blue-600 rounded-lg text-blue-600 bg-white flex flex-row items-center justify-center gap-2 font-semibold py-3 cursor-pointer'>
            <MdQrCode2 size={30} />
            <span>Enable 2FA</span>
          </button>

        </div>
      </div>


      {/* Session  */}
      <div className='bg-white rounded-2xl flex flex-col gap-2 p-5 border'>

        <div className='flex flex-row items-center justify-between border-b pb-2'>
          <div className='flex flex-row gap-3 items-center'>
            <MdDevices size={30} className='p-2 bg-primary/20 text-primary rounded-lg' />

            <div className='flex flex-col'>
              <span className='text-base md:text-xl'>Signed-in Devices</span>
              <p className='text-xs md:text-sm'>Review and manage your active sessions across platforms.</p>

            </div>

          </div>

          <button className='text-red-500 p-3 text-sm md:text-base rounded-lg'>Revoke All</button>
        </div>

        {
          signedInDevices.map((device) => {
            const Icon = device.icon;

            return (
              <div className='flex flex-col md:flex-row items-start md:items-center bg-white border-b py-2 justify-between' key={device.id}>
                <div className='flex flex-row gap-2 items-center'>
                  <Icon size={40} className='p-2 rounded-lg bg-blue-100' />

                  <div>
                    <div className="flex items-center gap-2">
                      <span className='text-sm md:text-base font-bold'>{device.device}</span>

                      {device.currentSession && (
                        <span className=' text-[6px] md:text-xs bg-blue-700 rounded-xl text-white p-1 md:px-3'>CURRENT SESSION</span>
                      )}
                    </div>

                    <p className='text-xs md:text-sm'>
                      {device.browser} • {device.location} • {device.ip}
                    </p>
                  </div>

                </div>
                <span className='text-xs md:text-base self-end'>{device.status}</span>
              </div>
            );
          })
        }
      </div>


      {/* Audit */}
      <div className='bg-blue-600 p-6 grid grid-cols-1 gap-4 md:grid-cols-2 mb-10 rounded-2xl'>
        <div className='col-span-1 flex flex-col gap-2'>
          <span className='text-white'>Advanced Security Audit</span>
          <p className='text-white text-sm mr-8 font-light'>Get a full report of your account activity, access logs, and
            potential security vulnerabilities found in your workspace
            settings.</p>

        </div>

        <div className='col-span-1 items-center grid grid-cols-2 gap-4'>
          <button className='rounded-xl text-sm md:text-base bg-gray-50/20 text-white px-2 md:px-8 py-6 md:py-6 text-center font-bold'>Download Audit Log</button>

          <button className='rounded-xl text-sm md:text-base bg-white text-center px-2 md:px-10 py-3 md:py-6 text-blue-600 font-bold'>Run Security Scan</button>


        </div>

      </div>






    </div >
  );
}

export default page;
