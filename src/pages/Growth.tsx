
import { useState } from "react";
import { TrendingUp, Users, Award, Eye, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Sample data
const growthData = [
  { name: "Week 1", followers: 2000, organic: 1500, ads: 500 },
  { name: "Week 2", followers: 2300, organic: 1700, ads: 600 },
  { name: "Week 3", followers: 2600, organic: 1800, ads: 800 },
  { name: "Week 4", followers: 2900, organic: 2100, ads: 800 },
  { name: "Week 5", followers: 3300, organic: 2400, ads: 900 },
  { name: "Week 6", followers: 3800, organic: 2800, ads: 1000 },
  { name: "Week 7", followers: 4200, organic: 3100, ads: 1100 },
  { name: "Week 8", followers: 4700, organic: 3500, ads: 1200 },
];

const sourceData = [
  { name: "Organic Search", value: 35 },
  { name: "Paid Ads", value: 25 },
  { name: "Referrals", value: 20 },
  { name: "Direct", value: 15 },
  { name: "Other", value: 5 },
];

const mentionsData = [
  { name: "Week 1", mentions: 45 },
  { name: "Week 2", mentions: 52 },
  { name: "Week 3", mentions: 48 },
  { name: "Week 4", mentions: 61 },
  { name: "Week 5", mentions: 55 },
  { name: "Week 6", mentions: 67 },
  { name: "Week 7", mentions: 70 },
  { name: "Week 8", mentions: 91 },
];

const impressionsData = [
  { name: "Jan", impressions: 4000, reach: 2400 },
  { name: "Feb", impressions: 3000, reach: 1398 },
  { name: "Mar", impressions: 2000, reach: 9800 },
  { name: "Apr", impressions: 2780, reach: 3908 },
  { name: "May", impressions: 1890, reach: 4800 },
  { name: "Jun", impressions: 2390, reach: 3800 },
];

const referralData = [
  { name: "Google", value: 35 },
  { name: "Facebook", value: 30 },
  { name: "Twitter", value: 15 },
  { name: "Instagram", value: 10 },
  { name: "Other", value: 10 },
];

const COLORS = ["#9b87f5", "#7E69AB", "#F97316", "#0EA5E9", "#D946EF"];

// Helper function for rendering pie chart labels
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return percent > 0.05 ? (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

const platforms = ["All Platforms", "Instagram", "Twitter", "Facebook", "LinkedIn"];

const Growth = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 gradient-text">Growth Analytics</h1>
          <p className="text-gray-400">Track your audience growth and understand what drives it</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {platforms.map((platform) => (
            <Button
              key={platform}
              variant="outline"
              size="sm"
              onClick={() => setSelectedPlatform(platform)}
              className={selectedPlatform === platform ? "bg-primary/20" : ""}
            >
              {platform}
            </Button>
          ))}
        </div>
      </div>

      {/* Growth Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              Growth Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">18.6%</div>
            <div className="flex items-center text-green-400 text-sm">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +3.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-blue-500" />
              New Followers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">2,451</div>
            <div className="flex items-center text-green-400 text-sm">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +18.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Award className="h-5 w-5 text-yellow-500" />
              Mentions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">348</div>
            <div className="flex items-center text-green-400 text-sm">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +24.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Eye className="h-5 w-5 text-green-500" />
              Impressions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">542K</div>
            <div className="flex items-center text-green-400 text-sm">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +12.8% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Follower Growth Graph */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Follower Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="total">
            <TabsList className="mb-4">
              <TabsTrigger value="total">Total Growth</TabsTrigger>
              <TabsTrigger value="sources">By Source</TabsTrigger>
            </TabsList>
            <TabsContent value="total">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={growthData}>
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
            </TabsContent>
            <TabsContent value="sources">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorAds" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#F97316" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444' }} />
                  <Legend />
                  <Area type="monotone" dataKey="organic" stroke="#9b87f5" fillOpacity={1} fill="url(#colorOrganic)" />
                  <Area type="monotone" dataKey="ads" stroke="#F97316" fillOpacity={1} fill="url(#colorAds)" />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Sources and Mentions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Follower Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Mentions & Tag Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={mentionsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444' }} />
                <Bar dataKey="mentions" fill="#7E69AB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Reach & Impression */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Reach vs. Impressions</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={impressionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444' }} />
              <Legend />
              <Bar dataKey="reach" fill="#9b87f5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="impressions" fill="#7E69AB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Referral Sources */}
      <Card className="glass-card border-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Referral Sources</CardTitle>
          <Button variant="outline" size="sm" className="flex items-center gap-1.5">
            <ExternalLink className="h-4 w-4" />
            View Details
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {referralData.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-medium">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2" indicatorClassName={item.name === "Google" ? "bg-[#9b87f5]" : item.name === "Facebook" ? "bg-[#1877F2]" : item.name === "Twitter" ? "bg-[#1DA1F2]" : item.name === "Instagram" ? "bg-[#E4405F]" : "bg-[#7E69AB]"} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Growth;
