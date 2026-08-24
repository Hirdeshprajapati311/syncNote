import Link from 'next/link';
import React from 'react';
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";


const settingLinks = [
  { id: 1, name: "Profile", path: "/settings/profile", icon: <CgProfile /> },
  { id: 2, name: "Notification", path: "/settings/notifications", icon: <MdNotificationsActive /> },
  { id: 3, name: "Appearance", path: "/settings/appearance", icon: <IoColorPalette /> },
  { id: 4, name: "Security", path: "/settings/security", icon: <MdOutlineSecurity /> },
  { id: 5, name: "Billing", path: "/settings/billing", icon: <FaFileInvoiceDollar /> }
]

const page = () => {
  return (
    <div className='p-6 h-screen flex flex-col gap-2 w-full'>
      {settingLinks.map((links) => (
        <div className='p-2 px-4 flex flex-row gap-2 items-center text-primary rounded-lg border bg-primary/10' key={links.id}>
          <span>{links.icon}</span>
          <Link href={links.path}>{links.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default page;
