import Link from "next/link";
import { requireUser } from "@/lib/dal";
import { UserMenu } from "@/features/auth/components/user-menu";

export default async function AppLayout({ children }: LayoutProps<"/">) {
  // Only to show the name. Each page still checks access through its data.ts calls.
  const user = await requireUser();

  return (
    <>
      <header className="flex items-center justify-between border-b px-6 py-3">
        <Link href="/companies" className="font-semibold">
          Smart
        </Link>
        <UserMenu name={user.name} email={user.email} />
      </header>
      <main className="mx-auto w-full max-w-4xl flex-1 p-6">{children}</main>
    </>
  );
}
