import { describe, expect, it } from "vitest";

import { buildMailtoLink, contactSchema, whatsappLink } from "@/lib/contact";

const valid = { name: "Ali", email: "ali@example.com", subject: "Hello", message: "I'd like to work with you." };

describe("contact form", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("requires name, email, subject and message", () => {
    const result = contactSchema.safeParse({ name: "", email: "", subject: "", message: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const fields = new Set(result.error.issues.map((i) => i.path[0]));
      expect(fields).toEqual(new Set(["name", "email", "subject", "message"]));
    }
  });

  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("opens the email app addressed to the site owner with subject and body filled in", () => {
    const link = buildMailtoLink("owner@example.com", { ...valid, subject: "Job & role" });
    expect(link.startsWith("mailto:owner@example.com?subject=Job%20%26%20role&body=")).toBe(true);
    expect(decodeURIComponent(link.split("body=")[1] ?? "")).toContain("— Ali (ali@example.com)");
  });

  it("builds a WhatsApp link only when a number is set", () => {
    expect(whatsappLink("+92 300 1234567")).toBe("https://wa.me/923001234567");
    expect(whatsappLink("")).toBe("");
  });
});
