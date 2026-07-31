import React from 'react';

const page = () => {
  return (
    <div className='mt-4 lg:mt-10  flex flex-col w-full gap-10 py-2 px-36 overflow-y-auto h-screen'>

      <div className='flex flex-col '>
        <span className='text-2xl font-bold font-inter'>Profile Settings</span>
        <p className='text-sm text-gray-500'>Manage your personal identity and workspace preferences across the platform.</p>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-2'>
          <div>

          </div>

          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div>
                <label htmlFor="">Full Name</label>

              </div>

            </div>
          </div>

        </div>

        <div className='flex flex-row gap-2'>

        </div>

      </div>


    </div>
  );
}

export default page;
