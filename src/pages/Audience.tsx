
import { useState } from "react";
import { Users, PieChart, Clock, User, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  PieChart as RechartPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

// Sample data
const ageData = [
  { name: "18-24", value: 30 },
  { name: "25-34", value: 45 },
  { name: "35-44", value: 15 },
  { name: "45+", value: 10 },
];

const genderData = [
  { name: "Male", value: 48 },
  { name: "Female", value: 45 },
  { name: "Other", value: 7 },
];

const locationData = [
  { name: "United States", value: 40 },
  { name: "United Kingdom", value: 20 },
  { name: "Canada", value: 15 },
  { name: "Australia", value: 10 },
  { name: "Others", value: 15 },
];

const followerGrowthData = [
  { name: "Jan", followers: 2000 },
  { name: "Feb", followers: 3000 },
  { name: "Mar", followers: 2800 },
  { name: "Apr", followers: 3500 },
  { name: "May", followers: 4200 },
  { name: "Jun", followers: 5100 },
  { name: "Jul", followers: 6000 },
];

const activeHoursData = [
  { hour: "12am", value: 15 },
  { hour: "2am", value: 5 },
  { hour: "4am", value: 2 },
  { hour: "6am", value: 8 },
  { hour: "8am", value: 25 },
  { hour: "10am", value: 45 },
  { hour: "12pm", value: 65 },
  { hour: "2pm", value: 85 },
  { hour: "4pm", value: 75 },
  { hour: "6pm", value: 95 },
  { hour: "8pm", value: 80 },
  { hour: "10pm", value: 45 },
];

const COLORS = ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA", "#F97316"];
const GENDER_COLORS = ["#9b87f5", "#D946EF", "#6E59A5"];

// Helper function for rendering pie chart labels
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return percent > 0.05 ? (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

const Audience = () => {
  const [activeTab, setActiveTab] = useState("demographics");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 gradient-text">Audience Insights</h1>
          <p className="text-gray-400">Understand your followers and optimize your content strategy</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-primary/20">
            Last 30 Days
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-primary" />
              Total Followers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">24.5K</div>
            <div className="flex items-center text-green-400 text-sm mb-4">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +12.5% from last month
            </div>
            <Progress value={75} className="h-1" />
            <div className="text-xs text-gray-400 mt-2">75% to next milestone</div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <User className="h-5 w-5 text-blue-500" />
              Demographics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Age 25-34</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <Progress value={45} className="h-1" indicatorClassName="bg-blue-500" />
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm">Male</span>
                <span className="text-sm font-medium">48%</span>
              </div>
              <Progress value={48} className="h-1" indicatorClassName="bg-primary" />
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm">Female</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <Progress value={45} className="h-1" indicatorClassName="bg-pink-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5 text-green-500" />
              Top Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">United States</span>
                <span className="text-sm font-medium">40%</span>
              </div>
              <Progress value={40} className="h-1" indicatorClassName="bg-green-500" />
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm">United Kingdom</span>
                <span className="text-sm font-medium">20%</span>
              </div>
              <Progress value={20} className="h-1" indicatorClassName="bg-green-500" />
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm">Canada</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <Progress value={15} className="h-1" indicatorClassName="bg-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="demographics" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="growth">Growth History</TabsTrigger>
          <TabsTrigger value="activity">Peak Hours</TabsTrigger>
          <TabsTrigger value="segments">Segments</TabsTrigger>
        </TabsList>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <RechartPieChart>
                    <Pie
                      data={ageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {ageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <RechartPieChart>
                    <Pie
                      data={genderData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {genderData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Location Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <RechartPieChart>
                    <Pie
                      data={locationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {locationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="growth" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Follower Growth History</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={followerGrowthData}>
                  <defs>
                    <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444' }} />
                  <Area type="monotone" dataKey="followers" stroke="#9b87f5" fillOpacity={1} fill="url(#colorFollowers)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Peak Active Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={activeHoursData}>
                  <defs>
                    <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#7E69AB" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="hour" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444' }} />
                  <Area type="monotone" dataKey="value" stroke="#7E69AB" fillOpacity={1} fill="url(#colorActivity)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-400">
                Peak activity times are between 6pm-8pm. Consider scheduling your most important content during these hours.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Interest Segments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Technology</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <Progress value={35} className="h-1.5" indicatorClassName="bg-primary" />
                  
                  <div className="flex justify-between items-center">
                    <span>Fashion</span>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <Progress value={28} className="h-1.5" indicatorClassName="bg-pink-500" />
                  
                  <div className="flex justify-between items-center">
                    <span>Travel</span>
                    <span className="text-sm font-medium">22%</span>
                  </div>
                  <Progress value={22} className="h-1.5" indicatorClassName="bg-blue-500" />
                  
                  <div className="flex justify-between items-center">
                    <span>Food</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <Progress value={15} className="h-1.5" indicatorClassName="bg-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Engagement Segments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Highly Active (daily)</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <Progress value={15} className="h-1.5" indicatorClassName="bg-green-500" />
                  
                  <div className="flex justify-between items-center">
                    <span>Regular (weekly)</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-1.5" indicatorClassName="bg-blue-500" />
                  
                  <div className="flex justify-between items-center">
                    <span>Occasional</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <Progress value={30} className="h-1.5" indicatorClassName="bg-yellow-500" />
                  
                  <div className="flex justify-between items-center">
                    <span>Dormant</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <Progress value={10} className="h-1.5" indicatorClassName="bg-red-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Audience;
