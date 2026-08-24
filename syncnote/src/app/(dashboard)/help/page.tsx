import { Search } from 'lucide-react';
import React from 'react';


import {
  Rocket,
  CircleDollarSign,
  Users,
  Smartphone,
} from "lucide-react";

export const helpCategories = [
  {
    id: 1,
    title: "Getting Started",
    description:
      "Learn the basics and set up your first note.",
    articles: 12,
    icon: Rocket,
  },
  {
    id: 2,
    title: "Account & Billing",
    description:
      "Manage subscriptions, invoices, and profile settings.",
    articles: 8,
    icon: CircleDollarSign,
  },
  {
    id: 3,
    title: "Collaboration",
    description:
      "Sharing notes, team permissions, and real-time editing.",
    articles: 15,
    icon: Users,
  },
  {
    id: 4,
    title: "Mobile & Apps",
    description:
      "Install SyncNote on iOS, Android, and Desktop.",
    articles: 6,
    icon: Smartphone,
  },
];

const page = () => {
  return (
    <div className='flex flex-col'>

      {/* How can we help */}
      <div className='flex flex-col items-center justify-center pt-16 p-4 md:p-24 from-white via-primary/5 to-primary/15 bg-linear-to-t md:bg-linear-to-r'>
        <span className="text-center text-2xl font-bold md:text-3xl">
          How can we Help?
        </span>

        <p className="mt-2 max-w-3xl text-center text-gray-600">
          Search our knowledge base for answers to your questions about SyncNote's
          features, account management, and collaboration tools.
        </p>

        <div className="mt-10 flex w-full max-w-4xl items-center gap-2 rounded-lg border bg-success-light/20 px-4">
          <Search className="text-primary" size={18} />

          <input
            className="w-full border-0 bg-transparent py-4 outline-none"
            type="text"
            placeholder="Search across articles, guides, and tutorials..."
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm">
          <span className="text-gray-400">Popular:</span>

          <button className="text-primary hover:underline">
            Resetting password
          </button>

          <button className="text-primary hover:underline">
            Offline mode
          </button>

          <button className="text-primary hover:underline">
            Shared Workspaces
          </button>

          <button className="text-primary hover:underline">
            API Documentation
          </button>
        </div>


      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-6">
        {helpCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="rounded-2xl border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={20} />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-gray-800">
                {category.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              {/* Footer */}
              <button className="mt-6 text-sm font-semibold text-primary transition hover:underline">
                View {category.articles} articles →
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default page;
