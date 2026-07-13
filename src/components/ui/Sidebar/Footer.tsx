'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HelpCircle,
  Settings,
  User2,
  CreditCard,
  LogOut,
  ChevronUp,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

const Footer = ({ sidebar }: { sidebar: boolean }) => {
  const pathname = usePathname();
  const router = useRouter();

  const linkClass = (href: string) =>
    `flex items-center gap-3 rounded-lg px-4 py-2 transition-colors ${pathname.startsWith(href)
      ? "border-l-4 text-secondary border-secondary bg-primary/10"
      : "text-muted-foreground hover:bg-muted"
    }`;

  return (
    <div className={`mt-auto flex flex-col border-t py-3 gap-1 ${sidebar ? "px-6" : "items-center"}`}>

      <div className="space-y-1 gap-0.5">

        <Link href="/settings" className={linkClass("/settings")}>
          {sidebar ? (<Settings size={18} />) : (
            <Tooltip>
              <TooltipTrigger>
                <Settings size={18} />
              </TooltipTrigger>
              <TooltipContent side="right">
                Settings
              </TooltipContent>
            </Tooltip>
          )}
          {sidebar && (<span>Settings</span>)}
        </Link>

        <Link href="/help" className={linkClass("/help")}>
          {sidebar ? (<HelpCircle size={18} />) : (
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle size={18} />
              </TooltipTrigger>
              <TooltipContent side="right">
                Help
              </TooltipContent>
            </Tooltip>
          )}
          {sidebar && (<span>Help</span>)}
        </Link>

      </div>

      <DropdownMenu>

        <DropdownMenuTrigger className="w-full bg-secondary/5 rounded-lg">

          <div className=" cursor-pointer flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-muted">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <User2 size={20} />
              </div>

              {sidebar && (
                <div className="text-left">
                  <p className="font-medium">Hirdesh</p>
                  <p className="text-xs text-muted-foreground">
                    Free Plan
                  </p>
                </div>
              )}

            </div>

            {sidebar && (
              <ChevronUp size={16} />
            )}

          </div>

        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">

          <DropdownMenuItem onClick={() => router.push("/profile")}>
            <User2 className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => router.push("/settings")}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>

        </DropdownMenuContent>

      </DropdownMenu>

    </div>
  );
};

export default Footer;