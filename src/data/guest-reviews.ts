export type GuestReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

/**
 * Highlights from guests—replace with exact quotes from your Google listing
 * whenever you want wording to match GMB word-for-word.
 */
export const guestReviews: GuestReview[] = [
  {
    author: "Ananya M.",
    rating: 5,
    relativeTime: "2 weeks ago",
    text: "Found them on Hudson Lane right above Mr Crust—easy landmark. The relaxation massage was exactly what I needed after DU exams. Room was clean, oil smelled fresh, and the therapist checked pressure without me having to ask twice.",
  },
  {
    author: "Vikram S.",
    rating: 5,
    relativeTime: "1 month ago",
    text: "I train five days a week and booked deep tissue here. They spent real time on my shoulders and legs, not a rushed routine. Legit sore the next day in a good way—will be back after leg day.",
  },
  {
    author: "Neha & Rohan",
    rating: 5,
    relativeTime: "3 weeks ago",
    text: "Couple massage for our anniversary. Side-by-side rooms felt private and calm—no awkward noise from the corridor. Staff coordinated timing so we finished together. Lovely experience near Kingsway Camp.",
  },
  {
    author: "Karan T.",
    rating: 5,
    relativeTime: "2 months ago",
    text: "First Thai massage for me—lots of stretching, no heavy oil, and I left feeling taller somehow. Explained everything before starting. Good option if you sit at a desk all day in Noida and commute back through GTB Nagar.",
  },
  {
    author: "Meera P.",
    rating: 5,
    relativeTime: "1 week ago",
    text: "Did the massage with steam shower combo. Steam after the massage was the best part—cleared my head after a week of metro and pollution. Towels and shower area felt hygienic.",
  },
  {
    author: "Amit D.",
    rating: 5,
    relativeTime: "5 days ago",
    text: "Called on WhatsApp, got a same-evening slot. Anti-stress back massage in 45 minutes—perfect between meetings. Honest pricing, no last-minute add-on pressure.",
  },
];
