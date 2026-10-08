import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Temporary page to check the theme. Replaced by /companies in Phase 4.
export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Smart</CardTitle>
          <CardDescription>Launch-readiness assessment for startups</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <RadioGroup defaultValue="prelaunch">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="idea" id="idea" />
              <Label htmlFor="idea">Idea</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="prelaunch" id="prelaunch" />
              <Label htmlFor="prelaunch">Pre-launch</Label>
            </div>
          </RadioGroup>
          <div className="flex gap-2">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
