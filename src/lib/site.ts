export const siteName = "Blissful Spa & Wellness";

export const siteDescription =
  "Blissful Spa & Wellness is a massage and wellness studio in GTB Nagar, Delhi (Hudson Lane, Kingsway Camp). Relaxation, Thai, Balinese, deep tissue, couple massage, steam, and jacuzzi experiences—call to book.";

/** Replace with your live domain when deployed */
export const siteUrl = "https://blissfulspawellness.example.com";

export const sitePhoneDisplay = "7678623255";
export const sitePhoneTel = "tel:+917678623255";

export const siteAddress = {
  line1: "1st Floor, 2521 Hudson Lane",
  line2: "Above Mr Crust, Near Uttam Chai",
  line3: "Kingsway Camp, GTB Nagar",
  city: "New Delhi",
  postalCode: "110009",
  region: "Delhi",
  country: "India",
} as const;

export function formatAddressBlock(): string {
  return [
    siteAddress.line1,
    siteAddress.line2,
    siteAddress.line3,
    `${siteAddress.city} ${siteAddress.postalCode}`,
  ].join("\n");
}

export const siteLocalSeoLine =
  "Massage spa in GTB Nagar, Delhi — Hudson Lane, Kingsway Camp, near Uttam Chai.";

/** Google Business Profile / Maps share link */
export const googleBusinessProfileUrl =
  "https://share.google/eQijGmK4Ad9SN4oe1";

export const whatsAppDisplay = "WhatsApp";
export function getWhatsAppHref(prefill?: string): string {
  const base = "https://wa.me/917678623255";
  if (!prefill?.trim()) return base;
  return `${base}?text=${encodeURIComponent(prefill)}`;
}

/** Official Google Maps embed for Blissful Spa & Wellness, GTB Nagar */
export const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8175500669654!2d77.20175397445519!3d28.69510387563065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7904ca9fa5%3A0xee0bbeee47fae6aa!2sBlissful%20Spa%20%26%20Wellness%20GTB%20Nagar!5e0!3m2!1sen!2sin!4v1775827484130!5m2!1sen!2sin";

export function getGoogleMapsSearchUrl(): string {
  const q = encodeURIComponent(
    "Blissful Spa Wellness 2521 Hudson Lane GTB Nagar New Delhi 110009",
  );
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export const sameAsLinks: readonly string[] = [googleBusinessProfileUrl];
