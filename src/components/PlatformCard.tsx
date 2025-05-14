
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface PlatformCardProps {
  platform: string;
  icon: React.ReactNode;
  followers: number;
  growth: number;
  color: string;
  progress: number;
  delay?: number;
}

const PlatformCard = ({ 
  platform, 
  icon, 
  followers, 
  growth, 
  color,
  progress,
  delay = 0
}: PlatformCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-5 flex flex-col card-hover opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("p-2 rounded", `bg-${color}/20`)}>
          {icon}
        </div>
        <h3 className="font-medium">{platform}</h3>
      </div>
      
      <div className="mt-1">
        <div className="flex justify-between items-baseline">
          <p className="text-2xl font-bold">{followers.toLocaleString()}</p>
          <div className="flex items-center text-green-400 bg-green-400/10 rounded-full px-2 py-0.5 text-xs">
            <TrendingUp className="h-3 w-3 mr-1" />
            {growth}%
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-3">Total Followers</p>
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center mb-1">
          <p className="text-xs text-gray-400">Monthly Goal</p>
          <p className="text-xs font-medium">{progress}%</p>
        </div>
        <Progress value={progress} className="h-1.5" indicatorClassName={`bg-${color}`} />
      </div>
    </div>
  );
};

export default PlatformCard;
