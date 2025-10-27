import z from "zod/v4";

export const signUpSchema = z
  .object({
    name: z
      .string({ error: "This input is required" })
      .nonempty({ error: "Name is required" }),
    email: z.email().nonempty({
      error: "Email is required",
    }),
    password: z
      .string({ error: "This input is required" })
      .nonempty({ error: "Password is required" })
      .min(5, { error: "Minimum is 5 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    error: "Password must match",
    path: ["confirmPassword"],
  });
export const loginSchema = z.object({
  email: z.email().min(1, { error: "Email is required" }),
  password: z.string().nonempty({ error: "Password is required" }),
});

export type SignUpSchemaProps = z.infer<typeof signUpSchema>;
export type LoginSchemaProps = z.infer<typeof loginSchema>;
