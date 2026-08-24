import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = ({ sidebar }: { sidebar: boolean }) => {


  const isMobile = useIsMobile()


  return (
    <div className={`${isMobile ? "px-8 py-4" : sidebar ? "p-8" : "px-2 py-8"}`}>

      <div className={`bg-secondary/10 flex flex-row  rounded-lg  items-center justify-center gap-2 ${sidebar ?
        "py-3 px-1" : "py-1 px-1"}`}>
        <div className='flex gap-2 flex-row items-center justify-center'>
          {sidebar ? (<Image src="/favicon.png" width={40} height={40} className='rounded-md object-cover' alt='logo' />) : (
            <Image src="/syncnote_brand_logo.png" width={40} height={40} alt='sync logo' className='rounded-md object-cover' />
          )}
          {sidebar && (<div className='flex flex-col justify-center'>
            <span className='text-primary font-semibold font-lexend text'>SyncNote</span>
            <p className='text-xs text-gray-500'>Personal Workspace</p>
          </div>)}
        </div>



        {sidebar && (
          <div className='flex flex-col items-center justify-center'>
            <button><ChevronUp size={15} /></button>
            <button><ChevronDown size={15} /></button>
          </div>
        )}


      </div >
    </div >
  );
}

export default Header;
