import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/site/InnerPageLayout";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <InnerPageLayout title="Blog">
      <p className="text-ink/70 max-w-2xl text-sm leading-relaxed md:text-base">
        Wellness tips, seasonal rituals, and studio news.
      </p>
    </InnerPageLayout>
  );
}
