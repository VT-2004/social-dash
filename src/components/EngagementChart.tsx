
import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { cn } from "@/lib/utils";

const data = [
  { name: "Jan", facebook: 4000, twitter: 2400, instagram: 2400 },
  { name: "Feb", facebook: 3000, twitter: 1398, instagram: 2210 },
  { name: "Mar", facebook: 2000, twitter: 9800, instagram: 2290 },
  { name: "Apr", facebook: 2780, twitter: 3908, instagram: 2000 },
  { name: "May", facebook: 1890, twitter: 4800, instagram: 2181 },
  { name: "Jun", facebook: 2390, twitter: 3800, instagram: 2500 },
  { name: "Jul", facebook: 3490, twitter: 4300, instagram: 2100 },
  { name: "Aug", facebook: 4000, twitter: 2400, instagram: 2400 },
  { name: "Sep", facebook: 3000, twitter: 1398, instagram: 2210 },
  { name: "Oct", facebook: 2000, twitter: 9800, instagram: 2290 },
  { name: "Nov", facebook: 2780, twitter: 3908, instagram: 2000 },
  { name: "Dec", facebook: 1890, twitter: 4800, instagram: 2181 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/70 border border-white/10 p-3 rounded-lg shadow-lg backdrop-blur-lg">
        <p className="text-gray-400 mb-2">{label}</p>
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2 mb-1">
            <div 
              className="h-3 w-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <p className="text-xs font-medium">{entry.name}</p>
            <p className="text-xs">{entry.value} engagement</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const EngagementChart = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="glass-card rounded-xl p-5 h-[400px] opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium">Engagement Activity</h3>
          <p className="text-sm text-gray-400">Monthly engagement rates across platforms</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-social-facebook" />
            <span className="text-xs">Facebook</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-social-twitter" />
            <span className="text-xs">Twitter</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-social-instagram" />
            <span className="text-xs">Instagram</span>
          </div>
        </div>
      </div>
      
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorFacebook" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4267B2" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#4267B2" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTwitter" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1DA1F2" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#1DA1F2" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorInstagram" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E1306C" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#E1306C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#9ca3af' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#9ca3af' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="facebook"
              stroke="#4267B2"
              fillOpacity={1}
              fill="url(#colorFacebook)"
              strokeWidth={2}
              isAnimationActive={isAnimating}
            />
            <Area
              type="monotone"
              dataKey="twitter"
              stroke="#1DA1F2"
              fillOpacity={1}
              fill="url(#colorTwitter)"
              strokeWidth={2}
              isAnimationActive={isAnimating}
            />
            <Area
              type="monotone"
              dataKey="instagram"
              stroke="#E1306C"
              fillOpacity={1}
              fill="url(#colorInstagram)"
              strokeWidth={2}
              isAnimationActive={isAnimating}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementChart;
