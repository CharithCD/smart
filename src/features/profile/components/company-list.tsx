import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PRODUCT_TYPE_LABELS, STAGE_LABELS } from "@/features/profile/options";

type Props = {
  companies: { id: string; name: string; stage: string; productType: string; createdAt: Date }[];
};

export function CompanyList({ companies }: Props) {
  if (companies.length === 0) {
    return <p className="text-muted-foreground">No companies yet. Add your first one to start.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Stage</TableHead>
          <TableHead>Product type</TableHead>
          <TableHead>Added</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.map((company) => (
          <TableRow key={company.id}>
            <TableCell>
              <Link href={`/companies/${company.id}`} className="font-medium underline">
                {company.name}
              </Link>
            </TableCell>
            <TableCell>{STAGE_LABELS[company.stage]}</TableCell>
            <TableCell>{PRODUCT_TYPE_LABELS[company.productType]}</TableCell>
            <TableCell>{company.createdAt.toLocaleDateString("en-GB")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
