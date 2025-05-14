
import { useState } from "react";
import { Users, TrendingUp, Activity, Eye, Calendar, Plus, MessageSquare, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import EngagementChart from "@/components/EngagementChart";
import RecentActivity from "@/components/RecentActivity";
import TopContent from "@/components/TopContent";
import PlatformCard from "@/components/PlatformCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [showScheduler, setShowScheduler] = useState(false);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 gradient-text">Welcome to your Social Dashboard</h1>
          <p className="text-gray-400">Track and analyze your social media performance</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => setShowScheduler(!showScheduler)}>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Post
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Post
          </Button>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Followers"
          value="24,532"
          change={12.5}
          icon={<Users className="h-5 w-5 text-primary" />}
          iconBg="bg-primary/20"
          delay={100}
        />
        <StatCard 
          title="Total Posts"
          value="1,284"
          change={4.3}
          icon={<MessageSquare className="h-5 w-5 text-blue-500" />}
          iconBg="bg-blue-500/20"
          delay={200}
        />
        <StatCard 
          title="Total Likes"
          value="542K"
          change={8.9}
          icon={<Heart className="h-5 w-5 text-red-500" />}
          iconBg="bg-red-500/20"
          delay={300}
        />
        <StatCard 
          title="Total Comments"
          value="87.3K"
          change={15.2}
          icon={<MessageSquare className="h-5 w-5 text-amber-500" />}
          iconBg="bg-amber-500/20"
          delay={400}
        />
      </div>
      
      {/* Conditional Scheduler */}
      {showScheduler && (
        <Card className="glass-card border-white/10 opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <CardHeader>
            <CardTitle>Post Scheduler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg border border-white/10">
                <h3 className="font-medium mb-2">Today</h3>
                <div className="text-sm text-gray-400">2 posts scheduled</div>
                <Button variant="outline" size="sm" className="mt-3">View</Button>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <h3 className="font-medium mb-2">Tomorrow</h3>
                <div className="text-sm text-gray-400">1 post scheduled</div>
                <Button variant="outline" size="sm" className="mt-3">View</Button>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <h3 className="font-medium mb-2">Next Week</h3>
                <div className="text-sm text-gray-400">5 posts scheduled</div>
                <Button variant="outline" size="sm" className="mt-3">View</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Main Chart */}
      <div className="mt-6">
        <EngagementChart />
      </div>
      
      {/* Top Performing Post */}
      <Card className="glass-card border-white/10 opacity-0 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
        <CardHeader>
          <CardTitle>Top Performing Post</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-4xl">📱</div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-medium mb-2">Introducing our new mobile app features!</h3>
              <p className="text-gray-400 mb-4">Check out the latest updates to our mobile application with enhanced analytics and user experience improvements...</p>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 text-red-400">
                    <Heart className="h-5 w-5" />
                    <span className="text-xl font-bold">8.2K</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Likes</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 text-blue-400">
                    <MessageSquare className="h-5 w-5" />
                    <span className="text-xl font-bold">1.4K</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Comments</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 text-green-400">
                    <Share2 className="h-5 w-5" />
                    <span className="text-xl font-bold">3.6K</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Shares</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs">
                    Instagram
                  </span>
                  <span className="text-sm text-gray-400 ml-2">Posted 3 days ago</span>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        <PlatformCard 
          platform="Twitter" 
          icon={<span className="text-social-twitter">X</span>}
          followers={8240} 
          growth={2.5}
          color="social-twitter"
          progress={65}
          delay={600}
        />
        <PlatformCard 
          platform="Facebook" 
          icon={<span className="text-social-facebook">f</span>}
          followers={5632} 
          growth={1.2}
          color="social-facebook"
          progress={45}
          delay={700}
        />
        <PlatformCard 
          platform="Instagram" 
          icon={<span className="text-social-instagram">📷</span>}
          followers={12430} 
          growth={3.8}
          color="social-instagram"
          progress={78}
          delay={800}
        />
        <PlatformCard 
          platform="LinkedIn" 
          icon={<span className="text-social-linkedin">in</span>}
          followers={3850} 
          growth={5.1}
          color="social-linkedin"
          progress={42}
          delay={900}
        />
        <PlatformCard 
          platform="YouTube" 
          icon={<span className="text-social-youtube">▶</span>}
          followers={2180} 
          growth={1.8}
          color="social-youtube"
          progress={36}
          delay={1000}
        />
      </div>
      
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mt-6">
        <Button variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Post
        </Button>
        <Button variant="outline">
          <Eye className="mr-2 h-4 w-4" />
          View Analytics
        </Button>
        <Button variant="outline">
          <Activity className="mr-2 h-4 w-4" />
          Engagement Tools
        </Button>
      </div>
      
      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <TopContent />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Index;
