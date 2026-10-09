import {
  GEOGRAPHIC_FOCUS_LABELS,
  OPERATING_MODE_LABELS,
  PRODUCT_TYPE_LABELS,
  STAGE_LABELS,
} from "@/features/profile/options";

type Props = {
  company: {
    stage: string;
    productType: string;
    operatingMode: string;
    industry: string | null;
    geographicFocus: string | null;
    budgetLkr: number | null;
  };
};

export function CompanyDetails({ company }: Props) {
  const rows = [
    { label: "Stage", value: STAGE_LABELS[company.stage] },
    { label: "Product type", value: PRODUCT_TYPE_LABELS[company.productType] },
    { label: "How the team works", value: OPERATING_MODE_LABELS[company.operatingMode] },
    { label: "Industry", value: company.industry },
    {
      label: "Geographic focus",
      value: company.geographicFocus && GEOGRAPHIC_FOCUS_LABELS[company.geographicFocus],
    },
    {
      label: "Budget",
      value: company.budgetLkr === null ? null : `LKR ${company.budgetLkr.toLocaleString("en-LK")}`,
    },
  ];

  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {rows.map((row) => (
        <div key={row.label} className="rounded-lg border p-4">
          <dt className="text-sm text-muted-foreground">{row.label}</dt>
          <dd className="mt-1 font-medium">{row.value || "Not set"}</dd>
        </div>
      ))}
    </dl>
  );
}
