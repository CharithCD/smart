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

  // On phones only name and stage show, so the table fits without scrolling sideways.
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Stage</TableHead>
          <TableHead className="hidden sm:table-cell">Product type</TableHead>
          <TableHead className="hidden sm:table-cell">Added</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.map((company) => (
          <TableRow key={company.id}>
            <TableCell>
              <Link
                href={`/companies/${company.id}`}
                className="font-medium underline pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center"
              >
                {company.name}
              </Link>
            </TableCell>
            <TableCell>{STAGE_LABELS[company.stage]}</TableCell>
            <TableCell className="hidden sm:table-cell">
              {PRODUCT_TYPE_LABELS[company.productType]}
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              {company.createdAt.toLocaleDateString("en-GB")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
