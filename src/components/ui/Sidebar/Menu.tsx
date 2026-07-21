'use client'
import { Inbox, Search, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import { IoDocumentText } from "react-icons/io5";


const sidebarData = [
  { id: 1, name: "Inbox", icon: <Inbox />, path: "/" },
  { id: 2, name: "Search", icon: <Search />, path: "/search" },
  { id: 3, name: "My Documents", icon: <IoDocumentText size={24} />, path: "/documents" },
  { id: 4, name: "Favorites", icon: <Star />, path: "/favorites" }
]

// Search My Docs Fav
const Menu = ({ sidebar, setSidebar }: { sidebar: boolean, setSidebar: React.Dispatch<React.SetStateAction<boolean>> }) => {


  const pathname = usePathname()

  return (
    <div className={`flex flex-1 overflow-auto  flex-col gap-0.5 ${sidebar ? "px-6" : "px-2"}`}>

      {sidebarData.map((data) => (
        <MenuList
          sidebar={sidebar}
          setSidebar={setSidebar}
          key={data.id}
          icon={data.icon}
          name={data.name}
          path={data.path}
          pathname={pathname} />
      )
      )}
    </div>
  );
}

export default Menu;

const MenuList = ({ icon, name, path, pathname, sidebar, setSidebar }: { icon: React.ReactNode, name: string, path: string, pathname: string, sidebar: boolean, setSidebar: React.Dispatch<React.SetStateAction<boolean>> }) => {


  const isActive =
    path === "/"
      ? pathname === "/"
      : pathname.startsWith(path);

  const handleClick = () => {
    if (path === "/editor") {
      setSidebar(false)
    }
  }

  return (
    <Link href={path} className={`flex items-center flex-row gap-4 py-2 hover:bg-secondary/10 rounded-lg pl-4 ${isActive ? "border-l-4 text-secondary border-secondary bg-primary/10" : "text-gray-600 border-l-4 border-transparent "}`}>
      {sidebar ? icon : (
        <>
          <Tooltip>
            <TooltipTrigger>
              {icon}
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </>
      )}

      {sidebar && (<span>{name}</span>)}
    </Link>
  )
}
