import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  subject: z.string().trim().min(1, "Please add a subject").max(150, "Subject must be under 150 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Builds a mailto: link that opens the visitor's email app with the message pre-filled. */
export function buildMailtoLink(to: string, data: ContactInput): string {
  const body = `${data.message}\n\n— ${data.name} (${data.email})`;
  return `mailto:${to}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
}

/** Returns a wa.me link for a phone number, or "" when no number is set. */
export function whatsappLink(number: string): string {
  const digits = number.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}
