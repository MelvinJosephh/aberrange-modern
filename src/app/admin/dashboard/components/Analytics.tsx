import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => (
  <Card>
    <CardHeader>
      <CardTitle>Analytics</CardTitle>
    </CardHeader>
    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="font-semibold">Requests This Week</p>
        <p className="text-2xl">15</p> 
      </div>
      <div>
        <p className="font-semibold">Avg. Response Time</p>
        <p className="text-2xl">24 hrs</p> 
      </div>
    </CardContent>
  </Card>
);

export default Analytics;