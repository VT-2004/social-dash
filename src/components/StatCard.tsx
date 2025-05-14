
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  iconBg?: string;
  delay?: number;
}

const StatCard = ({
  title,
  value,
  change,
  icon,
  iconBg = "bg-primary/20",
  delay = 0
}: StatCardProps) => {
  const isPositive = change > 0;
  
  return (
    <div 
      className="glass-card rounded-xl p-5 card-hover opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <div className="flex items-center mt-2 gap-1">
            <span className={cn(
              "flex items-center text-xs font-medium rounded-full px-1.5 py-0.5",
              isPositive ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"
            )}>
              {isPositive ? (
                <ArrowUp className="h-3 w-3 mr-0.5" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-0.5" />
              )}
              {Math.abs(change)}%
            </span>
            <span className="text-xs text-gray-400">from last month</span>
          </div>
        </div>
        <div className={cn("p-2.5 rounded-lg", iconBg)}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
