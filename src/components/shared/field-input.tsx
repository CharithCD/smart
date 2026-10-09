import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// The prototype's 56px text field. 16px text also stops iOS from zooming in on focus.
export function FieldInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn("h-14 rounded-lg bg-background px-4 text-base md:text-base", className)}
      {...props}
    />
  );
}
