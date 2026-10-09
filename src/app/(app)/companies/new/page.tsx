import type { Metadata } from "next";
import { CompanyForm } from "@/features/profile/components/company-form";

export const metadata: Metadata = { title: "New company" };

export default function NewCompanyPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">New company</h1>
      <CompanyForm />
    </div>
  );
}
