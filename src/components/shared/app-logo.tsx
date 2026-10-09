import Link from "next/link";

// h-11 so the logo link is a full 44px tap target on phones.
export function AppLogo() {
  return (
    <Link href="/companies" className="flex h-11 w-fit items-center gap-2">
      <span className="grid grid-cols-2 gap-0.5">
        <span className="size-1.5 rounded-full bg-neutral-900" />
        <span className="size-1.5 rounded-full bg-neutral-900" />
        <span className="size-1.5 rounded-full bg-neutral-900" />
        <span className="size-1.5 rounded-full bg-neutral-900" />
      </span>
      <span className="text-xl font-bold tracking-tight text-neutral-900">smart.</span>
    </Link>
  );
}
