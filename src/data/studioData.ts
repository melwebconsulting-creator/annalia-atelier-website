import { BrandPartner, PortfolioItem, ServiceItem, StudioPolicy } from '../types';

export const STUDIO_INFO = {
  brandName: 'Annalia Atelier',
  tagline: 'Private Nail Studio & Artistry',
  location: 'Mississauga, Ontario (Greater Toronto Area)',
  instagramHandle: '@annalia.atelier',
  instagramUrl: 'https://instagram.com/annalia.atelier',
  beaconsUrl: 'https://beacons.ai/annalia.atelier',
  defaultBookingUrl: 'https://beacons.ai/annalia.atelier',
  bio: 'Private nail artist, content creator, and educator based in Mississauga, ON. Dedicated to nail health, precision Russian cuticle preparation, Gel-X enhancements, and modern minimalist nail art.',
  operatingDays: 'Tuesday – Saturday (By Appointment Only)',
  notice: 'Rates and appointment windows are subject to consultation and owner confirmation.'
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'gel-x-full-set',
    name: 'Apres Gel-X Full Set',
    subtitle: 'Signature Soft-Gel Extension',
    estimatedPrice: '$95 CAD',
    priceValue: 95,
    duration: '1h 45m',
    description: 'Lightweight full-cover soft gel tips custom sized to each natural nail bed. Includes comprehensive cuticle dry prep, shaping, reinforcement, and solid gel finish.',
    features: [
      'Tailored nail sizing & apex balance',
      'Gentle Russian-style dry manicure prep',
      'Non-damaging soft gel adhesion',
      'Finished with high-shine top coat'
    ],
    recommendedFor: 'Those desiring durable length and natural flexibility without acrylic damage.'
  },
  {
    id: 'structured-gel-mani',
    name: 'Structured Gel Manicure',
    subtitle: 'Natural Nail Overlay & Care',
    estimatedPrice: '$80 CAD',
    priceValue: 80,
    duration: '1h 30m',
    description: 'High-viscosity builder gel (Luminary / Japanese gel) applied directly over natural nails to build a seamless apex and allow brittle nails to grow long and healthy.',
    features: [
      'Reinforces thin, bendable, or peeling nails',
      'Flawless cuticle clearance and contouring',
      'Promotes 3–4 weeks of natural growth retention',
      'Solid color or glazed finish included'
    ],
    recommendedFor: 'Clients growing out their natural nails who want chip-free durability.'
  },
  {
    id: 'art-tier-1',
    name: 'Tier I Art — Minimalist & French',
    subtitle: 'Micro Tips, Lines & Chrome Glaze',
    estimatedPrice: '+$20 CAD',
    priceValue: 20,
    duration: '+20m',
    description: 'Understated elegance. Includes micro French tips, glazed pearlescent chrome powder, aura airbrush effects, or clean geometric dots.',
    features: [
      'Ultra-fine clean French lines',
      'Glazed donut or pearl iridescent chrome',
      'Minimalist dotting & negative space accent',
      'Up to 10 fingers'
    ],
    recommendedFor: 'Subtle, timeless editorial looks that elevate your daily wardrobe.',
    isAddOn: true
  },
  {
    id: 'art-tier-2',
    name: 'Tier II Art — Fluid Chrome & Swirls',
    subtitle: 'Modern Metallic & Texture Details',
    estimatedPrice: '+$35 CAD',
    priceValue: 35,
    duration: '+35m',
    description: 'Textured molten silver/gold chrome swirls, Japanese tortoiseshell, celestial stars, or two-tone layered modern French designs.',
    features: [
      '3D metallic molten liquid chrome ribbons',
      'Organic tortoiseshell or blooming marble',
      'Hand-drawn stars, hearts, or flame motifs',
      'Custom color palette coordination'
    ],
    recommendedFor: 'Trendy, statement sets designed for special occasions or daily art lovers.',
    isAddOn: true
  },
  {
    id: 'art-tier-3',
    name: 'Tier III Art — Bespoke 3D Artistry',
    subtitle: 'Japanese Gel Sculpting & Charms',
    estimatedPrice: '+$50 CAD',
    priceValue: 50,
    duration: '+50m',
    description: 'Complex custom nail artistry. Intricate hand-painted illustrations, 3D water droplets, encapsulated charms, multi-layered mixed media.',
    features: [
      'Hand-sculpted 3D clear gel elements & water droplets',
      'Intricate detailed hand-painted illustrations',
      'Swarovski crystals & embedded luxury charms',
      '10-finger bespoke storytelling composition'
    ],
    recommendedFor: 'Clients bringing custom Pinterest inspiration boards or editorial shoots.',
    isAddOn: true
  },
  {
    id: 'gel-removal-care',
    name: 'Gentle Gel-X Soak-Off & Care',
    subtitle: 'Damage-Free Safe Removal',
    estimatedPrice: '$25 CAD',
    priceValue: 25,
    duration: '30m',
    description: 'Gentle e-file debulking followed by pure acetone foil wrap or oil soak-off. Completed with keratin cuticle conditioning. Free with new full set.',
    features: [
      'Preserves natural keratin nail plates',
      'No scraping or prying with metal tools',
      'Includes nourishing cuticle treatment & oil'
    ],
    recommendedFor: 'Clients with existing sets needing a clean reset.'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'set-chrome-french',
    title: 'Molten Chrome French Tips',
    category: 'chrome',
    categoryLabel: 'Glazed Chrome',
    image: '/src/assets/images/hero_nail_artistry_1793074977263.jpg',
    shape: 'Medium Almond',
    length: 'Medium',
    technique: 'Apres Gel-X + Mirror Silver Chrome Finish',
    description: 'High-shine reflective chrome tips over an ethereal translucent nude base. Clean micro-apex with flawless cuticle lines.',
    featured: true
  },
  {
    id: 'set-clean-micro-french',
    title: 'Micro French Minimalist Line',
    category: 'french',
    categoryLabel: 'French & Micro-Tips',
    image: '/src/assets/images/nail_minimalist_french_1793074979102.jpg',
    shape: 'Short Squoval',
    length: 'Natural / Short',
    technique: 'Structured Luminary Gel + Crisp White Micro-Tip',
    description: 'Understated luxury. A hairline micro-tip that elongates natural nail beds while maintaining pristine daily functionality.',
    featured: true
  },
  {
    id: 'set-pearl-glazed',
    title: 'Pearlescent Glazed Donut Nude',
    category: 'chrome',
    categoryLabel: 'Glazed Chrome',
    image: '/src/assets/images/nail_chrome_glazed_1793074978410.jpg',
    shape: 'Soft Almond',
    length: 'Medium',
    technique: 'Japanese Sheer Syrup Gel + Unicorn Chrome Powder',
    description: 'Radiant lavender-pink shimmer with an opalescent glaze that catches golden daylight. Silky smooth finish.',
    featured: true
  },
  {
    id: 'set-3d-celestial-droplets',
    title: 'Bespoke 3D Fluid Swirls & Water Droplets',
    category: 'custom-3d',
    categoryLabel: 'Bespoke 3D Art',
    image: '/src/assets/images/nail_custom_art_1793074980060.jpg',
    shape: 'Almond',
    length: 'Medium',
    technique: 'Sculpted 3D Hard Gel + Liquid Chrome Ribbons',
    description: 'Tactile Japanese hard gel sculpting with tactile chrome curves, metallic accents, and glass-like dew drop accents on neutral milky base.',
    featured: true
  },
  {
    id: 'set-milky-clean-nude',
    title: 'Milky Sheer Syrup Overlay',
    category: 'minimalist',
    categoryLabel: 'Minimalist & Nude',
    image: '/src/assets/images/atelier_studio_space_1793074980459.jpg',
    shape: 'Natural Oval',
    length: 'Short',
    technique: 'Structured Japanese Gel Overlay',
    description: 'Clean girl aesthetic perfected. Multiple sheer milky syrup gel layers cured over structured base for healthy, glassy natural nails.'
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    name: 'Sweetie Nail Supply',
    description: 'Official affiliate partner for premium Japanese and Korean gel products, professional brushes, and studio essentials.',
    badge: 'Affiliate Partner',
    link: 'https://beacons.ai/annalia.atelier',
    code: 'ANNALIA',
    perk: 'Special discount on professional Asian gel brands & nail care tools.'
  },
  {
    name: 'Bright Rainbow Nails',
    description: 'Curated selection of quality nail art accessories, charms, and specialized enhancement supplies.',
    badge: 'Brand Ambassador',
    link: 'https://beacons.ai/annalia.atelier',
    code: 'ANNALIA10',
    perk: 'Exclusive creator code for studio clients and fellow nail techs.'
  }
];

export const STUDIO_POLICIES: StudioPolicy[] = [
  {
    title: 'Arrival & Bare Nails Etiquette',
    summary: 'Please arrive with bare natural nails unless you have booked a soak-off with us.',
    details: 'To preserve nail integrity and schedule accuracy, we do not soak off foreign MMA acrylic or dip powder applied elsewhere. If you have existing Gel-X done by Annalia Atelier, please select the removal option when scheduling.'
  },
  {
    title: 'Booking Deposit & Confirmation',
    summary: 'A nominal deposit is required to reserve your private appointment window.',
    details: 'Deposits are credited directly toward your total service fee on the day of your appointment. Your booking is confirmed once the deposit receipt is received.'
  },
  {
    title: '24-Hour Rescheduling Notice',
    summary: 'We respectfully request at least 24 hours notice for any schedule changes.',
    details: 'As a private 1-on-1 studio, appointment slots are held exclusively for you. Rescheduling with 24h notice allows your deposit to roll over to a new date once.'
  },
  {
    title: 'Hygiene & Clinical Sterilization',
    summary: 'Hospital-grade autoclaved metal implements and single-use disposable files.',
    details: 'Your health and safety is paramount. All metal bits and cuticle tools undergo medical-grade disinfectant and sterilization between every client.'
  }
];
