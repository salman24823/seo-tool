"use client"

import React from 'react';
import { 
  Eye, 
  BarChart2, 
  TrafficCone, 
  Link2, 
  Target, 
  ClipboardCheck, 
  Search, 
  Activity 
} from 'lucide-react';

const Layout = ({ children }) => {
  const menuItems = [
    { name: 'Visibility', icon: <Eye className="w-5 h-5" /> },
    { name: 'Ranking', icon: <BarChart2 className="w-5 h-5" /> },
    { name: 'Traffic', icon: <TrafficCone className="w-5 h-5" /> },
    { name: 'Backlinks', icon: <Link2 className="w-5 h-5" /> },
    { name: 'Goals', icon: <Target className="w-5 h-5" /> },
    { name: 'Site Audit', icon: <ClipboardCheck className="w-5 h-5" /> },
    { name: 'Keyword Research', icon: <Search className="w-5 h-5" /> },
    { name: 'Activity', icon: <Activity className="w-5 h-5" /> }
  ];

  return (
    <div className='flex min-h-screen bg-gray-50'>
      {/* Sidebar */}
      <div className='w-64 bg-white shadow-md p-4 border-r border-gray-200'>
        <div className="mb-8 px-2">
          <h1 className="text-2xl font-bold text-indigo-600">SEO Dashboard</h1>
        </div>
        <ul className='space-y-2'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
              >
                <span className="mr-3 text-indigo-500">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Main Content */}
      <div className='flex-1 p-8 bg-gray-50'>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout