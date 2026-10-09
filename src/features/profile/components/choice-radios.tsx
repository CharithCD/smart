"use client";
import { Field, FieldError, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// One radio group for a list from options.ts. Used for stage, operating mode and geographic focus.
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
      <RadioGroup value={value ?? ""} onValueChange={onChange} className="flex flex-wrap gap-4">
        {ids.map((id) => (
          <Field key={id} orientation="horizontal" className="w-auto">
            <RadioGroupItem value={id} id={`${name}-${id}`} aria-invalid={!!error} />
            <FieldLabel htmlFor={`${name}-${id}`} className="font-normal">
              {labels[id]}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      <FieldError errors={[error]} />
    </FieldSet>
  );
}
