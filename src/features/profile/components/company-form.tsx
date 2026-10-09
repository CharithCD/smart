"use client";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { FieldInput } from "@/components/shared/field-input";
import { FormPanel } from "@/components/shared/form-panel";
import { ChoiceRadios } from "@/features/profile/components/choice-radios";
import { CompanyIllustration } from "@/features/profile/components/company-illustration";
import {
  GEOGRAPHIC_FOCUSES,
  GEOGRAPHIC_FOCUS_LABELS,
  OPERATING_MODES,
  OPERATING_MODE_LABELS,
  PRODUCT_TYPES,
  PRODUCT_TYPE_LABELS,
  STAGES,
  STAGE_LABELS,
} from "@/features/profile/options";
import { CompanySchema, type CompanyInput } from "@/features/profile/schema";
import { createCompanyAction, updateCompanyAction } from "@/features/profile/actions";

type Props = { companyId?: string; defaultValues?: CompanyInput };

export function CompanyForm({ companyId, defaultValues }: Props) {
  const form = useForm<CompanyInput>({
    resolver: zodResolver(CompanySchema),
    defaultValues: defaultValues ?? {
      name: "",
      industry: null,
      geographicFocus: null,
      budgetLkr: null,
    },
  });
  const [pending, startTransition] = useTransition();
  const { errors } = form.formState;
  let submitLabel = companyId ? "Save changes" : "Create company";
  if (pending) submitLabel = companyId ? "Saving…" : "Creating…";

  const onSubmit = form.handleSubmit((values) =>
    startTransition(async () => {
      const result = companyId
        ? await updateCompanyAction(companyId, values)
        : await createCompanyAction(values);
      if (result?.error) toast.error(result.error);
    }),
  );

  return (
    <FormPanel
      title="Company context"
      description="Tell us about your business to customize your marketing, compliance, product, and infrastructure assessments."
      illustration={<CompanyIllustration />}
    >
      <form onSubmit={onSubmit} noValidate className="max-w-xl">
        <FieldGroup>
          <Field data-invalid={!!errors.name}>
            <FieldLabel htmlFor="name">Company name</FieldLabel>
            <FieldInput id="name" aria-invalid={!!errors.name} {...form.register("name")} />
            <FieldError errors={[errors.name]} />
          </Field>

          <Controller
            control={form.control}
            name="stage"
            render={({ field }) => (
              <ChoiceRadios
                name={field.name}
                label="Stage"
                ids={STAGES}
                labels={STAGE_LABELS}
                value={field.value}
                onChange={field.onChange}
                error={errors.stage}
              />
            )}
          />

          <Controller
            control={form.control}
            name="productType"
            render={({ field }) => (
              <ChoiceRadios
                name={field.name}
                label="Product type"
                ids={PRODUCT_TYPES}
                labels={PRODUCT_TYPE_LABELS}
                value={field.value}
                onChange={field.onChange}
                error={errors.productType}
              />
            )}
          />

          <Controller
            control={form.control}
            name="operatingMode"
            render={({ field }) => (
              <ChoiceRadios
                name={field.name}
                label="How the team works"
                ids={OPERATING_MODES}
                labels={OPERATING_MODE_LABELS}
                value={field.value}
                onChange={field.onChange}
                error={errors.operatingMode}
              />
            )}
          />

          <Field data-invalid={!!errors.industry}>
            <FieldLabel htmlFor="industry">Industry (optional)</FieldLabel>
            <FieldInput
              id="industry"
              aria-invalid={!!errors.industry}
              placeholder="e.g. FinTech"
              {...form.register("industry", { setValueAs: (value) => value?.trim() || null })}
            />
            <FieldError errors={[errors.industry]} />
          </Field>

          <Controller
            control={form.control}
            name="geographicFocus"
            render={({ field }) => (
              <ChoiceRadios
                name={field.name}
                label="Geographic focus (optional)"
                ids={GEOGRAPHIC_FOCUSES}
                labels={GEOGRAPHIC_FOCUS_LABELS}
                value={field.value}
                onChange={field.onChange}
                error={errors.geographicFocus}
              />
            )}
          />

          <Field data-invalid={!!errors.budgetLkr}>
            <FieldLabel htmlFor="budgetLkr">Budget in LKR (optional)</FieldLabel>
            <FieldInput
              id="budgetLkr"
              type="number"
              aria-invalid={!!errors.budgetLkr}
              min={0}
              step={1}
              placeholder="5000000"
              {...form.register("budgetLkr", {
                setValueAs: (value) => (value === "" || value === null ? null : Number(value)),
              })}
            />
            <FieldError errors={[errors.budgetLkr]} />
          </Field>

          {/* Same height as the fields above it */}
          <Button
            type="submit"
            disabled={pending}
            className="h-14 self-start rounded-lg px-6 text-base"
          >
            {submitLabel}
          </Button>
        </FieldGroup>
      </form>
    </FormPanel>
  );
}
