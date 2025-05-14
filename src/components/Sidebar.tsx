
import { Home, BarChart, Users, TrendingUp, Activity, Settings, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const isMobile = useIsMobile();
  
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: BarChart, label: "Analytics", path: "/analytics" },
    { icon: Users, label: "Audience", path: "/audience" },
    { icon: TrendingUp, label: "Growth", path: "/growth" },
    { icon: Activity, label: "Engagement", path: "/engagement" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const sidebarContent = (
    <>
      <div className="mb-8 px-2">
        <h2 className="text-2xl font-bold gradient-text">SocialMetrics</h2>
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => isMobile && setIsOpen(false)}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                isActive 
                  ? "bg-primary/20 text-primary" 
                  : "text-gray-400 hover:bg-primary/10 hover:text-gray-100"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="glass-card rounded-xl p-4">
          <p className="text-xs text-gray-400">System Status</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </>
  );

  // Mobile sidebar as a sliding sheet
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-64 p-4 border-r border-white/10 bg-black/30 backdrop-blur-lg">
          {sidebarContent}
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop sidebar
  return (
    <div className="h-screen w-64 bg-black/30 border-r border-white/10 p-4 backdrop-blur-lg fixed left-0 top-0 hidden md:block">
      {sidebarContent}
    </div>
  );
};

export default Sidebar;
