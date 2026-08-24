"use client"
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCloudCheck } from "react-icons/bs";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {

  const isMobile = useIsMobile()
  const router = useRouter()



  return (
    <div className="py-4 z-10 bg-white sm:px-2 md:px-0 flex flex-row justify-between space-x-4 sticky top-0 px-8 ">

      {/* Search */}
      <div className="relative  ml-8   min-w-30 sm:w-lg md:w-xl   lg:w-2xl max-w-3xl bg-secondary/10 gap-2 flex flex-row rounded-2xl">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <Input
          placeholder={isMobile ? "Search" : "Search your workspace..."}
          className="h-11 ring-0 outline-none rounded-2xl pl-10 shadow-none  "
        />
      </div>



      <div className=" flex flex-row  pr-2 md:pr-10">
        <button className="rounded-full cursor-pointer p-2 hover:bg-primary/10" onClick={() => router.push("/settings/notifications")} ><IoMdNotificationsOutline size={24} /></button>
        <button className="rounded p-2 cursor-pointer hover:bg-primary/10"><BsCloudCheck size={24} /></button>
        <button className="rounded cursor-pointer p-2 hover:bg-primary/10"><MdOutlinePeopleOutline size={24} /></button>
      </div>
    </div>
  );
}