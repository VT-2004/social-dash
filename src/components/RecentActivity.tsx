
import { useState, useEffect } from "react";

const activities = [
  {
    id: 1,
    platform: "Twitter",
    action: "New followers",
    count: 24,
    time: "2 minutes ago",
    icon: "🐦"
  },
  {
    id: 2,
    platform: "Instagram",
    action: "Post engagement",
    count: 156,
    time: "15 minutes ago",
    icon: "📸"
  },
  {
    id: 3,
    platform: "Facebook",
    action: "Page views",
    count: 89,
    time: "43 minutes ago",
    icon: "👍"
  },
  {
    id: 4,
    platform: "LinkedIn",
    action: "Profile visits",
    count: 32,
    time: "1 hour ago",
    icon: "💼"
  },
  {
    id: 5,
    platform: "YouTube",
    action: "Video views",
    count: 412,
    time: "3 hours ago",
    icon: "🎬"
  }
];

const RecentActivity = () => {
  const [visibleActivities, setVisibleActivities] = useState<number[]>([]);
  
  useEffect(() => {
    const showActivities = () => {
      const timer = setInterval(() => {
        setVisibleActivities(prev => {
          const next = [...prev];
          const nextActivityId = activities[next.length]?.id;
          if (nextActivityId) {
            next.push(nextActivityId);
          }
          if (next.length === activities.length) {
            clearInterval(timer);
          }
          return next;
        });
      }, 200);
      
      return () => clearInterval(timer);
    };
    
    // Delay start of animations
    setTimeout(showActivities, 500);
  }, []);
  
  return (
    <div className="glass-card rounded-xl p-5 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className={`flex items-center justify-between transition-all duration-300 ${
              visibleActivities.includes(activity.id) 
                ? "opacity-100 transform-none" 
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-lg">
                {activity.icon}
              </div>
              <div>
                <p className="font-medium">{activity.platform}</p>
                <p className="text-sm text-gray-400">
                  {activity.action} <span className="text-white">+{activity.count}</span>
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
