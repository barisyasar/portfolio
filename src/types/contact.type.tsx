import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required.").max(30),
  surname: z.string().min(1, "Surname is required.").max(30),
  email: z.string().min(1, "E-mail is required.").email(),
  subject: z.string().min(1, "Subject is required.").max(50),
  message: z.string().min(1, "Message is required.").max(350),
});

export type TContactSchema = z.infer<typeof contactSchema>;
