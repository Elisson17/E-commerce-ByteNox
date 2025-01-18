import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve conter no minimo 6 caracteres."),
});

export type LoginSchema = z.infer<typeof loginSchema>;