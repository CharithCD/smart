import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { listCompanies } from "@/features/profile/data";
import { CompanyList } from "@/features/profile/components/company-list";

export const metadata: Metadata = { title: "Your companies" };

export default async function CompaniesPage() {
  const companies = await listCompanies();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your companies</h1>
        <Button asChild>
          <Link href="/companies/new">New company</Link>
        </Button>
      </div>
      <CompanyList companies={companies} />
    </div>
  );
}
