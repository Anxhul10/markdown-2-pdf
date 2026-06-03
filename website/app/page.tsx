"use client";

import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    try {
      setLoading(true);
      console.log(markdown);
      const response = await fetch(
        "https://markdown-to-pdf-nttx.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: markdown,
        }
      );

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "markdown.pdf";
      a.click();

      window.URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Navbar */}
      <nav className="border-b backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <h1 className="text-xl font-bold">
            Markdown 2 PDF
          </h1>

          <a
            href="https://github.com/Anxhul10/markdown-2-pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <FaGithub className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Free & OpenSource Markdown 2 PDF Converter
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Paste markdown content and instantly generate
            a clean PDF document. Fast, simple, and free.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border px-4 py-2 text-sm">
            Markdown Support
          </span>
          <span className="rounded-full border px-4 py-2 text-sm">
            Instant PDF Export
          </span>
          <span className="rounded-full border px-4 py-2 text-sm">
            No Login Required
          </span>
        </div>

        <div className="mt-12 rounded-2xl border bg-card p-6 shadow-sm">
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder={`

## Markdown Example

# Hello World

- Bullet 1
- Bullet 2

**Bold Text**
`}
            className="min-h-[450px] resize-none text-sm"
          />

          <Button
            className="mt-6 w-full"
            size="lg"
            disabled={!markdown.trim() || loading}
            onClick={handleConvert}
          >
            {loading
              ? "Generating PDF..."
              : "Convert to PDF"}
          </Button>
        </div>
      </section>
    </main>
  );
}