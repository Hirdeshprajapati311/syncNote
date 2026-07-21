import DashboardHeader from "@/components/Navigations/headers/DashboardHeader";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BiPlusCircle } from "react-icons/bi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { RiFileUploadLine } from "react-icons/ri";
import Image from "next/image";
import { GrDocumentText } from "react-icons/gr";
import { IoMdCode } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Lightbulb } from "lucide-react";
import { MdOutlineTerminal } from "react-icons/md";
import { MdOutlineColorLens } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaListUl } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const CardData = [
  { id: 1, color: "bg-primary text-white!", title: "New Document", text: "Start a fresh thought or draft", image: "/Container.png", icon: <BiPlusCircle size={35} className="text-white" />, textColor: "text-white" },
  { id: 2, color: "bg-success-light", title: "AI Summary", text: "Distill insights from your notes", image: "/Container1.png", icon: <HiOutlineSparkles size={35} className="text-primary" />, textColor: "text-gray-500" },
  { id: 3, color: "bg-white border", title: "Import File", text: "PDF, Markdown, or Word files.", image: "/Container2.png", icon: <RiFileUploadLine size={35} />, textColor: "text-gray-500" }
]


const recentData = [
  { id: 1, icon: <GrDocumentText size={24} />, Title: "Product Sratagey 2024", editedAt: "Edited 4 hours ago ", md: "1.3MB" },
  { id: 2, icon: <GrDocumentText size={24} />, Title: "Meeting Notes: Sync Session", editedAt: "Edited 5 hours ago ", md: "456KB" },
  { id: 3, icon: <IoMdCode size={24} />, Title: "API Documentation Drafts", editedAt: "Edited Yesterday ", md: "890KB" }
]

const sharedWithMeData = [
  { id: 1, title: "Project Aurora Roadmap", text: "shared by Mike Chen" },
  { id: 2, title: "Marketing Budget Q4", text: "Shared by Mike Chen" },
  { id: 3, title: "June Editorial Calendar", text: "Shared by Jenny Wilson" }
]

const favoriteDocs = [
  {
    id: 1,
    title: "Vision Statement",
    text: "Refining the core mission and value proposition",
    icon: <Lightbulb size={24} />,
  },
  {
    id: 2,
    title: "Developer Guidelines",
    text: "Coding standards and architectural",
    icon: <MdOutlineTerminal size={24} />,
  },
  {
    id: 3,
    title: "Brand Identity",
    text: "Colors, typography and tone of voice guides",
    icon: <MdOutlineColorLens size={24} />,
  },
  {
    id: 4,
    title: "Launch Checklist",
    text: "Final steps before the global release",
    icon: <MdOutlineRocketLaunch size={24} />,
  },

]

const page = () => {
  return (
    <div className=" bg-primary/3 ">
      <DashboardHeader />


      <div className="w-full  px-2  sm:px-2 md:px-4 lg:px-8 py-4 overflow-y-auto flex flex-col gap-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 ">

          <div className="flex flex-col font-lexend">
            <span className="text-2xl md:text-5xl font-bold">Good morning, Hirdesh</span>
            <p className="text-gray-500 text-sm md:text-lg ">Here is what's happening with your notes today</p>
          </div>

          {/* Sync status */}

          <div className="flex self-end flex-row p-4 rounded-lg shadow-lg border-l-4 gap-2 items-center border-green-500">
            <IoMdCheckmarkCircle size={24} className="text-green-500 " />

            <div className="flex flex-col">
              <h1 className="font-lexend font-semibold">Sync complete</h1>
              <p className="text-gray-500 text-xs">All documents are up to date</p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CardData.map((data) => (
            <Card key={data.id} color={data.color} title={data.title} text={data.text} image={data.image} icon={data.icon} textColor={data.textColor} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">

          {/* Recent Dcouments */}
          <RecentDocs />

          {/* Shared With Me */}
          <ShardWithMe />
        </div>


        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center px-4">
            <span className="text-lg md:text-2xl text-gray-600">Favorite Documents</span>

            <div className="flex flex-row items-center gap-1">
              <button className="p-1 rounded bg-secondary/20">
                <RxDashboard size={15} className="" />
              </button>
              <FaListUl />
            </div>
          </div>


          <div className="flex flex-col  md:grid md:grid-cols-2  lg:grid-cols-4   gap- md:gap-4  ">
            {favoriteDocs.map((fav,) => (
              <FavoriteCards key={fav.id} title={fav.title} text={fav.text} icon={fav.icon} />
            ))}

          </div>

        </div>



      </div>
    </div>
  );
}

export default page;

const FavoriteCards = ({ title, text, icon, }: { title: string, text: string, icon: React.ReactNode }) => {
  return (
    <div className="rounded-4xl mb-12  bg-white col-span-1 border gap-4 p-6 flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="bg-primary/20 text-primary rounded-lg p-2">{icon}</div>
        <div className=" text-primary">
          <IoStar size={24} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-base md:text-xl">{title}</span>
        <p className=" text-xs md:text-base ">{text}</p>
      </div>

    </div>
  )
}



const RecentDocs = () => {
  return (
    <div className="flex flex-col col-span-1 md:col-span-3 rounded-4xl gap-1  md:gap-4   min-w-36">
      <div className="flex flex-row justify-between px-1 items-center">
        <h1 className=" text-lg md:text-2xl text-gray-800">Recent Documents</h1>
        <button className="font-semibold font-lexend text-secondary cursor-pointer text-sm md:text-md">View all</button>
      </div>
      <div className="flex flex-col rounded-3xl border">
        <div className="rounded-2xl items-start bg-white border">
          {recentData.map((recent, index) => (
            <div key={recent.id} className={`flex flex-row items-start justify-between p-6 cursor-pointer hover:bg-primary/10    ${index !== recentData.length - 1 ? 'border-b' : ''}`}>
              <div className="flex flex-row  gap-4">
                <div className="p-4 bg-secondary/20 text-secondary rounded-lg">{recent.icon}</div>

                <div className="flex flex-col">
                  <span className="font-bold text-sm md:text-lg">{recent.Title}</span>
                  <p className="text-gray-500 font-extralight text-xs md:text-base">{recent.editedAt}•&nbsp;{recent.md}</p>
                </div>
              </div>

              <button className="p-1 rounded-full hover:bg-primary/10 cursor-pointer"><CiMenuKebab size={24} /></button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}


const ShardWithMe = () => {
  return (
    <div className="flex flex-col gap-4 col-span-1 md:col-span-2  ">
      <div className="flex flex-row justify-between px-1 items-center">
        <h1 className="text-lg md:text-2xl text-gray-800">Shared With Me</h1>
        <button className="font-semibold font-lexend text-secondary cursor-pointer text-sm md:text-md">Manage</button>
      </div>
      <div className="rounded-4xl bg-white flex flex-col p-6 gap-4 border">
        {sharedWithMeData.map((share) => (
          <div key={share.id} className="gap-4 flex p-1 rounded-xl hover:bg-primary/10 flex-row items-center ">
            <CgProfile size={30} />

            <div>
              <span className="font-bold text-sm md:text-base ">{share.title}</span>
              <p className="font-extralight text-xs md:text-sm">{share.text}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}




const Card = ({ color, text, title, image, icon, textColor }: { color: string, text: string, title: string, image: string, icon: React.ReactNode, textColor: string }) => {
  return (
    <button className={`rounded-4xl hover:scale-105  transition-all duration-200 cursor-pointer relative min-w-44 flex flex-col justify-start px-6 py-4 md:w-64 lg:w-84 h-44 ${color}`}>
      <div className=" mt-2">{icon}</div>
      <span className="font-lexend w-full flex justify-start text-2xl">{title}</span>
      <p className={`${textColor} flex flex-row justify-start text-sm`}>{text}</p>
      <div className="w-full  flex mt-auto justify-end">
        <Image className="absolute bottom-0 right-0" src={image} alt={"button icons"} width={80} height={80} />
      </div>


    </button>
  )
}