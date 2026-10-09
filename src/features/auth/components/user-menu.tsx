import { CircleUserRound } from "lucide-react";
import { AppButton } from "@/components/shared/app-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "@/features/auth/components/logout-button";

type Props = { name: string; email: string };

export function UserMenu({ name, email }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AppButton variant="ghost" className="px-3">
          <CircleUserRound />
          {name}
        </AppButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="font-normal text-muted-foreground">{email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
