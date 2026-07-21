"use client"
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCloudCheck } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlinePeopleOutline } from 'react-icons/md';



const SettingsHeader = () => {

  const isMobile = useIsMobile()
  const pathname = usePathname()

  return (
    <div className='py-6  z-10 px-12 md:px-0 flex flex-row justify-between space-x-4 sticky top-0 bg-white lg:px-8'>

      <div className='flex flex-row pl-2 md:pl-0 gap-0.5'>

        <Link
          className={`font-lexend ${pathname === "/settings" ? "font-semibold text-primary" : "text-gray-600"}`}
          href={"/settings"}>Settings</Link>
        {pathname === "/settings/profile" && (
          <>
            <ChevronRight className='text-gray-500 items-center flex translate-y-1' size={16} />
            <Link
              className={`font-lexend ${pathname === "/settings/profile" ? "font-semibold text-primary" : "text-gray-600"}`}
              href={"/settings/profile"}>Profile</Link>
          </>
        )}
        {pathname === "/settings/notifications" && (
          <>
            <ChevronRight className='text-gray-500 items-center flex translate-y-1' size={16} />
            <Link
              className={`font-lexend ${pathname === "/settings/notifications" ? "font-semibold text-primary" : "text-gray-600"}`}
              href={"/settings/appearance"}>Notifications</Link>
          </>

        )}
        {pathname === "/settings/appearance" && (
          <>
            <ChevronRight className='text-gray-500 items-center flex translate-y-1' size={16} />
            <Link
              className={`font-lexend ${pathname === "/settings/appearance" ? "font-semibold text-primary" : "text-gray-600"}`}
              href={"/settings/appearance"}>Appearance</Link>
          </>

        )}

        {pathname === "/settings/security" && (
          <>
            <ChevronRight className='text-gray-500 items-center flex translate-y-1' size={16} />
            <Link
              className={`font-lexend ${pathname === "/settings/security" ? "font-semibold text-primary" : "text-gray-600"}`}
              href={"/settings/security"}>Security</Link>
          </>

        )}
        {pathname === "/settings/billing" && (
          <>
            <ChevronRight className='text-gray-500 items-center flex translate-y-1' size={16} />
            <Link
              className={`font-lexend ${pathname === "/settings/billing" ? "font-semibold text-primary" : "text-gray-600"}`}
              href={"/settings/billing"}>billing</Link>
          </>

        )}




      </div>


      <div className=" flex flex-row gap-3 pr-0 md:pr-4">
        {!isMobile && <button ><IoMdNotificationsOutline size={24} /></button>}
        {!isMobile && <button><BsCloudCheck size={24} /></button>}
        <button><MdOutlinePeopleOutline size={24} /></button>
      </div>
    </div>
  );
}

export default SettingsHeader;
