import { FaListUl } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsFilterLeft } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { MdFolderShared } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { Plus } from "lucide-react";



const recent = [
  { id: 1, title: "Q4 Project Plans", items: "12", size: "42 MB", icon: <FaFolder /> },
  { id: 2, title: "Team Resources", items: "8", size: "165 MB", icon: <MdFolderShared /> },
  { id: 3, title: "Drafting & Design", items: "24", size: "8.4 GB", icon: <FaFolder /> },
  { id: 4, title: "Archive 2023", items: "45", size: "1.2 GB", icon: <FaFolder /> },
]


const documents = [
  { id: 1, title: "Product Specs.md", size: "14 KB", edited: "2h ago" },
  { id: 2, title: "Design_system_v2.figma", size: "24.8 MB", edited: "5h ago" },
  { id: 3, title: "Budget_Forecast_20.csv", size: "1.2 MB", edited: "Yesterday" },
  { id: 4, title: "Investor_Deck_Final.ppt", size: "14.2 MB", edited: "2d ago" },
  { id: 5, title: "Meeting Notes - Jan", size: "8 KB", edited: "4d ago" },

]



const page = () => {
  return (
    <div className="mt-4 lg:mt-10  flex flex-col w-full gap-10 py-2 px-6 overflow-y-auto">

      {/* Personal Wrokspace */}
      <div className="flex flex-col gap-4  lg:flex-row justify-between">
        <div className="flex flex-col ">
          <span className="font-bold text-xl md:text-3xl">Personal Workspace</span>
          <p className="text-xs md:text-sm text-gray-500">14 folders, 128 documents syncronized locally.</p>

        </div>

        <div className="flex flex-row gap-4  lg:self-end">
          <div className="flex flex-row items-center gap-1 p-1 rounded bg-secondary/20">
            <button className="p-2 rounded bg-white text-primary">
              <RxDashboard size={15} className="   rounded " />
            </button>
            <button className="p-2">
              <FaListUl />
            </button>
          </div>

          <div className="p-2 gap-1 rounded-lg items-center border flex flex-row">
            <BsFilterLeft size={16} />
            <select className="text-sm" name="" id="">
              <option value="">Last Edited</option>
            </select>

          </div>
        </div>

      </div>



      {/* RECENT FOLDERS*/}
      <div className='flex flex-col gap-4 '>
        <span className='text-gray-400'>RECENT FOLDERS</span>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 overflow-x-auto">
          {recent.map((r) => (
            <Folder key={r.id} title={r.title} items={r.items} size={r.size} icon={r.icon} />
          ))}
        </div>

      </div>


      {/* RECENT FOLDERS*/}
      <div className='flex flex-col gap-4 mb-10'>
        <span className='text-gray-400'>ALL DOCUMENTS</span>
        <div className="flex flex-row gap-4 overflow-x-auto">
          {documents.map((docs) => (
            <Documents key={docs.id} title={docs.title} size={docs.size} edited={docs.edited} />
          ))}
        </div>

      </div>


      <button className="items-center justify-center absolute bottom-4 right-4 z-20 bg-primary text-white rounded-full p-4">
        <Plus />
      </button>

    </div>
  );
}

export default page;


const Folder = ({ title, items, size, icon }: { title: string, items: string, size: string, icon: React.ReactNode }) => {

  return (
    <div className="p-4 rounded-xl border flex flex-col gap-1 min-w-52 bg-white">
      <div className="flex flex-row items-center justify-between">
        <div className="p-2 rounded bg-primary/10 text-primary">{icon}</div>
        <button className="text-gray-400"><BsThreeDots size={12} /></button>
      </div>

      <span className="mt-3 font-bold truncate">{title}</span>
      <p className="text-sm text-gray-500">{items} items • {size}</p>


    </div>
  )
}


const Documents = ({ title, size, edited }: { title: string, size: string, edited: string }) => {
  return (
    <div className="p-4 rounded-xl border flex flex-col gap-3 min-w-52 bg-white">

      <div className="flex flex-col gap-2 h-30 rounded-lg p-4 bg-primary/10">
        <div className="w-30 h-1 bg-gray-300 rounded" />
        <div className="w-30 h-1 bg-gray-300 rounded" />
        <div className="w-20 h-1 bg-gray-300 rounded" />
      </div>

      <div className="flex flex-col">

        <span className="mt-3 font-bold truncate">{title}</span>
        <p className="text-sm text-gray-500">{size} • Edited {edited}</p>
      </div>

    </div>
  )
}
