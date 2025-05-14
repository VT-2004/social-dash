import { Bell, Search, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useIsMobile } from "../hooks/use-mobile";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const isMobile = useIsMobile();

  return (
    <header className="h-16 border-b border-white/10 bg-black/50 backdrop-blur-lg w-full flex items-center justify-between px-2 sm:px-4 md:px-6 fixed top-0 right-0 left-0 md:left-64 z-10">
      <div className="flex items-center gap-2">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <h2 className="text-base sm:text-lg md:text-xl font-medium">Dashboard Overview</h2>
        <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs hidden md:inline-block">
          Live
        </span>
      </div>
      
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
        <div className="relative group hidden md:block">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input 
            type="text" 
            placeholder="Search..." 
            className="w-48 sm:w-64 rounded-full bg-white/5 border-white/10 pl-10 focus:ring-primary" 
          />
        </div>
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
        </Button>
        
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
