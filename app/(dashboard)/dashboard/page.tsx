import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi UserName, Welcome back 👋
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Building #1</CardTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                       className="h-4 w-4 text-muted-foreground">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">Empire State Building</div>
                  <p className="text-sm text-gray-500 mb-4">New York, NY</p>
                  <div className="mt-4">
                    <p className="text-xs text-gray-500">102 floors</p>
                    <p className="text-xs text-gray-500">2,768,591 sq ft</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-gray-500">Energy consumption:</p>
                    <p className="text-xs text-gray-500">🔌 Electricity: 5,000 kWh/month</p>
                    <p className="text-xs text-gray-500">💧 Water: 10,000 gallons/month</p>
                  </div>
                  <div className="mt-4 bg-green-100 p-2 rounded-lg">
                    <p className="text-xs text-gray-500">Sustainability score:</p>
                    <p className="text-lg font-bold text-green-600">🌱 85/100</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Building #2</CardTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                       className="h-4 w-4 text-muted-foreground">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">Willis Tower</div>
                  <p className="text-sm text-gray-500 mb-4">Chicago, IL</p>
                  <div className="mt-4">
                    <p className="text-xs text-gray-500">110 floors</p>
                    <p className="text-xs text-gray-500">4,500,000 sq ft</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-gray-500">Energy consumption:</p>
                    <p className="text-xs text-gray-500">🔌 Electricity: 4,800 kWh/month</p>
                    <p className="text-xs text-gray-500">💧 Water: 9,000 gallons/month</p>
                  </div>
                  <div className="mt-4 bg-green-100 p-2 rounded-lg">
                    <p className="text-xs text-gray-500">Sustainability score:</p>
                    <p className="text-lg font-bold text-green-600">🌱 82/100</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/*<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <p>Content to Add</p>
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>*/}
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
