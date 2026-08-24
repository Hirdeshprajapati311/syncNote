"use client"
import React, { useState } from 'react';
import { IoMegaphoneOutline } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdOutlineSecurity } from "react-icons/md";


const ineractions = [
  { id: 1, action: "Mentions", know: "When someone @mentions you in a document or comment.", button: ["In-App", "Email"] },
  {
    id: 2, action: "Comments", know: "Activity on threads you're following or started.", button: ["In-App", "Email"]
  },
  {
    id: 3, action: "Shared Documents", know: "When someone shares a file with you or invites you to edit.", button: ["Push", "Email"]
  },

]


// Activity Feed Data
const activityData = {
  today: [
    {
      id: 1,
      user: "Sarah Miller",
      action: "mentioned you in",
      document: "Q4 Roadmap Phase 2",
      time: "12m ago",
      type: "Comments",
      icon: "💬"
    },
    {
      id: 2,
      user: "Jordan Key",
      action: "shared",
      document: "Design-System-v2-Draft",
      time: "2h ago",
      type: "Documents",
      icon: "📄"
    }
  ],
  yesterday: [
    {
      id: 3,
      user: "SyncNote Engineering",
      action: "workspace weekly summary is ready",
      document: "",
      time: "22h ago",
      type: "System",
      icon: "📊"
    },
    {
      id: 4,
      user: "Someone",
      action: "signed into your account from a new device:",
      document: "Chrome on MacOS (London, UK)",
      time: "1d ago",
      type: "Security",
      icon: "🔐"
    }
  ]
};

const page = () => {

  const [toggle, setToggle] = useState<{ [key: number]: boolean[] }>(() => {
    const initialToggles: { [key: number]: boolean[] } = {};
    ineractions.forEach(interaction => {
      initialToggles[interaction.id] = interaction.button.map(() => false);
    });
    return initialToggles;
  });


  const toggleSwitch = (interactionId: number, buttonIndex: number) => {
    setToggle(prev => {
      const currentToggles = prev[interactionId] || [];
      const newToggles = [...currentToggles];
      newToggles[buttonIndex] = !newToggles[buttonIndex];
      return {
        ...prev,
        [interactionId]: newToggles
      };
    });
  }

  return (
    <div className='mt-4 lg:mt-10  flex flex-col w-full gap-5 py-2 px-6 overflow-y-auto h-screen'>

      {/* Notification Heading */}
      <div className="flex flex-col gap-2">
        <span className="font-bold text-xl md:text-3xl">Notification Preferences</span>
        <p className="text-xs md:w-1/2 md:text-sm text-gray-500">Manage how you receive alerts for activities in your workspace. Select the channels that
          work best for your focus.</p>

      </div>


      {/* workspace interactions */}
      <div className='flex-col flex md:flex-row gap-4 w-full border-b border-gray-200 last:border-b-0 py-10'>
        <div className='md:w-2/3 flex flex-col   gap-4'>
          <div className='rounded-xl border'>
            <div className='flex flex-row items-center justify-between rounded-t-xl bg-blue-50 p-4'>
              <div className='gap-2 flex flex-row'>
                <IoMegaphoneOutline className='text-primary' />
                <span className='font-bold text-sm '>Workspace interactions</span>
              </div>
              <span className='text-primary text-sm font-bold'>
                3 TRIGGERS ACTIVE
              </span>
            </div>

            {ineractions.map((interaction) => (
              <Actions key={interaction.id} action={interaction.action} know={interaction.know} button={interaction.button}
                toggles={toggle}
                toggleSwitch={toggleSwitch} id={interaction.id} />
            ))}
          </div>



          {/* Security Alerts */}
          <div className=' flex flex-1 flex-col rounded-xl border'>
            <div className='flex flex-row items-center rounded-t-xl bg-blue-50 p-4'>
              <div className='gap-2 flex flex-row'>
                <MdOutlineSecurity className='text-primary' />
                <span className='font-bold text-sm '>Account & Security</span>
              </div>


            </div>

            <div className='flex flex-row items-center gap-4 p-6'>
              <div className='flex flex-col '>
                <span className='font-bold text-sm '>Security Alerts</span>
                <p className='text-xs text-gray-500'>New logins, password changes, and API access notifications. These cannot be fully disabled for your protection.</p>
              </div>
              <span className='bg-primary/10 rounded p-2 text-xs text-primary font-bold'>ALWAYS ON</span>
            </div>

          </div>


        </div>





        <ActivityFeed />

      </div>



      <div className='mt-auto flex flex-col md:flex-row gap-2 md:gap-0 mb-10 px-4 text-xs   items-center justify-between w-full'>
        <p className='text-gray-500'>Changes are saved automatically to your workspace profile.</p>

        <div className='flex flex-row justify-between items-center md:gap-4'>
          <button className='text-gray-500 rounded hover:bg-primary/5 px-2 py-1 text-xs'>Restore Defaults</button>
          <button className='text-white rounded bg-secondary text-sm  py-1 px-2'>Save Changes</button>

        </div>
      </div>
    </div>
  );
}

export default page;


// Activity Feed Component
const ActivityFeed = () => {
  return (
    <div className='flex flex-1 flex-col rounded-xl border'>
      {/* Header */}
      <div className='flex flex-row items-center justify-between rounded-t-xl bg-blue-50 p-4'>
        <div className='gap-2 flex flex-row items-center'>
          <RxCounterClockwiseClock className='text-primary' />
          <span className='font-bold text-sm'>Activity Feed</span>
        </div>
        <button className='text-primary text-sm font-bold hover:underline'>
          Clear All
        </button>
      </div>

      {/* Content */}
      <div className='p-4 flex-1 overflow-y-auto max-h-[500px]'>
        {/* Today Section */}
        <div className='mb-6'>
          <h3 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3'>Today</h3>
          <div className='space-y-4'>
            {activityData.today.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>

        {/* Yesterday Section */}
        <div className='mb-6'>
          <h3 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3'>Yesterday</h3>
          <div className='space-y-4'>
            {activityData.yesterday.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>

        {/* Show All Link */}
        <button className='text-primary text-sm font-medium hover:underline w-full text-center py-2'>
          Show All Activity History →
        </button>
      </div>
    </div>
  );
}

// Individual Activity Item
const ActivityItem = ({ activity }: { activity: any }) => {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-sm text-gray-800 leading-relaxed'>
        <span className='font-medium'>{activity.user}</span>
        {' '}{activity.action}{' '}
        {activity.document && (
          <span className='font-medium text-primary'>{activity.document}</span>
        )}
      </p>

      <div className='flex items-center gap-3 text-xs text-gray-500'>
        <span>{activity.time}</span>
        <span className='w-1 h-1 rounded-full bg-gray-300'></span>
        <span>{activity.type}</span>

        {/* Action buttons for document sharing */}
        {activity.type === "Documents" && (
          <div className='flex items-center gap-2 ml-2'>
            <button className='text-primary text-xs hover:underline'>View Document</button>
            <span className='w-1 h-1 rounded-full bg-gray-300'></span>
            <button className='text-primary text-xs hover:underline'>Details</button>
          </div>
        )}
      </div>
    </div>
  );
}

const Actions = ({ action, know, button, toggles, toggleSwitch, id }: {
  action: string,
  know: string,
  button: string[],
  toggles: any,
  toggleSwitch: (id: number, index: number) => void,
  id: number
}) => {
  return (
    <div className='flex flex-col gap-2 md:gap-0 md:flex-row p-6 justify-between items-center'>
      <div className='flex flex-col'>
        <span className='font-bold text-sm '>{action}</span>
        <p className='text-xs text-gray-500'>{know}</p>
      </div>

      <div className='flex flex-row items-start gap-4 justify-between'>
        {button.map((label, index) => (
          <div key={index} className='flex flex-row items-center gap-2'>
            <ToggleButton
              toggle={toggles[id]?.[index] || false}
              setToggle={() => toggleSwitch(id, index)}
            />
            <span className='text-sm text-gray-700'>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


const ToggleButton = ({ toggle, setToggle }: { toggle: boolean, setToggle: () => void }) => {
  return (
    <button onClick={setToggle} className={`w-10 p-1 cursor-pointer rounded-lg relative ${toggle ? "bg-primary" : "bg-gray-400"}`}>
      <div className={`w-4 h-4 transition-all duration-300 rounded-full bg-white ${toggle ? "translate-x-4" : "translate-x-0"}`} />

    </button>
  )
}