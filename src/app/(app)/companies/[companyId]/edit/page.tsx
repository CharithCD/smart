import type { Metadata } from "next";
import { getCompany } from "@/features/profile/data";
import { CompanySchema } from "@/features/profile/schema";
import { CompanyForm } from "@/features/profile/components/company-form";

export async function generateMetadata({
  params,
}: PageProps<"/companies/[companyId]/edit">): Promise<Metadata> {
  const { companyId } = await params;
  const company = await getCompany(companyId);
  return { title: `Edit ${company.name}` };
}

export default async function EditCompanyPage({
  params,
}: PageProps<"/companies/[companyId]/edit">) {
  const { companyId } = await params;
  const company = await getCompany(companyId);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Edit {company.name}</h1>
      {/* parse() turns the stored strings back into the form's types and drops id, ownerId… */}
      <CompanyForm companyId={company.id} defaultValues={CompanySchema.parse(company)} />
    </div>
  );
}
