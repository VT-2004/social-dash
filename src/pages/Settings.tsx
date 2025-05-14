
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample data
const socialAccounts = [
  { platform: "Twitter", username: "@socialmetrics", connected: true, followers: 8240 },
  { platform: "Instagram", username: "@socialmetricsapp", connected: true, followers: 12430 },
  { platform: "Facebook", username: "Social Metrics", connected: true, followers: 5632 },
  { platform: "LinkedIn", username: "Social Metrics Inc.", connected: true, followers: 3850 },
  { platform: "YouTube", username: "Social Metrics", connected: false, followers: 0 },
];

const userRoles = [
  { name: "Admin", permissions: ["View all data", "Export data", "Manage users", "Manage APIs"] },
  { name: "Editor", permissions: ["View all data", "Export data", "Create content"] },
  { name: "Analyst", permissions: ["View all data", "Export data"] },
  { name: "Viewer", permissions: ["View all data"] },
];

const Settings = () => {
  const [theme, setTheme] = useState("dark");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-1 gradient-text">Settings</h1>
        <p className="text-gray-400">Manage your account preferences and integrations</p>
      </div>

      <Tabs defaultValue="accounts">
        <TabsList className="mb-6">
          <TabsTrigger value="accounts">Social Accounts</TabsTrigger>
          <TabsTrigger value="roles">User Roles</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="export">Data Export</TabsTrigger>
          <TabsTrigger value="api">API Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="accounts" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Connected Social Media Accounts</CardTitle>
              <CardDescription>Manage your connected social media accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Platform</TableHead>
                      <TableHead>Username</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Followers</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {socialAccounts.map((account) => (
                      <TableRow key={account.platform}>
                        <TableCell className="font-medium">{account.platform}</TableCell>
                        <TableCell>{account.username}</TableCell>
                        <TableCell>
                          {account.connected ? (
                            <div className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              <span className="text-green-500">Connected</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                              <span className="text-amber-500">Disconnected</span>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{account.followers.toLocaleString()}</TableCell>
                        <TableCell>
                          {account.connected ? (
                            <Button variant="outline" size="sm">
                              Disconnect
                            </Button>
                          ) : (
                            <Button size="sm">
                              Connect
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6">
                <Button>
                  Connect New Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>User Role Management</CardTitle>
              <CardDescription>Define and manage user roles and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userRoles.map((role) => (
                      <TableRow key={role.name}>
                        <TableCell className="font-medium">{role.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {role.permissions.map((perm) => (
                              <span 
                                key={perm} 
                                className="bg-primary/20 text-white px-2 py-0.5 text-xs rounded-full"
                              >
                                {perm}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6">
                <Button>
                  Add New Role
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-gray-400">Receive email updates for important events</p>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-gray-400">Receive push notifications in the browser</p>
                  </div>
                  <Switch 
                    checked={pushNotifications} 
                    onCheckedChange={setPushNotifications} 
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="font-medium mb-3">Notification Events</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>New follower milestone reached</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label>Unusual engagement spike</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label>Weekly performance reports</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label>Mentions and comments</Label>
                    <Switch defaultChecked={false} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Theme Customization</CardTitle>
              <CardDescription>Customize how your dashboard looks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Theme Mode</Label>
                  <div className="flex gap-4 mt-2">
                    <Button 
                      variant={theme === "dark" ? "default" : "outline"} 
                      className={theme === "dark" ? "" : "bg-white/5"}
                      onClick={() => setTheme("dark")}
                    >
                      Dark
                    </Button>
                    <Button 
                      variant={theme === "light" ? "default" : "outline"}
                      className={theme === "light" ? "" : "bg-white/5"}
                      onClick={() => setTheme("light")}
                    >
                      Light
                    </Button>
                    <Button 
                      variant={theme === "system" ? "default" : "outline"}
                      className={theme === "system" ? "" : "bg-white/5"}
                      onClick={() => setTheme("system")}
                    >
                      System
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex gap-3 mt-2">
                    <div className="h-8 w-8 rounded-full bg-primary cursor-pointer border-2 border-white"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-green-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-amber-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-rose-500 cursor-pointer"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Background Effects</Label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Show particle animation</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Data Export Options</CardTitle>
              <CardDescription>Export your social media data for analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <h3 className="font-medium mb-1">Performance Data</h3>
                  <p className="text-sm text-gray-400 mb-4">Export engagement metrics and follower growth</p>
                  <Button variant="outline" size="sm">Export as CSV</Button>
                </div>
                
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <h3 className="font-medium mb-1">Audience Insights</h3>
                  <p className="text-sm text-gray-400 mb-4">Export demographics and audience data</p>
                  <Button variant="outline" size="sm">Export as CSV</Button>
                </div>
                
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <h3 className="font-medium mb-1">Post Analytics</h3>
                  <p className="text-sm text-gray-400 mb-4">Export detailed metrics for all posts</p>
                  <Button variant="outline" size="sm">Export as CSV</Button>
                </div>
                
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <h3 className="font-medium mb-1">Complete Report</h3>
                  <p className="text-sm text-gray-400 mb-4">Export all data and metrics</p>
                  <Button size="sm">Generate Report</Button>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <p className="font-medium">Scheduled Reports</p>
                  <p className="text-sm text-gray-400">Automatically generate and send reports via email</p>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Weekly summary report</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label>Monthly performance report</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label>Quarterly deep analysis</Label>
                    <Switch defaultChecked={false} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>API Integration Configuration</CardTitle>
              <CardDescription>Set up API connections for data integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="api-key">API Key</Label>
                  <div className="flex mt-2">
                    <Input 
                      id="api-key" 
                      type="password" 
                      value="sk_test_51HG7yzKVT5voebbYXYGWt8Or" 
                      className="rounded-r-none bg-white/5" 
                      readOnly
                    />
                    <Button className="rounded-l-none">Regenerate</Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="webhook-url">Webhook URL</Label>
                  <Input 
                    id="webhook-url" 
                    placeholder="https://your-app.com/webhook" 
                    className="mt-2 bg-white/5" 
                  />
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <h3 className="font-medium mb-3">Integrated Services</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Google Analytics</span>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Facebook Ads</span>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <X className="h-5 w-5 text-gray-400" />
                      <span>Mailchimp</span>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <X className="h-5 w-5 text-gray-400" />
                      <span>HubSpot</span>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
