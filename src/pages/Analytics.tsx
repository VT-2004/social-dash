
import { useState } from "react";
import { BarChart, PieChart, Activity, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart as RechartBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  Legend,
  PieChart as RechartPieChart,
  Pie,
  Cell,
  TooltipProps,
} from "recharts";

// Sample data
const performanceData = [
  { name: "Jan", likes: 4000, comments: 2400, shares: 2400 },
  { name: "Feb", likes: 3000, comments: 1398, shares: 2210 },
  { name: "Mar", likes: 2000, comments: 9800, shares: 2290 },
  { name: "Apr", likes: 2780, comments: 3908, shares: 2000 },
  { name: "May", likes: 1890, comments: 4800, shares: 2181 },
  { name: "Jun", likes: 2390, comments: 3800, shares: 2500 },
  { name: "Jul", likes: 3490, comments: 4300, shares: 2100 },
];

const demographicData = [
  { name: "18-24", value: 30 },
  { name: "25-34", value: 40 },
  { name: "35-44", value: 15 },
  { name: "45+", value: 15 },
];

const contentTypeData = [
  { name: "Images", value: 45 },
  { name: "Videos", value: 30 },
  { name: "Text", value: 15 },
  { name: "Stories", value: 10 },
];

const platformData = [
  { name: "Instagram", followers: 8240, engagement: 65 },
  { name: "Twitter", followers: 5632, engagement: 45 },
  { name: "Facebook", followers: 12430, engagement: 78 },
  { name: "LinkedIn", followers: 3850, engagement: 42 },
  { name: "YouTube", followers: 2180, engagement: 36 },
];

const COLORS = ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA"];

const Analytics = () => {
  const [timeFilter, setTimeFilter] = useState("week");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1 gradient-text">Analytics Overview</h1>
          <p className="text-gray-400">Detailed metrics and performance data across platforms</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setTimeFilter("week")} 
            className={timeFilter === "week" ? "bg-primary/20" : ""}>
            Week
          </Button>
          <Button variant="outline" size="sm" onClick={() => setTimeFilter("month")} 
            className={timeFilter === "month" ? "bg-primary/20" : ""}>
            Month
          </Button>
          <Button variant="outline" size="sm" onClick={() => setTimeFilter("custom")} 
            className={timeFilter === "custom" ? "bg-primary/20" : ""}>
            Custom
          </Button>
          <Button size="icon" variant="outline">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Post Performance Metrics */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="h-5 w-5 text-primary" />
            Post Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip content={<CustomTooltip active={false} payload={[]} label="" />} />
              <Legend />
              <Line type="monotone" dataKey="likes" stroke="#9b87f5" strokeWidth={2} />
              <Line type="monotone" dataKey="comments" stroke="#7E69AB" strokeWidth={2} />
              <Line type="monotone" dataKey="shares" stroke="#D6BCFA" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Demographics and Content Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-blue-500" />
              Audience Demographics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <RechartPieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {demographicData.map((entry, index) => (
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
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              Content Type Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <RechartPieChart>
                <Pie
                  data={contentTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {contentTypeData.map((entry, index) => (
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

      {/* Platform Performance */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Platform Performance Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="engagement">
            <TabsList className="mb-4">
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="followers">Followers</TabsTrigger>
              <TabsTrigger value="growth">Growth</TabsTrigger>
            </TabsList>
            <TabsContent value="engagement">
              <ResponsiveContainer width="100%" height={300}>
                <RechartBarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip content={<CustomTooltip active={false} payload={[]} label="" />} />
                  <Legend />
                  <Bar dataKey="engagement" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                </RechartBarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="followers">
              <ResponsiveContainer width="100%" height={300}>
                <RechartBarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip content={<CustomTooltip active={false} payload={[]} label="" />} />
                  <Legend />
                  <Bar dataKey="followers" fill="#7E69AB" radius={[4, 4, 0, 0]} />
                </RechartBarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="growth">
              <div className="flex items-center justify-center h-64 text-gray-400">
                Growth data will be available soon
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper components
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

// Add proper type definitions for the CustomTooltip component
interface ChartTooltipProps {
  active: boolean;
  payload: any[];
  label: string;
}

const CustomTooltip = ({ active, payload, label }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded p-3 shadow-lg">
        <p className="text-gray-300">{label}</p>
        {payload.map((item, index) => (
          <p key={index} className="text-sm" style={{ color: item.color }}>
            {`${item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default Analytics;
