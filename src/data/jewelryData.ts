export interface Showroom {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  hours: string;
  highlights: string[];
  image: string;
  consultant: string;
}

export interface DiamondCut {
  id: string;
  name: string;
  facets: number;
  description: string;
  lightCharacteristics: string;
  image: string;
}

export interface VaultPiece {
  id: string;
  title: string;
  category: 'Bridal Solitaire' | 'Custom Halo' | 'Estate Collection' | 'Designer Trunk' | 'Swiss Horology';
  carat: string;
  metal: string;
  price: string;
  image: string;
  badge?: string;
  details: string[];
}

export const SHOWROOMS_DATA: Showroom[] = [
  {
    id: 'harvard-flagship',
    name: 'Midtown Harvard Flagship',
    district: 'Historic Midtown Tulsa',
    address: '1137 S. Harvard Ave, Tulsa, OK 74112',
    phone: '(918) 834-3371',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    highlights: ['Private VIP Diamond Salon', 'Master Bench Goldsmiths On-Site', 'Certified Gemological Laboratory', 'Complimentary Champagne Consultation'],
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    consultant: 'Ernest & Sarah Moody — Senior Diamond Curators'
  },
  {
    id: 'utica-square',
    name: 'Utica Square Haute Joaillerie',
    district: 'Utica Square Shopping District',
    address: '1814 Utica Square, Tulsa, OK 74114',
    phone: '(918) 743-8888',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    highlights: ['Designer Trunk Show Exclusives', 'Curated Rare Gemstone Vault', 'Private Bridal Suite', 'Fine Timepiece Horology Service'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    consultant: 'Julianne Vance — Bridal Couture Specialist'
  },
  {
    id: '71st-lewis',
    name: 'South Tulsa Showroom',
    district: '71st & Lewis Promenade',
    address: '7102 S. Lewis Ave, Tulsa, OK 74136',
    phone: '(918) 492-2300',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    highlights: ['Custom Engagement Design Center', '3D Wax Printing Studio', 'Pre-Owned Swiss Watch Gallery', 'Direct Diamond Sourcing'],
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    consultant: 'Marcus Sterling — Custom Atelier Director'
  },
  {
    id: '51st-sheridan',
    name: 'Sheridan Crossing Salon',
    district: 'Midtown Crossing & Farm Shopping',
    address: '5045 S. Sheridan Rd, Tulsa, OK 74145',
    phone: '(918) 627-3100',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    highlights: ['Full Laser Jewelry Repair Suite', 'Heirloom Restoration Workshop', 'Natural & Lab Diamond Comparison Gallery', 'Express Prong Re-tipping'],
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80',
    consultant: 'Robert Hayes — Master Restorer & Certified Appraiser'
  },
  {
    id: '68th-memorial',
    name: 'East Tulsa Memorial Showroom',
    district: '68th & Memorial Corridor',
    address: '8140 E. 68th St, Tulsa, OK 74133',
    phone: '(918) 250-1200',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    highlights: ['Effy & Lali Fine Brand Boutique', 'Anniversary Band Collection', 'Instant Diamond Trade-Up Evaluation', 'Complimentary Sonic Cleaning'],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    consultant: 'Katherine Mercer — Fine Brand Ambassador'
  },
  {
    id: 'broken-arrow',
    name: 'Broken Arrow Signature Salon',
    district: 'Rose District & Kenosha',
    address: '2013 W. Kenosha St, Broken Arrow, OK 74012',
    phone: '(918) 258-2500',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    highlights: ['Local Community Goldsmithing', 'Grooms Ring Bar & Whiskey Lounge', 'Custom Family Birthstone Heirlooms', 'Private Fitting Rooms'],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    consultant: 'David Ross — Senior Gemologist'
  }
];

export const DIAMOND_CUTS: DiamondCut[] = [
  {
    id: 'round-brilliant',
    name: 'Round Brilliant',
    facets: 58,
    description: 'The definitive standard of optical brilliance. Engineered with 58 mathematically aligned facets to maximize light return and prismatic fire dispersion.',
    lightCharacteristics: 'Maximum White Light Return & Intense Rainbow Scintillation',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'emerald-cut',
    name: 'Emerald Cut',
    facets: 57,
    description: 'The epitome of architectural elegance. Step-cut facets produce a mesmerizing hall-of-mirrors effect with dramatic flashes of pure crystalline light.',
    lightCharacteristics: 'Vivid Step-Cut Mirror Reflections & Vintage Dignity',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'oval-brilliant',
    name: 'Oval Brilliant',
    facets: 56,
    description: 'A contemporary romance. Combines the high brilliance of the round cut with an elongated contour that creates an exceptionally flattering silhouette on the hand.',
    lightCharacteristics: 'High Dispersion Fire with Elongated Finger Coverage',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cushion-halo',
    name: 'Cushion Brilliant',
    facets: 64,
    description: 'Soft pillow silhouette combining classical antique pillow geometry with modern high-facet pavilion cutting for an alluring, candlelight glow.',
    lightCharacteristics: 'Broad Spectral Flashes & Romantic Soft-Corner Glow',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80'
  }
];

export const VAULT_PIECES: VaultPiece[] = [
  {
    id: 'solitaire-platinum-round',
    title: 'The Harvard Platinum 4.20ct Solitaire',
    category: 'Bridal Solitaire',
    carat: '4.20 ct GIA D-VVS1',
    metal: '950 Hand-Forged Platinum',
    price: '$48,500',
    badge: 'Moody’s Signature',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    details: ['Triple Excellent Cut, Symmetry & Polish', 'Four-Prong Wire Basket Setting', 'Invisible Under-Halo of Hidden Diamonds', 'Hand-Polished Comfort Fit Shank']
  },
  {
    id: 'cushion-pave-halo',
    title: 'The Utica French Micro-Pavé Cushion',
    category: 'Custom Halo',
    carat: '3.15 ct GIA E-VS1',
    metal: '18K White Gold & Platinum Head',
    price: '$29,800',
    badge: 'Private Atelier',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    details: ['0.85ct F/VS Accent French Pavé', 'Floating Cathedral Shoulder Architecture', 'Hand-Crafted in Midtown Tulsa Studio', 'GIA Inscription Number Verified']
  },
  {
    id: 'emerald-step-eternity',
    title: 'The Crown Emerald-Cut Platinum Band',
    category: 'Estate Collection',
    carat: '5.40 ct Total Weight',
    metal: 'Pure 950 Platinum',
    price: '$34,200',
    badge: 'Masterwork',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    details: ['Shared-Prong Step-Cut Eternity Setting', 'Matched Color & Clarity Calibration', 'Solid Gallery with Open Light Channels', 'Signature Moody’s Heirloom Warranty']
  },
  {
    id: 'effy-panthera-ring',
    title: 'Effy Collection Royal Ceylon Sapphire Ring',
    category: 'Designer Trunk',
    carat: '4.80 ct Natural Sapphire',
    metal: '18K Yellow Gold & Diamond Pavé',
    price: '$18,900',
    badge: 'Exclusive Trunk Show',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    details: ['Unheated Natural Ceylon Sapphire', '1.20ct Brilliant Diamond Accents', 'Moody’s Authorized Effy Showcase', 'Certified Origin Documentation']
  },
  {
    id: 'swiss-chronometer',
    title: 'Geneva Certified Automatic Chronometer',
    category: 'Swiss Horology',
    carat: 'COSC Certified',
    metal: 'Oystersteel & 18K White Gold Bezel',
    price: '$21,400',
    badge: 'Certified Pre-Owned',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    details: ['Pressure-Tested to 100M Depth', 'Full Factory Overhaul Provenance', 'Complete Box, Warranty Card & Chronometer Seal', '2-Year Moody’s In-House Horology Guarantee']
  },
  {
    id: 'radiant-yellow-diamond',
    title: 'The Oklahoma Sunrise Fancy Yellow Solitaire',
    category: 'Bridal Solitaire',
    carat: '3.75 ct Fancy Intense Yellow',
    metal: '18K Yellow Gold Cup with Platinum Shank',
    price: '$42,000',
    badge: 'One-of-a-Kind',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    details: ['Natural Fancy Intense Yellow Diamond', 'Shield-Cut Diamond Trapezoid Side Stones', 'Custom Hand-Built Double Claw Prongs', 'Appraised at $56,000 Replacement Value']
  }
];

export const ATELIER_STEPS = [
  {
    step: '01',
    title: 'Private Sketch & Stone Sourcing',
    timeframe: 'Day 1 — 3',
    description: 'Meet privately with our senior gemologist over espresso or champagne at any of our 6 Tulsa salons. Together, we inspect loose certified natural and lab-grown stones under 40x magnification and sketch your ring’s exact silhouette.'
  },
  {
    step: '02',
    title: 'Architectural 3D Wax Prototype',
    timeframe: 'Day 4 — 7',
    description: 'We generate an exact micro-milled wax sculpture of your custom piece. You try it on your hand to verify proportions, finger comfort curvature, and stone height before metal casting begins.'
  },
  {
    step: '03',
    title: 'Local Tulsa Platinum & Gold Casting',
    timeframe: 'Day 8 — 12',
    description: 'Our master goldsmiths pour molten 950 platinum or 18K royal gold directly in our Midtown laboratory, eliminating third-party overseas supply chains and ensuring flawless molecular density.'
  },
  {
    step: '04',
    title: 'Microscope Setting & Master Polish',
    timeframe: 'Day 13 — 14',
    description: 'Every diamond prong and micro-pavé accent is set by hand under high-power stereoscopic microscopes, hand-buffed to a mirror sheen, laser-engraved with your milestone date, and certified for a lifetime.'
  }
];
