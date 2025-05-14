import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BackgroundAnimation from "../components/BackgroundAnimation";
import { useIsMobile } from "../hooks/use-mobile";

const DashboardLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#0f0f25] text-white">
      <BackgroundAnimation />
      
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            <h2 className="mt-6 text-xl font-bold gradient-text animate-pulse">
              Loading Dashboard
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <div className={`flex-1 transition-all duration-300 ${isMobile ? 'w-full px-4' : 'md:ml-64 md:px-6'}`}>
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <main className={`pt-20 md:pt-24 px-2 md:px-0 pb-8`}>
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
