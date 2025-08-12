import React, { useState } from 'react';
import logo from '../assets/logo.png';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Gray Matter Logo" 
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-semibold text-gray-900">
              Gray Matter by Buxton
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
              <span className="sr-only">Notifications</span>
              🔔
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
              <span className="sr-only">User menu</span>
              👤
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-sm border-r border-gray-200 transition-all duration-300`}>
          <nav className="p-4">
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="mb-4 p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            >
              {isSidebarCollapsed ? '→' : '←'}
            </button>
            
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <span className="mr-3">🏠</span>
                  {!isSidebarCollapsed && <span>Dashboard</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <span className="mr-3">👥</span>
                  {!isSidebarCollapsed && <span>Clients</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <span className="mr-3">👤</span>
                  {!isSidebarCollapsed && <span>Candidates</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <span className="mr-3">💼</span>
                  {!isSidebarCollapsed && <span>Jobs</span>}
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default RootLayout;