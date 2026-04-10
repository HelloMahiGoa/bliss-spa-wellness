export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePricingTier = {
  duration: string;
  priceInr: number;
  priceLabel: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  duration: string;
  /** Lowest tier price (for schema / “from” display) */
  priceInr: number;
  /** Primary display price e.g. ₹1,500 — usually matches lowest tier */
  priceLabel: string;
  priceNote?: string;
  /** When set, hero and rates list each duration/price option */
  pricingTiers?: readonly ServicePricingTier[];
  /** Full SEO & browser title (human-readable; use with `title.absolute` in layout) */
  metaTitle: string;
  /** Meta description — natural sentence(s), ~140–160 characters ideal */
  metaDescription: string;
  paragraphs: string[];
  benefits?: string[];
  /** Short value props under the hero (optional) */
  highlights?: readonly string[];
  /** FAQs for helpful content + FAQ schema (optional) */
  faqs?: readonly ServiceFaq[];
  /** Extra meta keywords for Google (optional) */
  seoKeywords?: readonly string[];
  /** Curated “you may also like” order (slugs); falls back to first services in menu */
  relatedSlugs?: readonly string[];
};

function inr(n: number): string {
  return `₹${n.toLocaleString("en-IN")}`;
}

/** Shared menu: massage on table + 15 min shower */
export const PRICING_TIERS_MASSAGE_AND_SHOWER: readonly ServicePricingTier[] = [
  {
    duration: "45 min massage + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
  },
  {
    duration: "60 min massage + 15 min shower",
    priceInr: 2000,
    priceLabel: inr(2000),
  },
  {
    duration: "90 min massage + 15 min shower",
    priceInr: 3000,
    priceLabel: inr(3000),
  },
];

export function getPricingTiers(service: Service): ServicePricingTier[] {
  if (service.pricingTiers?.length) {
    return [...service.pricingTiers];
  }
  return [
    {
      duration: service.duration,
      priceInr: service.priceInr,
      priceLabel: service.priceLabel,
    },
  ];
}

export const services: Service[] = [
  {
    slug: "relaxation-massage",
    title: "Relaxation massage",
    shortDescription:
      "Slow, flowing strokes to quiet the mind and soften tight muscles—ideal when you want deep rest without intense pressure.",
    duration: "45 / 60 / 90 min + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
    pricingTiers: PRICING_TIERS_MASSAGE_AND_SHOWER,
    metaTitle:
      "Relaxation massage in GTB Nagar from ₹1,500 | Blissful Spa & Wellness",
    metaDescription:
      "Relaxation massage with shower on Hudson Lane—45, 60, or 90 min options from ₹1,500. Near Kingsway Camp & North Campus. Call 7678623255 to book.",
    paragraphs: [
      "When your week has been loud—traffic, screens, deadlines—a relaxation massage gives your nervous system a proper exhale. We use long, rhythmic strokes and light-to-medium pressure so your muscles can let go without bracing against deep work.",
      "Every session starts with a quick check-in: areas that feel heavy, scents you prefer, and how sensitive you are to pressure. Warm oil and a heated table help you settle in faster, so the first ten minutes already feel like a downshift.",
      "Guests near Kingsway Camp and DU North Campus often book this after exams, travel, or long office stretches. It pairs beautifully with our steam add-on if you want to feel lighter head-to-toe.",
      "Searching for a relaxation massage near GTB Nagar metro or a calm Swedish-style massage in North Delhi? Blissful sits on the first floor above Mr Crust on Hudson Lane—easy to find near Uttam Chai—with private rooms, fresh linens, and therapists who adjust pressure in real time.",
      "This treatment is about restoration, not sports recovery: we avoid aggressive digging so you leave feeling loose and sleepy rather than sore. If you are unsure whether you want gentle or firm work, tell us at the start—we meet you where you are.",
    ],
    benefits: [
      "Encourages mental unwinding and better sleep the same evening",
      "Gentle on first-time spa-goers or pressure-sensitive guests",
      "Full-body flow that balances neck, back, and legs in one session",
    ],
    highlights: [
      "Light-to-medium pressure",
      "45 / 60 / 90 min + shower",
      "Private room · Hudson Lane",
      "Easy add-on: steam",
    ],
    seoKeywords: [
      "relaxation massage GTB Nagar",
      "Swedish massage Delhi",
      "stress relief massage Hudson Lane",
      "full body massage Kingsway Camp",
      "spa massage near DU North Campus",
      "gentle massage New Delhi",
    ],
    relatedSlugs: [
      "swedish-massage",
      "aroma-massage",
      "massage-with-steam-shower",
      "deep-tissue-massage",
    ],
    faqs: [
      {
        question: "Is relaxation massage painful?",
        answer:
          "No—this session is designed to feel soothing, not intense. We use light-to-medium pressure and long, flowing strokes. If anything feels too light or too firm, say so anytime and we adjust immediately.",
      },
      {
        question: "How is relaxation massage different from deep tissue?",
        answer:
          "Relaxation massage prioritises calm and circulation with gentler, continuous strokes. Deep tissue targets stubborn knots with slower, stronger focal work and can feel more ‘therapeutic’ than sleepy. If you want both, we can discuss a customised approach when you call.",
      },
      {
        question: "Can I add steam or jacuzzi?",
        answer:
          "Yes. Many guests pair relaxation massage with a private steam session for a deeper unwind. See our massage with steam shower package on the services menu, or ask when you book by phone or WhatsApp.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "We recommend calling or messaging ahead—weekends and evenings fill quickly. Same-day slots sometimes open; phone +91 7678623255 or WhatsApp us with your preferred time.",
      },
      {
        question: "What should I wear or bring?",
        answer:
          "Arrive in comfortable clothing. We provide fresh towels and draping for modesty. If you have allergies, skin sensitivity, or are pregnant, please mention it before the session so we can choose oils and techniques safely.",
      },
    ],
  },
  {
    slug: "head-massage",
    title: "Head massage",
    shortDescription:
      "Focused scalp, neck, and temple work to ease headaches, eye strain, and mental fatigue—refreshing and clarifying.",
    duration: "30 minutes",
    priceInr: 1000,
    priceLabel: inr(1000),
    metaTitle:
      "Head & scalp massage in GTB Nagar from ₹1,000 | Blissful Spa & Wellness",
    metaDescription:
      "Ease headaches, eye strain, and desk fatigue with a focused head, scalp, and neck session—30 minutes from ₹1,000 on Hudson Lane, Delhi.",
    paragraphs: [
      "A dedicated head massage is one of the fastest ways to feel reset without booking a full-body session. We work the scalp with nourishing oil, release tension at the base of the skull, and ease jaw and temple holding patterns that build up from laptops, textbooks, and hours on your phone.",
      "Pressure is adjusted throughout—some guests love firm circular scalp work; others prefer a softer, almost sleepy pace. You stay seated or reclined comfortably, and many people notice clearer thinking, less eye fatigue, and a lighter feeling behind the eyes before they even stand up.",
      "If your neck and upper shoulders feel tight from posture, we can include light work along those areas in the same 30-minute window—just mention it when you arrive so we pace the session accordingly.",
      "Looking for a head massage near GTB Nagar metro, Kingsway Camp, or DU North Campus? Blissful Spa is on the first floor above Mr Crust on Hudson Lane, near Uttam Chai—easy to find for a quick break between classes or after office hours.",
      "This treatment is ideal when you want calm focus for the rest of the day, or before sleep if your mind races at night. It pairs well with our anti-stress back massage or a longer relaxation massage if you decide you want full-body care the same week.",
    ],
    benefits: [
      "May ease tension-type headaches and screen-related strain",
      "Short duration—easy to fit between classes or work",
      "Optional light neck and shoulder touch included where needed",
    ],
    highlights: [
      "30-minute reset",
      "Scalp, temples & neck",
      "Seated / reclined · no full undress",
      "Great between classes or work",
    ],
    seoKeywords: [
      "head massage GTB Nagar",
      "scalp massage Delhi",
      "head massage Hudson Lane",
      "tension headache massage Kingsway Camp",
      "head massage near DU North Campus",
      "Indian head massage New Delhi",
    ],
    relatedSlugs: [
      "anti-stress-back-massage",
      "relaxation-massage",
      "swedish-massage",
      "foot-massage",
    ],
    faqs: [
      {
        question: "Will oil get in my hair?",
        answer:
          "We use a modest amount of nourishing oil on the scalp and can adjust if you need to return to work or campus right after—tell us upfront and we will use lighter product or focus more on dry techniques over the hair where possible.",
      },
      {
        question: "Is a head massage good for migraines?",
        answer:
          "Many guests find it soothing for mild tension headaches and screen strain. If you have severe or sudden migraines, or neurological symptoms, please consult your doctor first—we are happy to adapt pressure and avoid areas you flag as sensitive.",
      },
      {
        question: "Do I need to take my clothes off?",
        answer:
          "No. You remain comfortably clothed in a seated or reclined position. We only need access to your head, neck, and optionally upper shoulders—no full-body draping required.",
      },
      {
        question: "Can you include my neck and shoulders?",
        answer:
          "Yes, lightly and within the 30-minute timing. Mention tight spots when you arrive so we balance scalp work with neck and shoulder relief without rushing either area.",
      },
      {
        question: "How do I book?",
        answer:
          "Call +91 7678623255 or WhatsApp us with your preferred time. Same-day slots sometimes open; evenings and weekends book fastest, so messaging ahead helps.",
      },
    ],
  },
  {
    slug: "aroma-massage",
    title: "Aroma massage",
    shortDescription:
      "Classic Swedish-style flow with essential oils you choose—calming, uplifting, or grounding—for a full sensory escape.",
    duration: "45 / 60 / 90 min + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
    pricingTiers: PRICING_TIERS_MASSAGE_AND_SHOWER,
    metaTitle:
      "Aromatherapy massage in GTB Nagar from ₹1,500 | Blissful Spa & Wellness",
    metaDescription:
      "Aromatherapy massage with oils you choose—45, 60, or 90 min plus shower from ₹1,500. Blissful Spa on Hudson Lane, GTB Nagar.",
    paragraphs: [
      "Aroma massage blends smooth, gliding techniques with essential oils selected for your mood and skin comfort. Lavender and chamomile lean calming; citrus notes feel bright; woodsy oils like cedar feel grounding after a hectic day.",
      "We dilute oils properly in a carrier base and patch-test if you mention sensitivity. The goal is not overpowering fragrance—it is a soft backdrop that helps you breathe deeper while muscles are kneaded and lengthened.",
      "If you are searching for an aromatherapy massage near Kingsway Camp or the North Campus side of Delhi, this is our most requested aromatic full-body ritual.",
      "Your therapist checks in on scent strength and pressure so the hour feels personal—not a one-blend-fits-all routine. Many guests choose this for birthdays, anniversaries, or when they want skincare-friendly glide with real stress relief.",
      "Blissful Spa sits on Hudson Lane above Mr Crust, near Uttam Chai—private rooms, fresh linens, and easy booking by phone or WhatsApp for GTB Nagar and North Delhi visitors.",
    ],
    benefits: [
      "Personalised oil choice to match energy and relaxation goals",
      "Combines stress relief with skin-softening hydration",
      "Ideal gift experience for birthdays and anniversaries",
    ],
    highlights: [
      "Essential oils you choose",
      "45 / 60 / 90 min + shower",
      "Private room · Hudson Lane",
      "Great for gifts & resets",
    ],
    seoKeywords: [
      "aromatherapy massage GTB Nagar",
      "aroma massage Delhi",
      "essential oil massage Hudson Lane",
      "aromatherapy spa Kingsway Camp",
      "relaxing massage near DU North Campus",
      "Blissful Spa aroma massage",
    ],
    relatedSlugs: [
      "swedish-massage",
      "relaxation-massage",
      "hot-stone-massage",
      "massage-with-steam-shower",
    ],
    faqs: [
      {
        question: "Can I choose the oil?",
        answer:
          "Yes. We will suggest options based on whether you want calm, uplift, or grounding, and we adjust if you dislike a scent or have sensitive skin.",
      },
      {
        question: "Is aromatherapy massage the same as Swedish?",
        answer:
          "It uses a similar flowing style with kneading and long strokes, plus your chosen essential oils in a safe dilution. If you want zero scent, consider our Swedish or relaxation massage instead.",
      },
      {
        question: "What if I have allergies?",
        answer:
          "Tell us before the session. We can skip certain oils, use a minimal blend, or stick to neutral carrier oil only.",
      },
      {
        question: "Will I feel oily afterward?",
        answer:
          "We use enough oil for glide, not saturation. Many guests feel comfortable heading home afterward; if you have plans right after, mention it and we can adjust.",
      },
      {
        question: "How do I book?",
        answer:
          "Call +91 7678623255 or WhatsApp with your preferred time. Weekends fill quickly—booking ahead is best.",
      },
    ],
  },
  {
    slug: "foot-massage",
    title: "Foot massage",
    shortDescription:
      "Reflex-style foot and lower-leg work to revive tired feet, improve circulation, and melt away standing-desk fatigue.",
    duration: "30 minutes",
    priceInr: 1000,
    priceLabel: inr(1000),
    metaTitle:
      "Foot massage in GTB Nagar from ₹1,000 | Blissful Spa & Wellness",
    metaDescription:
      "Revive tired feet and calves—focused foot massage, 30 minutes from ₹1,000 on Hudson Lane, GTB Nagar.",
    paragraphs: [
      "Delhi days involve a lot of walking, metro stairs, and hours on your feet. Our foot massage concentrates on arches, heels, and calves so heaviness does not follow you home. Warm soak prep (where available) and cream or oil keep skin supple.",
      "We combine thumb walking, gentle stretching, and soothing strokes. If a spot feels ticklish or sensitive, we adapt immediately—this should feel relieving, not tense.",
      "Many guests add a foot massage before a longer body session or after shopping around GTB Nagar.",
      "Students and office workers near DU North Campus and Kingsway Camp often book this as a standalone lunch-break reset—30 focused minutes without a long block on the table.",
      "Find us on the first floor above Mr Crust on Hudson Lane, near Uttam Chai—easy to pair with a head massage or steam add-on when you want a longer wellness break.",
    ],
    benefits: [
      "Targets soreness from standing, sports, or long commutes",
      "Lower-leg inclusion helps with ankle and calf tightness",
      "Compact session—great add-on or standalone refresh",
    ],
    highlights: [
      "Feet & lower legs",
      "45 focused minutes",
      "Ticklish? We adapt",
      "Add-on friendly",
    ],
    seoKeywords: [
      "foot massage GTB Nagar",
      "foot spa Delhi Hudson Lane",
      "reflexology style massage Kingsway Camp",
      "tired feet massage North Delhi",
      "foot massage near DU",
      "calf massage GTB Nagar",
    ],
    relatedSlugs: [
      "relaxation-massage",
      "head-massage",
      "swedish-massage",
      "only-steam",
    ],
    faqs: [
      {
        question: "I’m very ticklish—will this work?",
        answer:
          "Yes. We slow down, use firmer pressure where you prefer it, and skip spots that make you tense. The goal is relief, not discomfort.",
      },
      {
        question: "Do you include calves?",
        answer:
          "Yes. Lower legs are part of the session so ankle and calf tightness from stairs and standing gets attention too.",
      },
      {
        question: "Should I get a foot massage before or after a full body massage?",
        answer:
          "Either works. Some guests start with feet to downshift first; others add feet after bodywork as a finishing treat—tell us when you book if you want both same day.",
      },
      {
        question: "What should I wear?",
        answer:
          "Comfortable clothing; we need access to feet and lower legs. We provide towels and a calm setup in a private room.",
      },
      {
        question: "How do I book?",
        answer:
          "Phone +91 7678623255 or WhatsApp with your preferred slot. Walk-in availability varies, so messaging ahead is safest.",
      },
    ],
  },
  {
    slug: "massage-with-steam-shower",
    title: "Massage with steam shower",
    shortDescription:
      "Therapeutic massage followed by a private steam session to open pores, deepen relaxation, and leave muscles supple.",
    duration: "45 min massage + 15 min steam shower",
    priceInr: 2500,
    priceLabel: inr(2500),
    metaTitle:
      "Massage + steam shower in GTB Nagar from ₹2,500 | Blissful Spa & Wellness",
    metaDescription:
      "Massage plus private steam—45 min on the table and 15 min steam from ₹2,500 on Hudson Lane, GTB Nagar.",
    paragraphs: [
      "This pairing is for guests who love that spa-finished feeling: muscles worked thoroughly, then warmth that seems to melt the last bit of holding. Massage comes first so steam can support circulation and recovery rather than dehydrating tight tissue cold.",
      "Steam helps many people breathe easier and sleep deeply the same night. We keep sessions hydrating—cool water nearby—and time the heat so it feels comforting, not overwhelming.",
      "Located above Mr Crust on Hudson Lane, we welcome North Delhi visitors looking for massage and steam near DU and Kingsway Camp.",
      "If you commute long hours or land after a flight, this combo is a favourite: bodywork first, then heat to feel lighter head-to-toe. Tell us if you prefer lighter or firmer massage pressure when you book.",
      "Private steam means no crowded gym steam room—just calm, controlled warmth after your therapist’s hands have done the heavy lifting. Book ahead for weekends; couples often reserve back-to-back slots.",
    ],
    benefits: [
      "Two-in-one ritual for deep relaxation and skin glow",
      "Steam may support sinus comfort in seasonal weather",
      "Popular weekend reset for couples and solo guests alike",
    ],
    highlights: [
      "45 min massage + 15 min steam",
      "Private steam room",
      "One curated visit",
      "Book ahead",
    ],
    seoKeywords: [
      "massage with steam GTB Nagar",
      "steam shower massage Delhi",
      "spa massage steam Hudson Lane",
      "massage and steam Kingsway Camp",
      "detox massage North Delhi",
      "Blissful Spa steam massage",
    ],
    relatedSlugs: [
      "only-steam",
      "relaxation-massage",
      "hot-stone-massage",
      "massage-with-jacuzzi",
    ],
    faqs: [
      {
        question: "Why is massage before steam?",
        answer:
          "We warm and work muscle tissue first, then use steam to support relaxation and circulation. If you have a medical reason to prefer a different order, mention it when booking.",
      },
      {
        question: "Is the steam private?",
        answer:
          "Yes—your steam session is private to your booking, not a shared gym steam room.",
      },
      {
        question: "Can I do this if I have blood pressure issues?",
        answer:
          "Heat and massage both affect circulation. Please consult your doctor if you have uncontrolled hypertension or cardiovascular concerns, and tell us when you book so we can advise safely.",
      },
      {
        question: "What should I bring?",
        answer:
          "Comfortable clothes to arrive in; we provide towels and draping for massage. Drink water before and after steam.",
      },
      {
        question: "How do I book?",
        answer:
          "Call or WhatsApp +91 7678623255. This package needs a longer room slot—advance booking is strongly recommended.",
      },
    ],
  },
  {
    slug: "only-steam",
    title: "Steam only",
    shortDescription:
      "A focused steam session to sweat gently, warm stiff joints, and unwind—perfect before an event or after a long day.",
    duration: "30 min steam shower",
    priceInr: 1000,
    priceLabel: inr(1000),
    metaTitle:
      "Steam shower in GTB Nagar from ₹1,000 | Blissful Spa & Wellness",
    metaDescription:
      "Private steam shower when you want warmth without a massage—30 minutes from ₹1,000 on Hudson Lane. Call 7678623255.",
    paragraphs: [
      "Not every visit needs a full massage. Sometimes you simply want quiet heat, a few deep breaths, and to step out feeling lighter. Our steam-only option is short, affordable, and easy to slot into a busy afternoon.",
      "Steam can help loosen the body before exercise or soften stiffness after travel. We recommend showering after, drinking water, and avoiding if you have uncontrolled high blood pressure or your doctor has advised against heat exposure.",
      "Pair it later with a head or foot massage if you decide you want more time on the table.",
      "Perfect if you are curious about our space before booking a longer ritual, or if you want warmth between study blocks near North Campus. Blissful is on Hudson Lane above Mr Crust—message us for same-day openings.",
      "For a full spa-finished experience, upgrade another day to massage with steam shower—many guests try steam-only first, then come back for the combo.",
    ],
    benefits: [
      "Budget-friendly wellness break in central GTB Nagar",
      "Quick warm-up for muscles before deeper work another day",
      "Private, calm environment—no rush",
    ],
    highlights: [
      "30 min private steam",
      "Easy add-on or solo",
      "No massage required",
      "Hydrate & shower after",
    ],
    seoKeywords: [
      "steam room GTB Nagar",
      "steam only spa Delhi",
      "private steam Hudson Lane",
      "cheap steam session Kingsway Camp",
      "wellness steam North Delhi",
      "Blissful Spa steam",
    ],
    relatedSlugs: [
      "massage-with-steam-shower",
      "relaxation-massage",
      "head-massage",
      "foot-massage",
    ],
    faqs: [
      {
        question: "Is steam safe for everyone?",
        answer:
          "Heat is not suitable for some conditions—uncontrolled high blood pressure, certain heart issues, pregnancy, or if your doctor has told you to avoid saunas or steam. When unsure, ask your physician first.",
      },
      {
        question: "What should I wear?",
        answer:
          "Bring a swimsuit or use disposable options if you prefer; we will explain setup when you arrive. Towels and privacy are part of the experience.",
      },
      {
        question: "Can I combine this with massage same day?",
        answer:
          "Often yes—ask when you book. Many guests add a head or foot massage, or book our massage with steam package for a single curated visit.",
      },
      {
        question: "How long is the session?",
        answer:
          "About 30 minutes of steam time, plus a few minutes to settle in and cool down—plan a little buffer after.",
      },
      {
        question: "How do I book?",
        answer:
          "Call +91 7678623255 or WhatsApp. Same-day slots sometimes open; messaging ahead secures your time.",
      },
    ],
  },
  {
    slug: "balinese-massage",
    title: "Balinese massage",
    shortDescription:
      "Island-inspired blend of stretching, acupressure, and oil massage—energising yet deeply relaxing from head to toe.",
    duration: "45 / 60 / 90 min + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
    pricingTiers: PRICING_TIERS_MASSAGE_AND_SHOWER,
    metaTitle:
      "Balinese massage in GTB Nagar from ₹1,500 | Blissful Spa & Wellness",
    metaDescription:
      "Balinese massage with stretch and oil flow—45, 60, or 90 min plus shower from ₹1,500. Hudson Lane, GTB Nagar.",
    paragraphs: [
      "Balinese massage weaves together palm pressure, gentle stretching, and flowing oil strokes. It feels more dynamic than classic Swedish work—you might notice limb lifts and joint mobilisations that create space without yoga-level effort on your part.",
      "Therapists rhythmically alternate depth so tissue stays responsive. Guests often describe feeling both ‘worked out’ and deeply relaxed, making this a strong choice when you are stiff from workouts or long study sessions.",
      "If you have been searching for Balinese massage near Kingsway Camp or GTB Nagar metro, choose 90 minutes when you want the fullest leg-and-back sequence; 45 and 60 minute options suit tighter schedules.",
      "We tailor intensity to your comfort—mention injuries, flexibility limits, or areas to avoid at the start. Oil keeps strokes smooth; warm towels and a private room on Hudson Lane help you settle in quickly.",
      "Popular with guests who want more movement than pure relaxation massage but less pinpoint intensity than deep tissue. Call or WhatsApp to reserve—weekends fill fastest.",
    ],
    benefits: [
      "Combines stretch and massage for whole-body mobility",
      "Excellent for athletic recovery and desk-bound tightness",
      "Longer format allows thorough neck-to-foot attention",
    ],
    highlights: [
      "Stretch + oil flow",
      "45 / 60 / 90 min + shower",
      "Dynamic yet relaxing",
      "Private room · Hudson Lane",
    ],
    seoKeywords: [
      "Balinese massage GTB Nagar",
      "Balinese massage Delhi",
      "Balinese spa massage Hudson Lane",
      "stretch massage Kingsway Camp",
      "Balinese massage near DU",
      "90 minute massage North Delhi",
    ],
    relatedSlugs: [
      "swedish-massage",
      "thai-massage",
      "deep-tissue-massage",
      "hot-stone-massage",
    ],
    faqs: [
      {
        question: "How is Balinese different from Thai massage?",
        answer:
          "Balinese is oil-based on a table with flowing strokes plus stretch and pressure. Thai is usually mat-based, clothed, with more assisted stretching and less oil glide. Both open the body—different textures.",
      },
      {
        question: "Do I need to be flexible?",
        answer:
          "No. We work within your range and never force a stretch. Say stop anytime.",
      },
      {
        question: "Will it hurt?",
        answer:
          "You may feel strong pressure at times, but it should stay in a ‘good’ range. Sharp pain means we back off—communication is welcome throughout.",
      },
      {
        question: "Which duration should I pick?",
        answer:
          "45 minutes is a solid taster; 60 is our most booked; 90 lets us cover legs, back, arms, and neck with time for stretch sequences without rushing.",
      },
      {
        question: "How do I book?",
        answer:
          "Phone +91 7678623255 or WhatsApp with your preferred date and time. Advance booking recommended.",
      },
    ],
  },
  {
    slug: "swedish-massage",
    title: "Swedish massage",
    shortDescription:
      "The classic Western spa massage—effleurage, petrissage, and circulation-focused strokes for all-over ease.",
    duration: "45 / 60 / 90 min + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
    pricingTiers: PRICING_TIERS_MASSAGE_AND_SHOWER,
    metaTitle:
      "Swedish massage in GTB Nagar from ₹1,500 | Blissful Spa & Wellness",
    metaDescription:
      "Classic Swedish massage with shower—45, 60, or 90 min from ₹1,500 on Hudson Lane, Delhi. Great for first-timers.",
    paragraphs: [
      "Swedish massage is the foundation many people picture when they think ‘spa.’ It emphasises flowing strokes toward the heart, kneading of larger muscle groups, and rhythmic tapping where appropriate. Pressure stays in the relaxing-to-firm range unless you request more.",
      "It is an excellent first massage if you are unsure what style you need, and it supports general stress relief, mild muscle soreness, and sleep quality for many of our Hudson Lane guests.",
      "Tell us if you want extra time on shoulders or lower back—we customise every routine instead of following a rigid script.",
      "If you are comparing Swedish to relaxation massage at Blissful, think of Swedish as the classic circulation-forward style; relaxation is tuned for maximum calm with gentler pacing—either way, we adjust to you.",
      "We are on the first floor above Mr Crust, Hudson Lane, GTB Nagar—easy for Kingsway Camp and North Campus guests. Book by phone or WhatsApp; same-day openings happen but are not guaranteed.",
    ],
    benefits: [
      "Great introduction to professional massage therapy",
      "Promotes circulation and gentle muscle recovery",
      "Adaptable pressure from light to moderately firm",
    ],
    highlights: [
      "Classic spa massage",
      "45 / 60 / 90 min + shower",
      "Light to firm pressure",
      "First-timer friendly",
    ],
    seoKeywords: [
      "Swedish massage GTB Nagar",
      "Swedish massage Delhi",
      "classic massage Hudson Lane",
      "full body Swedish Kingsway Camp",
      "relaxation Swedish North Delhi",
      "Blissful Spa Swedish",
    ],
    relatedSlugs: [
      "relaxation-massage",
      "aroma-massage",
      "deep-tissue-massage",
      "couple-massage",
    ],
    faqs: [
      {
        question: "Swedish vs deep tissue—which should I pick?",
        answer:
          "Swedish prioritises flow, circulation, and overall ease. Deep tissue uses slower, stronger focal work on stubborn knots. Unsure? Start with Swedish or call us for a quick recommendation.",
      },
      {
        question: "Is Swedish massage painful?",
        answer:
          "It should not be. We keep pressure in a comfortable range and check in—speak up if you want lighter or firmer work.",
      },
      {
        question: "Do you use oil?",
        answer:
          "Yes, for smooth gliding and skin comfort. Mention allergies or scent sensitivity when you book.",
      },
      {
        question: "Can couples book Swedish together?",
        answer:
          "Yes—see our couple massage page for side-by-side booking. Each person still gets a personalised pressure consult.",
      },
      {
        question: "How do I book?",
        answer:
          "Call +91 7678623255 or WhatsApp with your preferred time.",
      },
    ],
  },
  {
    slug: "couple-massage",
    title: "Couple massage",
    shortDescription:
      "Side-by-side massage in a shared calm space—perfect for date nights, anniversaries, or unwinding together after Delhi traffic.",
    duration: "60 min massage + 30 min jacuzzi · two guests",
    priceInr: 5000,
    priceLabel: inr(5000),
    priceNote: "per couple",
    metaTitle:
      "Couple massage + jacuzzi in GTB Nagar from ₹5,000 | Blissful Spa & Wellness",
    metaDescription:
      "Side-by-side massage plus 30 min jacuzzi for two—₹5,000 per couple on Hudson Lane, North Delhi. Book ahead.",
    paragraphs: [
      "A couple massage lets you share the same slow tempo without conversation required—just parallel tables, aligned music, and therapists who keep the room feeling balanced for both of you. It is one of our most booked celebrations for anniversaries and pre-wedding calm.",
      "Each person gets an individual consult because pressure preferences and focus areas rarely match perfectly. You can choose different modalities (for example, deeper work for one partner, gentler flow for the other) when capacity allows—mention this when you call.",
      "Located near Uttam Chai in Kingsway Camp, we are easy to reach for guests across North Delhi. Advance booking helps us reserve paired therapists and the couples room.",
      "Arrive a few minutes early on busy evenings so both of you can settle in without rushing. We keep the room quiet and low-lit so it feels like a proper escape from GTB Nagar traffic.",
      "Price is per couple for the listed duration; upgrades or add-ons can be discussed when you book. WhatsApp works well if you want to share timing options with your partner before confirming.",
    ],
    benefits: [
      "Shared experience without sacrificing personalised care",
      "Ideal gift or relationship reset after busy seasons",
      "Private suite atmosphere—arrive together, leave unhurried",
    ],
    highlights: [
      "Two guests · one room",
      "60 min massage + 30 min jacuzzi",
      "Date night favourite",
      "Book paired therapists early",
    ],
    seoKeywords: [
      "couple massage GTB Nagar",
      "couples spa Delhi",
      "side by side massage Hudson Lane",
      "romantic massage Kingsway Camp",
      "couple massage near DU",
      "anniversary spa North Delhi",
    ],
    relatedSlugs: [
      "swedish-massage",
      "aroma-massage",
      "hot-stone-massage",
      "massage-with-jacuzzi",
    ],
    faqs: [
      {
        question: "Do both of us get the same massage?",
        answer:
          "You share the same room and timing, but pressure and focus areas are customised per person after a quick individual check-in.",
      },
      {
        question: "Can one person get deep tissue and the other relaxation?",
        answer:
          "Often yes when we have the right therapists on shift—tell us when you book so we can plan.",
      },
      {
        question: "How far ahead should we book?",
        answer:
          "Weekends and evenings fill fastest. Booking several days ahead is safest; last-minute openings sometimes appear—message us.",
      },
      {
        question: "Is it only for romantic couples?",
        answer:
          "Many pairs are partners, but friends and family members also book together—what matters is that you both want a shared calm experience.",
      },
      {
        question: "What is included in the price?",
        answer:
          "Side-by-side massage for two for the listed duration, per couple. Ask about add-ons like steam or jacuzzi packages when you call.",
      },
    ],
  },
  {
    slug: "massage-with-jacuzzi",
    title: "Massage with jacuzzi",
    shortDescription:
      "Warm hydrotherapy plus hands-on massage—bubbles first or after, tailored to how you want to feel leaving the spa.",
    duration: "60 min massage + 30 min jacuzzi",
    priceInr: 3500,
    priceLabel: inr(3500),
    metaTitle:
      "Massage + jacuzzi in GTB Nagar from ₹3,500 | Blissful Spa & Wellness",
    metaDescription:
      "60 min massage with 30 min jacuzzi in one visit—from ₹3,500 on Hudson Lane, GTB Nagar. Call to book.",
    paragraphs: [
      "Warm water and massage are a timeless pair: hydrotherapy loosens tissue and jacuzzi jets gently wake up circulation before or after skilled hands finish the job. We plan the order based on your goals—some guests prefer soaking first; others want massage then a short bubble finish.",
      "Please mention any heart conditions, pregnancy, or skin sensitivities when booking so we can time heat exposure safely. We keep jets at a comfortable level so relaxation stays centre stage.",
      "This premium ritual is popular with visitors celebrating birthdays and with locals who want a Hudson Lane hideaway without leaving North Delhi.",
      "If you sit long hours or feel stuck in your hips and lower back, the combo of heat, buoyancy, and massage can feel especially freeing. We stay in communication about temperature and pressure throughout.",
      "Reserve ahead—this package needs jacuzzi time plus table time. Blissful Spa, first floor above Mr Crust on Hudson Lane, is easy to reach from GTB Nagar metro and Kingsway Camp.",
    ],
    benefits: [
      "Hydrotherapy and massage in one curated visit",
      "Helps release hip and lower-back holding patterns",
      "Memorable experience for special occasions",
    ],
    highlights: [
      "60 min massage + 30 min jacuzzi",
      "Hydrotherapy + table work",
      "Order tailored to you",
      "Celebrate in North Delhi",
    ],
    seoKeywords: [
      "jacuzzi massage GTB Nagar",
      "massage with jacuzzi Delhi",
      "hydrotherapy massage Hudson Lane",
      "spa jacuzzi package Kingsway Camp",
      "luxury massage North Delhi",
      "Blissful Spa jacuzzi",
    ],
    relatedSlugs: [
      "massage-with-steam-shower",
      "hot-stone-massage",
      "couple-massage",
      "relaxation-massage",
    ],
    faqs: [
      {
        question: "Jacuzzi first or massage first?",
        answer:
          "We recommend based on your goals—soak first to soften tissue, or massage first then short bubbles to finish. Tell us what you prefer when you book.",
      },
      {
        question: "Is it safe during pregnancy?",
        answer:
          "Heat and hydrotherapy are not always suitable in pregnancy. Please consult your doctor and inform us when booking—we will advise or suggest alternatives.",
      },
      {
        question: "What about skin sensitivity?",
        answer:
          "Mention chlorine sensitivity, eczema, or open skin when booking. We adjust time in water and products used.",
      },
      {
        question: "Can two people book this?",
        answer:
          "Ask when you call—availability depends on room and jacuzzi scheduling. Couple massage is listed separately for side-by-side table work.",
      },
      {
        question: "How do I book?",
        answer:
          "Phone +91 7678623255 or WhatsApp. This is a premium slot—advance booking is essential.",
      },
    ],
  },
  {
    slug: "deep-tissue-massage",
    title: "Deep tissue massage",
    shortDescription:
      "Slower, stronger focus work for chronic tight spots, gym soreness, and stubborn knots—always within your comfort range.",
    duration: "45 / 60 / 90 min + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
    pricingTiers: PRICING_TIERS_MASSAGE_AND_SHOWER,
    metaTitle:
      "Deep tissue massage in GTB Nagar from ₹1,500 | Blissful Spa & Wellness",
    metaDescription:
      "Firm therapeutic massage with shower—45, 60, or 90 min from ₹1,500 on Hudson Lane, Delhi.",
    paragraphs: [
      "Deep tissue massage is not about painful elbowing—it is about precise, patient pressure that waits for tissue to respond. We layer in gradually, checking in so your breath stays steady and muscles do not fight the work.",
      "Ideal for repetitive strain from laptops, lifting, or training cycles, this modality spends extra time where you carry tension: often upper traps, mid-back, glutes, and calves. You may feel mild next-day soreness similar to a good workout; hydration and light movement help.",
      "Students and professionals around DU North Campus and GTB Nagar book this when stretching and foam rolling are not enough.",
      "Tell us your priority zones at the start—we can devote most of the hour to back and shoulders, legs, or a split based on what bothers you most. Sharp pain is never the goal; we want sustainable release.",
      "Blissful Spa on Hudson Lane above Mr Crust offers private rooms and experienced therapists. Book by phone or WhatsApp; mention if you prefer moderate-deep versus very deep so we match you well.",
    ],
    benefits: [
      "Addresses chronic knots and post-workout stiffness",
      "Therapist communicates depth clearly—no guesswork",
      "Can be focused regionally if one area needs most of the hour",
    ],
    highlights: [
      "Targeted firm work",
      "60 focused minutes",
      "Desk & gym friendly",
      "You guide the depth",
    ],
    seoKeywords: [
      "deep tissue massage GTB Nagar",
      "deep tissue massage Delhi",
      "therapeutic massage Hudson Lane",
      "knot relief massage Kingsway Camp",
      "sports recovery massage North Delhi",
      "Blissful Spa deep tissue",
    ],
    relatedSlugs: [
      "sports-massage",
      "swedish-massage",
      "anti-stress-back-massage",
      "relaxation-massage",
    ],
    faqs: [
      {
        question: "Will deep tissue massage hurt?",
        answer:
          "You may feel strong pressure, but it should stay manageable. We encourage feedback—if you cannot breathe easily or are bracing, we lighten up. Pain is not required for results.",
      },
      {
        question: "Will I be sore the next day?",
        answer:
          "Some guests feel mild soreness, like after exercise. Hydrate, move gently, and tell us next visit if you want a gentler session.",
      },
      {
        question: "Deep tissue vs sports massage?",
        answer:
          "Both can be firm. Sports massage often includes quicker flushing strokes and sport-specific areas; deep tissue is slower, layer-by-layer focal work. Unsure? Call and we will help you choose.",
      },
      {
        question: "Can I request only my back?",
        answer:
          "Yes—say so at booking so we allocate the hour to your priority regions.",
      },
      {
        question: "How do I book?",
        answer:
          "Call +91 7678623255 or WhatsApp with your preferred time and any injury notes.",
      },
    ],
  },
  {
    slug: "anti-stress-back-massage",
    title: "Anti-stress back massage",
    shortDescription:
      "Concentrated upper, mid, and lower back work to undo desk hunch, driving posture, and that ‘weight on shoulders’ feeling.",
    duration: "45 / 60 / 90 min + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
    pricingTiers: PRICING_TIERS_MASSAGE_AND_SHOWER,
    metaTitle:
      "Anti-stress back massage in GTB Nagar from ₹1,500 | Blissful Spa & Wellness",
    metaDescription:
      "Back-focused massage with shower—45, 60, or 90 min from ₹1,500 on Hudson Lane, GTB Nagar.",
    paragraphs: [
      "This session keeps the spotlight on your back from sacrum to neck—where Delhi’s desk culture and long commutes show up first. We combine palm pressure, forearm glides, and focused thumb work along the paraspinals and shoulder blades.",
      "It is shorter than a full body massage, making it perfect between meetings or after campus library marathons. You can stay face-down for most of the time if you prefer minimal chatting.",
      "Guests who carry stress visibly in their shoulders often pair this monthly with a head massage for maintenance.",
      "Choose 45, 60, or 90 minutes on the table plus shower time—so you can match how much relief you need that day. We are on Hudson Lane above Mr Crust, a quick detour for many GTB Nagar and Kingsway Camp routines.",
      "Pressure is tuned to you: say if you want firm stress relief or a gentler unwinding pace. If lower back or mid-back is your main complaint, tell us at the start so we budget time there.",
    ],
    benefits: [
      "Efficient relief when time is limited",
      "Targets posture-related tightness from chairs and phones",
      "Lower price point than full-body deep work",
    ],
    highlights: [
      "Back-focused + shower",
      "45 / 60 / 90 min options",
      "Desk & driving relief",
      "Pairs with head massage",
    ],
    seoKeywords: [
      "back massage GTB Nagar",
      "stress back massage Delhi",
      "upper back massage Hudson Lane",
      "desk posture massage Kingsway Camp",
      "quick back massage North Delhi",
      "shoulder tension massage DU",
    ],
    relatedSlugs: [
      "head-massage",
      "deep-tissue-massage",
      "relaxation-massage",
      "swedish-massage",
    ],
    faqs: [
      {
        question: "Is this deep tissue?",
        answer:
          "It can be firm, but the goal is stress and posture relief in a shorter window—not the same slow full-body deep tissue protocol. Ask for more depth if you want it.",
      },
      {
        question: "Do you work glutes or hips?",
        answer:
          "We focus on the back; brief work near the hips may help if tied to lower-back tension—mention preferences when you arrive.",
      },
      {
        question: "What should I wear?",
        answer:
          "Undress to your comfort for back work; we drape professionally so only the area being worked is exposed.",
      },
      {
        question: "Can I upgrade to full body another day?",
        answer:
          "Absolutely—many guests use this as maintenance and book Swedish or relaxation for full-body care monthly.",
      },
      {
        question: "How do I book?",
        answer:
          "Phone +91 7678623255 or WhatsApp—same-day slots sometimes open.",
      },
    ],
  },
  {
    slug: "thai-massage",
    title: "Thai massage",
    shortDescription:
      "Clothed or light-clothing assisted stretching and compression along energy lines—invigorating, opening, and deeply releasing.",
    duration: "45 / 60 / 90 min + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
    pricingTiers: PRICING_TIERS_MASSAGE_AND_SHOWER,
    metaTitle:
      "Thai massage in GTB Nagar from ₹1,500 | Blissful Spa & Wellness",
    metaDescription:
      "Mat-based Thai massage with shower—45, 60, or 90 min from ₹1,500 on Hudson Lane, Delhi.",
    paragraphs: [
      "Thai massage is performed on a mat with comfortable, flexible clothing. Instead of long oil glides, you receive rhythmic pressing, joint mobilisation, and yoga-like stretches guided by the therapist. Many people feel taller and looser afterward.",
      "It is excellent if you love movement-based therapy or want to improve flexibility without a class setting. We honour injuries and hypermobility—every stretch stays in your workable range.",
      "Our GTB Nagar guests often try Thai massage when they want something different from table Swedish work while staying fully clothed.",
      "Wear or bring loose trousers and a T-shirt; avoid tight jeans. The session is interactive—you will be guided into positions, always within your comfort. Tell us about knee, shoulder, or spine issues before we begin.",
      "Longer durations give more time for legs, hips, back, and neck on the mat; pick 45, 60, or 90 minutes plus shower when you book. Blissful Spa, Hudson Lane near Uttam Chai, welcomes students and professionals from across North Delhi.",
    ],
    benefits: [
      "Improves mobility and breath through assisted stretching",
      "No heavy oils—great if you need to return to work after",
      "Energising yet calming for mind-body balance",
    ],
    highlights: [
      "Mat-based · clothed",
      "Stretch + compression",
      "90 full minutes",
      "No oil-heavy finish",
    ],
    seoKeywords: [
      "Thai massage GTB Nagar",
      "Thai massage Delhi",
      "Thai yoga massage Hudson Lane",
      "stretch massage Kingsway Camp",
      "Thai massage near DU",
      "mat massage North Delhi",
    ],
    relatedSlugs: [
      "balinese-massage",
      "swedish-massage",
      "deep-tissue-massage",
      "sports-massage",
    ],
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Loose, flexible clothing—think gym or lounge wear. Tight jeans restrict movement; we can advise if you are unsure.",
      },
      {
        question: "Is Thai massage painful?",
        answer:
          "Pressure can feel strong; it should not feel sharp or unbearable. Speak up immediately—we adjust every step.",
      },
      {
        question: "Thai vs Balinese?",
        answer:
          "Thai is mat-based, clothed, stretch-heavy. Balinese is oil-based on a table with flowing strokes plus some stretch. Pick Thai if you want no oil and more mobility work.",
      },
      {
        question: "Can I eat before?",
        answer:
          "A light meal is fine; avoid a very heavy meal right before so twists and compressions stay comfortable.",
      },
      {
        question: "How do I book?",
        answer:
          "Call +91 7678623255 or WhatsApp with your preferred duration (45, 60, or 90 minutes plus shower). Advance booking is best.",
      },
    ],
  },
  {
    slug: "hot-stone-massage",
    title: "Hot stone massage",
    shortDescription:
      "Smooth heated basalt stones melt through tension while hands alternate warmth and flow—deeply soothing in Delhi winters or after long commutes.",
    duration: "45 / 60 / 90 min + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
    pricingTiers: PRICING_TIERS_MASSAGE_AND_SHOWER,
    metaTitle:
      "Hot stone massage in GTB Nagar from ₹1,500 | Blissful Spa & Wellness",
    metaDescription:
      "Hot stone massage with shower—45, 60, or 90 min from ₹1,500 on Hudson Lane, GTB Nagar.",
    paragraphs: [
      "Hot stone massage pairs the steady heat of polished basalt with classic flowing strokes. Stones rest along the spine, legs, and palms so muscles soften before deeper work—many guests describe it as sinking into warmth without the intensity of deep tissue alone.",
      "We monitor temperature carefully and check in often; heat should feel comforting, never sharp. If you are pregnant, have certain skin conditions, or are sensitive to warmth, tell us when booking so we can adapt or suggest another modality.",
      "Locals from GTB Nagar and North Campus love this after exams, flights, or weeks of desk time when ordinary massage still leaves a chill in the bones.",
      "The extra time lets us cover back, legs, and neck with both hands and stones without rushing—ideal when you want a gift-worthy ritual or a seasonal reset. Oil glide keeps skin comfortable; you stay draped except for the area being worked.",
      "Find Blissful on the first floor above Mr Crust, Hudson Lane. Book ahead for evenings and weekends; mention heat sensitivity or medication that affects skin when you call.",
    ],
    benefits: [
      "Heat encourages circulation and eases stiff, cold-weather tightness",
      "Ideal when you want depth that still feels nurturing",
      "Longer session allows full back, legs, and neck coverage with stones",
    ],
    highlights: [
      "Heated basalt stones",
      "45 / 60 / 90 min + shower",
      "Winter & travel favourite",
      "Nurturing depth",
    ],
    seoKeywords: [
      "hot stone massage GTB Nagar",
      "hot stone massage Delhi",
      "warm stone massage Hudson Lane",
      "stone therapy massage Kingsway Camp",
      "hot stone spa North Delhi",
      "Blissful Spa hot stone",
    ],
    relatedSlugs: [
      "relaxation-massage",
      "aroma-massage",
      "deep-tissue-massage",
      "massage-with-steam-shower",
    ],
    faqs: [
      {
        question: "Can hot stone burn me?",
        answer:
          "We heat stones to a safe therapeutic range and test before placing them. If anything feels too hot, say so immediately—we remove or cool stones right away.",
      },
      {
        question: "Is hot stone okay in summer?",
        answer:
          "Yes—many guests enjoy it year-round. If you run warm or dislike heat, try Swedish or relaxation massage instead.",
      },
      {
        question: "Pregnancy and hot stones?",
        answer:
          "Tell us if you are pregnant—heat protocols change. We may suggest a different treatment after discussion.",
      },
      {
        question: "How does it compare to deep tissue?",
        answer:
          "Stones add heat so muscles release with less brute force. You can still request firmer hand work in areas that need it.",
      },
      {
        question: "How do I book?",
        answer:
          "Phone +91 7678623255 or WhatsApp. Allow time for the duration you choose plus shower and arrival buffer.",
      },
    ],
  },
  {
    slug: "sports-massage",
    title: "Sports massage",
    shortDescription:
      "Targeted prep or recovery work for active bodies—flush sore legs, free the shoulders, and keep you moving after training or long runs.",
    duration: "45 / 60 / 90 min + 15 min shower",
    priceInr: 1500,
    priceLabel: inr(1500),
    pricingTiers: PRICING_TIERS_MASSAGE_AND_SHOWER,
    metaTitle:
      "Sports massage in GTB Nagar from ₹1,500 | Blissful Spa & Wellness",
    metaDescription:
      "Sports and recovery massage with shower—45, 60, or 90 min from ₹1,500 on Hudson Lane, Delhi.",
    paragraphs: [
      "Sports massage is not only for athletes—it is for anyone who trains, plays weekend cricket, runs at India Gate, or lifts regularly and feels it the next day. We combine quicker strokes to warm tissue with focused compression and stretch on the areas you use most.",
      "Tell us your sport or routine: we might spend more time on calves and IT bands, or on rotator cuffs and forearms. The pace can feel more invigorating than a relaxation massage, but we still keep you in a pain-free range—this is recovery, not punishment.",
      "Many Hudson Lane guests book mid-week between sessions or the day after a long event; others use it monthly alongside deep tissue for maintenance.",
      "Mention recent injuries, races, or heavy training days when you book—we adjust depth and avoid acute strains. Hydration and light movement after your session help you get the most from the hour.",
      "Blissful Spa & Wellness, GTB Nagar, is easy to reach from Kingsway Camp and North Campus—private rooms, clear communication, and therapists who listen to how your body responds mid-session.",
    ],
    benefits: [
      "Supports recovery after high-impact or repetitive workouts",
      "Can emphasise legs, back, or upper body based on your activity",
      "Clear communication so pressure matches your training phase",
    ],
    highlights: [
      "Active lifestyle focus",
      "Flush & compress",
      "45 / 60 / 90 min + shower",
      "Pre- or post-event",
    ],
    seoKeywords: [
      "sports massage GTB Nagar",
      "sports massage Delhi",
      "athletic massage Hudson Lane",
      "runner massage Kingsway Camp",
      "gym recovery massage North Delhi",
      "Blissful Spa sports massage",
    ],
    relatedSlugs: [
      "deep-tissue-massage",
      "balinese-massage",
      "swedish-massage",
      "relaxation-massage",
    ],
    faqs: [
      {
        question: "Sports massage vs deep tissue?",
        answer:
          "Sports massage often includes faster flushing strokes and sport-specific areas; deep tissue is slower, layer-by-layer knot work. Tell us your goal—recovery, maintenance, or pre-event—and we will guide you.",
      },
      {
        question: "I’m not an athlete—can I still book?",
        answer:
          "Yes. If you walk a lot, climb metro stairs, or lift at work, your muscles still benefit from targeted recovery work.",
      },
      {
        question: "How soon after a race or match?",
        answer:
          "Depends on how you feel and any medical advice you have. Many guests wait 24–48 hours after a hard event; ask us when booking.",
      },
      {
        question: "Will it hurt?",
        answer:
          "Strong pressure can happen, but sharp pain is not the goal. We want you functional the next day, not bruised—feedback helps.",
      },
      {
        question: "How do I book?",
        answer:
          "Call +91 7678623255 or WhatsApp with your sport, recent training, and preferred time.",
      },
    ],
  },
  {
    slug: "ten-massage-package",
    title: "10-massage package",
    shortDescription:
      "Ten prepaid sessions, three months to use them—ideal for couples or two family members who want flexibility and savings.",
    duration: "10 sessions · 3 months validity",
    priceInr: 10000,
    priceLabel: inr(10000),
    priceNote: "max 2 people",
    metaTitle:
      "10-massage package ₹10,000 | Blissful Spa & Wellness GTB Nagar",
    metaDescription:
      "Prepaid 10 massages with 3 months validity—share across up to 2 people for ₹10,000 at Blissful Spa, Hudson Lane, GTB Nagar.",
    paragraphs: [
      "This package is for guests who already love our table work and want a simple way to commit: ten sessions prepaid at a package rate, with three months from purchase to use them.",
      "Validity covers a maximum of two named people—partners, parent and child, or close friends—so you can share visits without splitting a single bodywork session. Each redemption is one standard session slot; tell us which treatment and duration when you book each time (subject to the same menu options available day-of).",
      "Great for monthly maintenance, pre-wedding season, or splitting between two busy schedules. Call or WhatsApp to purchase; we will confirm terms, start date, and how to redeem.",
      "Not transferable beyond the two people named at purchase unless we agree otherwise in writing. Unused sessions expire after the validity window—plan your ten visits across the quarter to get full value.",
    ],
    benefits: [
      "Lower per-visit cost than paying singly ten times",
      "Share across two people you register at purchase",
      "Three-month window fits irregular Delhi schedules",
    ],
    highlights: [
      "10 prepaid sessions",
      "3 months validity",
      "Up to 2 people",
      "₹10,000 package",
    ],
    seoKeywords: [
      "massage package GTB Nagar",
      "spa package Delhi",
      "10 massage deal Hudson Lane",
      "couple massage package Kingsway Camp",
      "Blissful Spa package",
    ],
    relatedSlugs: [
      "relaxation-massage",
      "swedish-massage",
      "couple-massage",
      "deep-tissue-massage",
    ],
    faqs: [
      {
        question: "Can two different people use the package?",
        answer:
          "Yes—up to two people named when you buy it. Each session is booked like a normal visit; both people can use the ten sessions in any split you prefer within validity.",
      },
      {
        question: "Which massages are included?",
        answer:
          "Redemption follows our current menu and tier pricing—tell us which service and duration when you book each session. If a treatment price exceeds the single-visit equivalent, we explain any top-up before confirming.",
      },
      {
        question: "What if we do not use all ten in three months?",
        answer:
          "Unused sessions expire after the validity period. We recommend spacing visits or sharing between two people so nothing goes to waste.",
      },
      {
        question: "Can I buy this as a gift?",
        answer:
          "Yes—purchase in studio or by phone; we can note the recipients’ names for redemption.",
      },
      {
        question: "How do I buy it?",
        answer:
          "Call +91 7678623255 or WhatsApp. Payment and start date are confirmed at purchase.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
