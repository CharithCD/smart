import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { listCompanies } from "@/features/profile/data";
import { CompanyWelcome } from "@/features/profile/components/company-welcome";

export const metadata: Metadata = { title: "Get started" };

// The sidebar already lists every company, so this page doesn't repeat that list.
// With companies, open the newest one. Without, explain the app and how to start.
export default async function CompaniesPage() {
  const companies = await listCompanies();
  if (companies.length > 0) redirect(`/companies/${companies[0].id}`);
  return <CompanyWelcome />;
}
