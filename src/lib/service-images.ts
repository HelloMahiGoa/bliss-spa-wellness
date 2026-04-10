/**
 * Service hero images in /public/images (served as /images/...).
 * Filenames match slugs except where noted.
 */
const serviceImagePathBySlug: Record<string, string> = {
  "relaxation-massage": "/images/relaxation-massage.avif",
  "head-massage": "/images/head-massage.avif",
  "aroma-massage": "/images/aroma-massage.avif",
  "foot-massage": "/images/foot-massage.avif",
  "massage-with-steam-shower": "/images/massage-with-steam-shower.avif",
  /** Image file: steam-massage.avif */
  "only-steam": "/images/steam-massage.avif",
  "balinese-massage": "/images/balinese-massage.avif",
  "swedish-massage": "/images/swedish-massage.avif",
  "couple-massage": "/images/couple-massage.avif",
  /** Image filename uses "jaccuzi" spelling */
  "massage-with-jacuzzi": "/images/massage-with-jaccuzi.avif",
  "deep-tissue-massage": "/images/deep-tissue-massage.avif",
  "anti-stress-back-massage": "/images/anti-stress-back-massage.avif",
  "thai-massage": "/images/thai-massage.avif",
  "hot-stone-massage": "/images/hot-stone-massage.avif",
  "sports-massage": "/images/sports-massage.avif",
};

const fallbackImage = "/images/relaxation-massage.avif";

export function getServiceImageSrc(slug: string): string {
  return serviceImagePathBySlug[slug] ?? fallbackImage;
}

export function getServiceImageAlt(serviceTitle: string): string {
  return `${serviceTitle} at Blissful Spa & Wellness — massage and wellness spa in GTB Nagar, Hudson Lane, New Delhi`;
}
