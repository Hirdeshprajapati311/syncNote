"use client"
import Footer from "../ui/Sidebar/Footer";
import Header from "../ui/Sidebar/Header";
import Menu from "../ui/Sidebar/Menu";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const AppSidebar = () => {

  const [sidebar, setSidebar] = useState(true)

  return (
    <aside className={` relative h-screen flex flex-col bg-primary/3 border-r ${sidebar ? "w-72" : "w-16"}`}>
      <Header sidebar={sidebar} />
      <Menu sidebar={sidebar} setSidebar={setSidebar} />
      <div className={`mt-auto cursor-pointer items-center justify-center  my-4 rounded-xl bg-secondary text-white font-lexend font-semibold py-3 gap-2 flex flex-row ${sidebar ? "mx-6" : "mx-2"}`}>
        {sidebar ? (<Plus />) : (<Tooltip>
          <TooltipTrigger>
            <Plus />
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>New Document</p>
          </TooltipContent>
        </Tooltip>)}
        {sidebar && (<span>New Document</span>)} </div>
      <Footer sidebar={sidebar} />
    </aside>
  );
}

export default AppSidebar;
