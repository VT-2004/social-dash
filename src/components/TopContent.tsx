
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Post A", views: 4000, likes: 2400, shares: 1200 },
  { name: "Post B", views: 3000, likes: 1398, shares: 980 },
  { name: "Post C", views: 2000, likes: 9800, shares: 2290 },
  { name: "Post D", views: 2780, likes: 3908, shares: 2000 },
  { name: "Post E", views: 1890, likes: 4800, shares: 1181 },
];

const TopContent = () => {
  return (
    <div className="glass-card rounded-xl p-5 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Top Performing Content</h3>
        <select 
          className="bg-white/5 border border-white/10 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>
      
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            barGap={8}
          >
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
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.8)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.5rem' 
              }} 
            />
            <Bar dataKey="likes" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="shares" stackId="a" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#8b5cf6]" />
          <span className="text-xs">Likes</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#6366f1]" />
          <span className="text-xs">Shares</span>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
