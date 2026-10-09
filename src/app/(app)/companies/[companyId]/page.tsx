import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCompany } from "@/features/profile/data";
import { CompanyDetails } from "@/features/profile/components/company-details";
import { DeleteCompanyButton } from "@/features/profile/components/delete-company-button";

export default async function CompanyPage({ params }: PageProps<"/companies/[companyId]">) {
  const { companyId } = await params;
  const company = await getCompany(companyId);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">{company.name}</h1>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={`/companies/${company.id}/edit`}>Edit</Link>
          </Button>
          <DeleteCompanyButton companyId={company.id} companyName={company.name} />
        </div>
      </div>
      <CompanyDetails company={company} />
    </div>
  );
}
