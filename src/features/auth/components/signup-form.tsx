"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import { AppButton } from "@/components/shared/app-button";
import { TextField } from "@/components/shared/text-field";
import { authClient } from "@/lib/auth-client";
import { SignupSchema, type SignupInput } from "@/features/auth/schema";

export function SignupForm() {
  const router = useRouter();
  const form = useForm<SignupInput>({
    resolver: zodResolver(SignupSchema),
    defaultValues: { name: "", email: "", password: "" },
  });
  const { errors, isSubmitting } = form.formState;

  const onSubmit = form.handleSubmit(async (values) => {
    const { error } = await authClient.signUp.email(values);
    if (error) {
      toast.error(error.message ?? "Could not sign up");
      return;
    }
    router.push("/companies");
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1 className="text-xl font-semibold">Sign up</h1>
        </CardTitle>
        <CardDescription>Create an account to assess your company</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} noValidate>
          <FieldGroup>
            <TextField
              id="name"
              label="Name"
              error={errors.name}
              autoComplete="name"
              {...form.register("name")}
            />
            <TextField
              id="email"
              label="Email"
              error={errors.email}
              type="email"
              autoComplete="email"
              {...form.register("email")}
            />
            <TextField
              id="password"
              label="Password"
              error={errors.password}
              type="password"
              autoComplete="new-password"
              {...form.register("password")}
            />
            <AppButton type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Signing up…" : "Sign up"}
            </AppButton>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Log in
              </Link>
            </p>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
