import { Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button, type ButtonProps } from "@/components/ui/button";
import { site } from "@/config/site";

/** Downloads the resume when the file exists; otherwise tells the visitor it's coming soon. */
export function ResumeButton({ label = "Download Resume", ...props }: ButtonProps & { label?: string }) {
  const [busy, setBusy] = useState(false);

  const handleClick = async () => {
    setBusy(true);
    try {
      const res = await fetch(site.resumeUrl, { method: "HEAD" });
      const type = res.headers.get("content-type") ?? "";
      if (res.ok && !type.includes("text/html")) {
        const a = document.createElement("a");
        a.href = site.resumeUrl;
        a.download = site.resumeFileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }
      toast("Resume coming soon", { description: "It will be available to download shortly." });
    } catch {
      toast("Couldn't download the resume", { description: "Please try again in a moment." });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button onClick={handleClick} disabled={busy} {...props}>
      <Download />
      {label}
    </Button>
  );
}
