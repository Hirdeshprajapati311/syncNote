"use client"
import FontScaleCard from '@/components/Cards/FontScaleCard';
import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { Keyboard } from "lucide-react";
import Image from 'next/image';

const shortcuts = [
  {
    title: "New Document",
    keys: ["⌘", "N"],
  },
  {
    title: "Search Workspace",
    keys: ["⌘", "K"],
  },
  {
    title: "Toggle Sidebar",
    keys: ["⌘", "\\"],
  },
  {
    title: "Settings",
    keys: ["⌘", ","],
  },
];

const page = () => {

  const colors = [
    "bg-blue-700",
    "bg-red-700",
    "bg-teal-700",
    "bg-yellow-800",
    "bg-orange-700",
    "bg-green-700",
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className='mt-4 lg:mt-6  flex flex-col  w-full gap-6 py-2 px-4 sm:px-6 md:px-28  overflow-y-auto h-screen'>

      <div className='flex flex-col '>
        <span className='text-2xl font-bold font-inter'>Appearance Settings</span>
        <p className='text-sm text-gray-500'>Customize how SyncNote looks and feels across your devices. Changes are synced instantly.</p>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Choose Themes */}
        <div className=' col-span-1 md:col-span-2 bg-white flex flex-col rounded-2xl gap-4  border p-8'>
          <span className='font-bold text-lg md:text-2xl text-gray-700'>Theme</span>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {/* White theme card */}
            <div className='flex flex-col justify-center  gap-2'>
              <div className='rounded-xl grid grid-cols-3 justify-center items-center p-1 border h-20 bg-gray-200  gap-2'>
                <div className='col-span-1 rounded-lg bg-gray-300 h-[90%]'></div>
                <div className='col-span-2 rounded-lg bg-gray-300 h-[90%]'></div>

              </div>
              <span className='flex flex-row items-center w-full text-sm font-semibold justify-center text-gray-700'>Light</span>
            </div>


            {/* Dark theme card */}


            <div className='flex flex-col justify-center  gap-2'>
              <div className='rounded-xl grid grid-cols-3 justify-center items-center p-1 border h-20 bg-black  gap-2'>
                <div className='col-span-1 rounded-lg bg-gray-700 h-[90%]'></div>
                <div className='col-span-2 rounded-lg bg-gray-700 h-[90%]'></div>

              </div>
              <span className='flex flex-row items-center w-full text-sm font-semibold justify-center text-gray-700'>Dark</span>
            </div>


            {/* System default */}

            <div className='flex flex-col justify-center  gap-2'>
              <div className='rounded-xl grid grid-cols-2 border h-20   '>
                <div className='col-span-1 rounded-l-xl bg-black '></div>
                <div className='col-span-1 rounded-r-xl bg-gray-200 '></div>

              </div>
              <span className='flex flex-row items-center text-sm font-semibold w-full justify-center text-gray-700'>System Default</span>
            </div>

          </div>



        </div>

        {/* Choose Colors */}
        <div className='col-span-1 bg-white flex flex-col rounded-2xl gap-4  border p-8'>
          <span className='font-bold text-lg md:text-2xl text-gray-700'>Accent Colors</span>

          <div className="grid grid-cols-3 gap-4">
            {colors.map((color) => {
              const isActive = selectedColor === color;

              return (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`
          ${color}
          h-14 w-14 rounded-full flex items-center justify-center
          transition-all duration-200
          ${isActive
                      ? "ring-4 ring-blue-600 ring-offset-2"
                      : "hover:ring-2 hover:ring-gray-300"
                    }
        `}
                >
                  {isActive && <Check className="h-5 w-5 text-white" />}
                </button>
              );
            })}
          </div>

          <p className='text-sm italic text-gray-500'>Applied to buttons, links and indicators.</p>

        </div>

      </div>


      <div className='grid grid-cols-1  md:grid-cols-3 gap-6'>

        {/* Font Scale */}
        <FontScaleCard />

        {/* Keyboard Shortcuts */}
        <div className="col-span-1 md:col-span-2 rounded-2xl border bg-white p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-base font-bold text-gray-800 md:text-2xl">
              Keyboard Shortcuts
            </h2>

            <button className="rounded-full border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50">
              Edit shortcuts
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {shortcuts.map((shortcut) => (
              <div
                key={shortcut.title}
                className="flex items-center justify-between border-b border-gray-100 pb-3"
              >
                <span className="text-gray-700">{shortcut.title}</span>

                <div className="flex items-center gap-2">
                  {shortcut.keys.map((key) => (
                    <kbd
                      key={key}
                      className="flex h-8 min-w-8 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-2 text-sm font-medium text-gray-600 shadow-sm"
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>


      <div className="relative w-fullrounded-4xl">
        <Image
          src="/desksyncnote.png"
          alt="appearance"
          width={800}
          height={500}
          className="w-full h-auto rounded-4xl object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/20 rounded-b-4xl to-transparent" />

        <div className='flex flex-col gap-1 absolute bottom-8 left-8'>
          <span className='text-white/70'>Your Creative Flow</span>
          <span className='text-white text-2xl'>SyncNote adapts to your environment</span>

        </div>
      </div>



      <div className='h-0.5 borter-t border w-full bg-blue-300 mt-4' />

      <div className='flex flex-row my-8 items-center gap-4 justify-center md:justify-end'>

        <button className='font-semibold text-sm text-gray-500 rounded-lg px-6 py-2'>Reset to Defaults</button>

        {/* seperator */}



        <button className='font-semibold shadow text-white text-sm bg-blue-700 rounded-lg px-6 py-2'>Save Changes</button>


      </div>




    </div >
  );
}

export default page;
