"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// Ported from the prototype's sidebar. The user menu comes in as children, so this shared
// component doesn't import from a feature.
type Props = {
  companies: { id: string; name: string }[];
  children: React.ReactNode;
};

export function AppSidebar({ companies, children }: Props) {
  const pathname = usePathname();

  return (
    <aside className="flex shrink-0 flex-col gap-6 border-b bg-background p-6 md:sticky md:top-0 md:h-screen md:w-72 md:overflow-y-auto md:border-r md:border-b-0">
      <Link href="/companies" className="flex items-center gap-2">
        <span className="grid grid-cols-2 gap-0.5">
          <span className="size-1.5 rounded-full bg-neutral-900" />
          <span className="size-1.5 rounded-full bg-neutral-900" />
          <span className="size-1.5 rounded-full bg-neutral-900" />
          <span className="size-1.5 rounded-full bg-neutral-900" />
        </span>
        <span className="text-xl font-bold tracking-tight text-neutral-900">smart.</span>
      </Link>

      <nav className="flex flex-col gap-1">
        <p className="mb-1 px-4 py-2 text-xs font-bold tracking-wider text-neutral-400 uppercase">
          My companies
        </p>
        {companies.map((company) => {
          const isActive = pathname.startsWith(`/companies/${company.id}`);
          return (
            <Link
              key={company.id}
              href={`/companies/${company.id}`}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-lilac-50 text-neutral-900"
                  : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
              )}
            >
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-md",
                  isActive && "bg-neutral-900 text-neutral-0",
                )}
              >
                <Briefcase className="size-4" strokeWidth={1.5} />
              </span>
              <span className="truncate">{company.name}</span>
            </Link>
          );
        })}
        <Link
          href="/companies/new"
          className={cn(
            "mt-2 flex items-center gap-3 rounded-xl border border-dashed px-4 py-3 text-sm font-semibold transition-colors",
            pathname === "/companies/new"
              ? "border-neutral-400 bg-neutral-50 text-neutral-900"
              : "border-neutral-300 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900",
          )}
        >
          <span className="flex size-6 items-center justify-center rounded-md border border-neutral-200 bg-neutral-0 text-neutral-900">
            <Plus className="size-4" strokeWidth={1.5} />
          </span>
          New company
        </Link>
      </nav>

      <div className="md:mt-auto">{children}</div>
    </aside>
  );
}
