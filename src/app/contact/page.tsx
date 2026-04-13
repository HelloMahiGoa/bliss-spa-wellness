import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/site/InnerPageLayout";
import {
  formatAddressBlock,
  getWhatsAppHref,
  sitePhoneDisplay,
  sitePhoneTel,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & location",
  description:
    "Contact Blissful Spa & Wellness in GTB Nagar, Delhi. Phone 8796029392. 1st Floor, 2521 Hudson Lane, above Mr Crust, near Uttam Chai, Kingsway Camp, New Delhi 110009.",
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(
    "Blissful Spa Wellness 2521 Hudson Lane GTB Nagar New Delhi",
  );

  return (
    <InnerPageLayout title="Contact">
      <p className="text-ink/70 max-w-2xl text-base leading-relaxed">
        Call or message us to book a massage, couple session, steam, or jacuzzi
        visit. We are on the first floor above Mr Crust on Hudson Lane—near
        Uttam Chai in Kingsway Camp, GTB Nagar.
      </p>
      <div className="mt-10 space-y-6 text-sm leading-relaxed md:text-base">
        <div>
          <h2 className="text-sage text-xs font-semibold uppercase tracking-[0.2em]">
            Phone
          </h2>
          <a
            href={sitePhoneTel}
            className="text-ink mt-2 inline-block text-lg font-semibold hover:text-sage"
          >
            +91 {sitePhoneDisplay}
          </a>
          <p className="mt-3">
            <a
              href={getWhatsAppHref("Hi Blissful Spa, I'd like to book. ")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage font-semibold underline-offset-4 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-sage text-xs font-semibold uppercase tracking-[0.2em]">
            Address
          </h2>
          <address className="text-ink/80 mt-2 not-italic whitespace-pre-line">
            {formatAddressBlock()}
          </address>
        </div>
        <div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage inline-flex font-medium underline-offset-4 hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </InnerPageLayout>
  );
}
