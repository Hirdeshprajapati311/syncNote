"use client";

import { useState } from "react";
import { MenuIcon, Plus, X } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";

import Header from "../ui/Sidebar/Header";
import Menu from "../ui/Sidebar/Menu";
import Footer from "../ui/Sidebar/Footer";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";

const AppSidebar = () => {
  const isMobile = useIsMobile();

  const [sidebar, setSidebar] = useState(true);

  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = (
    <>
      {isMobile && (
        <div className="flex justify-end p-2">
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-full p-2 hover:bg-muted"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <Header sidebar={sidebar} />

      <Menu
        sidebar={sidebar}
        setSidebar={setSidebar}
      />

      <div
        className={`mt-auto  mb-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary py-3 font-semibold text-white ${sidebar ? "mx-4" : "px-2 mx-1"
          }`}
      >
        {sidebar ? (
          <>
            <Plus />
            <span>New Document</span>
          </>
        ) : (
          <Tooltip>
            <TooltipTrigger>
              <Plus />
            </TooltipTrigger>

            <TooltipContent side="right">
              New Document
            </TooltipContent>
          </Tooltip>
        )}
      </div>

      <Footer sidebar={sidebar} />
    </>
  );

  // ---------------- Desktop ----------------

  if (!isMobile) {
    return (
      <aside
        className={`h-dvh border-r bg-primary/3 transition-all duration-300 ${sidebar ? "w-72" : "w-16"
          } flex flex-col`}
      >
        {SidebarContent}
      </aside>
    );
  }

  // ---------------- Mobile ----------------

  return (
    <>
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed left-4 top-4 z-1000 rounded-md px-2 pt-2 hover:bg-accent"
        >
          <MenuIcon />
        </button>
      )}

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 "
            onClick={() => setMobileOpen(false)}
          />

          <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r bg-primary/3 shadow-xl">
            {SidebarContent}
          </aside>
        </>
      )}
    </>
  );
};

export default AppSidebar;