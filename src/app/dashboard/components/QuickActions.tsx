import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const QuickActions = () => (
  <Card>
    <CardHeader>
      <CardTitle>Quick Actions</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-wrap gap-4">
      <Button asChild><Link href="/public/hire-va">Hire a VA</Link></Button>
      <Button asChild variant="outline"><Link href="/public/call-us">Schedule a Call</Link></Button>
      <Button asChild variant="outline"><Link href="/public/get-quote">Request a Quote</Link></Button>
    </CardContent>
  </Card>
);

export default QuickActions;