"use client"
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BsCloudCheck } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlinePeopleOutline } from 'react-icons/md';

import { useParams } from "next/navigation";
import { recent } from '@/app/(dashboard)/documents/page';





const DocumentsHeader = () => {

  const isMobile = useIsMobile()
  const pathname = usePathname()
  const params = useParams();
  const router = useRouter();

  const isEditor = pathname.startsWith("/documents/")

  const project = recent.find(
    (d) => d.id.toString() === params.id
  );

  return (
    <div className='py-5 md:py-6 z-10 pl-12 pr-2  lg:px-8 sm:px-2 md:px-6  flex flex-row justify-between space-x-4 sticky top-0 bg-white'>

      <div className='flex flex-row pl-2 md:pl-0 gap-0.5'>
        {!isEditor && (
          <div className='flex flex-row items-center'>
            <Link className={`font-lexend ${pathname === "/" ? "text-primary font-semibold" : "text-gray-600"}`} href={"/"}>SyncNote</Link>
            <ChevronRight className='text-gray-500 items-center flex translate-y' size={16} />
            <Link
              className={`font-lexend ${pathname === "/documents" ? "font-semibold text-primary" : "text-gray-600"}`}
              href={"/documents"}>Documents</Link>

          </div>
        )}

        {isEditor && (
          <div className="flex items-center min-w-0">
            <button
              onClick={() => router.push("/documents")}
              className="p-2 rounded-full hover:bg-gray-200"
            >
              <FaArrowLeft />
            </button>

            <Link
              href="/"
              className="text-xs hidden sm:block md:text-sm text-gray-600 whitespace-nowrap"
            >
              Workspace
            </Link>

            <ChevronRight size={16} className="mx-1 hidden sm:block flex-shrink-0 text-gray-500" />

            <Link
              href="/documents"
              className={`text-xs md:text-sm whitespace-nowrap hidden xs:block md:block ${pathname === "/documents"
                ? "font-semibold text-primary"
                : "text-gray-600"
                }`}
            >
              Project
            </Link>

            <ChevronRight size={16} className="mx-1 hidden md:block flex-shrink-0 text-gray-500" />

            <span className="min-w-0 flex-1 truncate font-bold text-xs md:text-sm">
              {project?.title}
            </span>
          </div>
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

export default DocumentsHeader;
