"use client";
import { ChoiceCards } from "@/components/shared/choice-cards";
import { FieldError, FieldLegend, FieldSet } from "@/components/ui/field";

// One labelled set of choice cards for a list from options.ts.
// Used for stage, product type, operating mode and geographic focus.
type Props = {
  name: string;
  label: string;
  ids: readonly string[];
  labels: Record<string, string>;
  value: string | null | undefined;
  onChange: (value: string) => void;
  error?: { message?: string };
};

export function ChoiceRadios({ name, label, ids, labels, value, onChange, error }: Props) {
  return (
    <FieldSet data-invalid={!!error}>
      <FieldLegend variant="label">{label}</FieldLegend>
      <ChoiceCards
        name={name}
        ids={ids}
        labels={labels}
        value={value}
        onChange={onChange}
        isInvalid={!!error}
      />
      <FieldError errors={[error]} />
    </FieldSet>
  );
}
