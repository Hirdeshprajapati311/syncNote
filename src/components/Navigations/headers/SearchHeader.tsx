"use client"
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCloudCheck } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlinePeopleOutline } from 'react-icons/md';



const SearchHeader = () => {

  const isMobile = useIsMobile()
  const pathname = usePathname()

  return (
    <div className='py-4 z-10 px-8 md:px-0 flex flex-row justify-between space-x-4 sticky top-0 bg-white lg:px-8'>

      <div className='flex flex-row pl-2 md:pl-0 gap-0.5'>
        <Link className={`font-lexend ${pathname === "/" ? "text-primary font-semibold" : "text-gray-600"}`} href={"/"}>SyncNote</Link>
        <ChevronRight className='text-gray-500 items-center flex translate-y-1' size={16} />
        <Link
          className={`font-lexend ${pathname === "/search" ? "font-semibold text-primary" : "text-gray-600"}`}
          href={"/search"}>Search</Link>

      </div>


      <div className=" flex flex-row gap-3 pr-0 md:pr-4">
        {!isMobile && <button ><IoMdNotificationsOutline size={24} /></button>}
        {!isMobile && <button><BsCloudCheck size={24} /></button>}
        <button><MdOutlinePeopleOutline size={24} /></button>
      </div>
    </div>
  );
}

export default SearchHeader;
