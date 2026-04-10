import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/site/InnerPageLayout";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <InnerPageLayout title="Gallery">
      <p className="text-ink/70 max-w-2xl text-sm leading-relaxed md:text-base">
        A look inside our studio—photos coming soon.
      </p>
    </InnerPageLayout>
  );
}
