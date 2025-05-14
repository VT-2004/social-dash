
import { useState } from "react";
import { MessageSquare, Heart, Share, PieChart, Activity, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as RechartPieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample data
const postEngagementData = [
  { id: 1, title: "Product launch announcement", likes: 1240, comments: 284, shares: 156, engagementRate: 8.2 },
  { id: 2, title: "Behind the scenes video", likes: 2350, comments: 410, shares: 325, engagementRate: 9.7 },
  { id: 3, title: "Customer success story", likes: 890, comments: 132, shares: 78, engagementRate: 5.4 },
  { id: 4, title: "Industry news update", likes: 650, comments: 84, shares: 52, engagementRate: 3.8 },
  { id: 5, title: "Team spotlight", likes: 1560, comments: 246, shares: 184, engagementRate: 6.5 },
];

const hashtagData = [
  { name: "#productlaunch", count: 248, engagement: 8.7 },
  { name: "#innovation", count: 187, engagement: 7.2 },
  { name: "#technology", count: 154, engagement: 6.5 },
  { name: "#startup", count: 132, engagement: 5.8 },
  { name: "#business", count: 118, engagement: 4.9 },
];

const sentimentData = [
  { name: "Positive", value: 65 },
  { name: "Neutral", value: 25 },
  { name: "Negative", value: 10 },
];

const engagementHistoryData = [
  { name: "Week 1", rate: 3.2 },
  { name: "Week 2", rate: 3.8 },
  { name: "Week 3", rate: 4.5 },
  { name: "Week 4", rate: 5.1 },
  { name: "Week 5", rate: 4.8 },
  { name: "Week 6", rate: 5.5 },
  { name: "Week 7", rate: 6.2 },
  { name: "Week 8", rate: 6.8 },
];

const ugcData = [
  { name: "Jan", count: 12 },
  { name: "Feb", count: 15 },
  { name: "Mar", count: 18 },
  { name: "Apr", count: 22 },
  { name: "May", count: 28 },
  { name: "Jun", count: 32 },
];

const COLORS = ["#4ade80", "#94a3b8", "#f87171"];
const SENTIMENT_COLORS = {
  Positive: "#4ade80",
  Neutral: "#94a3b8",
  Negative: "#f87171",
};

// Helper function for rendering pie chart labels
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Engagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = postEngagementData.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 gradient-text">Engagement Analytics</h1>
          <p className="text-gray-400">Track how your audience interacts with your content</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search posts..." 
              className="rounded-full bg-white/5 border-white/10 pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button size="icon" variant="outline">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Engagement Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Activity className="h-5 w-5 text-primary" />
              Avg. Engagement Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">6.8%</div>
            <div className="flex items-center text-green-400 text-sm">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +1.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              Average Comments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">231</div>
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
              <PieChart className="h-5 w-5 text-green-500" />
              Sentiment Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">78/100</div>
            <div className="flex items-center text-green-400 text-sm">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +5.3% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Post Engagement Table */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Post-wise Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Post Title</TableHead>
                  <TableHead className="text-right">Likes</TableHead>
                  <TableHead className="text-right">Comments</TableHead>
                  <TableHead className="text-right">Shares</TableHead>
                  <TableHead className="text-right">Engagement Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Heart className="h-3.5 w-3.5 text-red-500" />
                        {post.likes.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-blue-500" />
                        {post.comments.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Share className="h-3.5 w-3.5 text-green-500" />
                        {post.shares.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end">
                        <span className={`px-2 py-1 rounded text-xs ${
                          post.engagementRate > 8 ? "bg-green-500/20 text-green-400" : 
                          post.engagementRate > 5 ? "bg-blue-500/20 text-blue-400" : 
                          "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {post.engagementRate}%
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="history">
        <TabsList className="mb-6">
          <TabsTrigger value="history">Engagement History</TabsTrigger>
          <TabsTrigger value="hashtags">Hashtag Performance</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="ugc">User-Generated Content</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Engagement Rate Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementHistoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444' }} />
                  <Line type="monotone" dataKey="rate" stroke="#9b87f5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hashtags" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Top Performing Hashtags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hashtag</TableHead>
                      <TableHead className="text-right">Usage Count</TableHead>
                      <TableHead className="text-right">Engagement Rate</TableHead>
                      <TableHead>Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {hashtagData.map((hashtag) => (
                      <TableRow key={hashtag.name}>
                        <TableCell className="font-medium">{hashtag.name}</TableCell>
                        <TableCell className="text-right">{hashtag.count}</TableCell>
                        <TableCell className="text-right">{hashtag.engagement}%</TableCell>
                        <TableCell>
                          <Progress 
                            value={hashtag.engagement * 10} 
                            className="h-2" 
                            indicatorClassName="bg-primary" 
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Comment Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ResponsiveContainer width="100%" height={250}>
                    <RechartPieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {sentimentData.map((entry) => (
                          <Cell key={entry.name} fill={SENTIMENT_COLORS[entry.name]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444' }} />
                      <Legend />
                    </RechartPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-green-400">Positive Sentiment</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" indicatorClassName="bg-green-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">Neutral Sentiment</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <Progress value={25} className="h-2" indicatorClassName="bg-gray-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-red-400">Negative Sentiment</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <Progress value={10} className="h-2" indicatorClassName="bg-red-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ugc" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>User-Generated Content Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ugcData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#444' }} />
                  <Bar dataKey="count" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// This component is exported from lucide-react
const Search = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};

export default Engagement;
