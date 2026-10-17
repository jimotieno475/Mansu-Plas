/* ===== EDIT YOUR DETAILS HERE ===== */
export const CONTACT = {
  name: 'Mansu',
  phone: '+254 712 764 067',          // shown on the site and used for "Call"
  whatsapp: '254712764067',            // digits only, with country code, no +
  email: 'hello@mansuplas.example',
  office: 'Nairobi, Kenya',
  hours: 'Mon–Sat, 8am–6pm',
}

/* ===== PHOTOS: replace with your own (URL, or a file in /public like "/images/karen-1.jpg") ===== */
const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`
export const PHOTOS = {
  h1: u('1564013799919-ab600027ffc6'), h2: u('1600585154340-be6161a56a0c'), h3: u('1600596542815-ffad4c1539a9'), h4: u('1600607687939-ce8a6c25118c'),
  h5: u('1512917774080-9991f1c4c750'), h6: u('1580587771525-78b9dba3b914'), h7: u('1570129477492-45c003edd2be'), h8: u('1523217582562-09d0def993a6'),
  h9: u('1600566753190-17f0baa2a6c3'), h10: u('1605276374104-dee2a0ed3ce6'), h11: u('1613490493576-7fde63acd811'), h12: u('1568605114967-8130f3a36994'),
  kitchen: u('1556909114-f6e7ad7d3136'), living: u('1600210492486-724fe5c67fb0'), bedroom: u('1560448204-e02f11c3d0e2'), bath: u('1552321554-5fefe8c9ef14'),
}
export const heroSlides = [
  { src: u('1564013799919-ab600027ffc6', 2400), alt: 'A modern family home with a manicured lawn', home: 'k1' },
  { src: u('1600585154340-be6161a56a0c', 2400), alt: 'A contemporary villa glowing at dusk', home: 'k2' },
  { src: u('1512917774080-9991f1c4c750', 2400), alt: 'A large home with a swimming pool', home: 'k5' },
  { src: u('1580587771525-78b9dba3b914', 2400), alt: 'A grand home with a wide driveway', home: 'k9' },
]

/* Each home: add a YouTube link in `video` (watch, youtu.be or embed link) and the video plays on the page. */
const int = ['kitchen', 'living', 'bedroom', 'bath']
export const types = ['All', 'Villa', 'Townhouse', 'Maisonette', 'Bungalow', 'Apartment']
export const homes = [
  { id: 'k1', title: 'The Karen Rustic Residence', area: 'Karen', county: 'Nairobi', type: 'Villa', price: 85000000, beds: 5, baths: 6, size: 650, plot: '0.5 acre', parking: 4, year: 2021, status: 'For sale', photos: ['h1', ...int], video: '',
    blurb: 'Rustic charm and modern comfort in a quiet, gated Karen enclave.',
    desc: 'A beautifully crafted five-bedroom home set in a leafy semi-gated community. Double-volume living spaces open onto a landscaped garden, with a separate guest wing and a home office for working from home.',
    features: ['Gated community with 24/7 security', 'Standalone guest wing', 'Home office', 'Fireplace in the lounge', 'Walk-in pantry', 'Borehole and backup water', 'Solar water heating', 'DSQ (staff quarters)'] },
  { id: 'k2', title: 'Runda Contemporary Mansion', area: 'Runda', county: 'Nairobi', type: 'Villa', price: 148000000, beds: 6, baths: 7, size: 980, plot: '0.75 acre', parking: 6, year: 2022, status: 'New', photos: ['h2', ...int], video: '',
    blurb: 'Statement architecture, a pool and total privacy in Runda.',
    desc: 'Floor-to-ceiling glass, a double-height entrance and a heated pool define this six-bedroom mansion. Every bedroom is en-suite and the entertainment terrace is built for big gatherings.',
    features: ['Swimming pool and cabana', 'Home cinema', 'Lift access', 'Smart-home wiring', 'Generator and solar backup', 'Electric fence and CCTV', 'Landscaped gardens', 'Two staff quarters'] },
  { id: 'k3', title: 'Kilimani Sky Apartment', area: 'Kilimani', county: 'Nairobi', type: 'Apartment', price: 18500000, beds: 3, baths: 3, size: 185, plot: 'Penthouse level', parking: 2, year: 2023, status: 'For sale', photos: ['h3', ...int], video: '',
    blurb: 'Bright three-bedroom with city views and building amenities.',
    desc: 'A modern top-floor apartment with a wraparound balcony and open-plan living. The building offers a gym, rooftop lounge and fast fibre internet.',
    features: ['Rooftop lounge and gym', 'Backup generator', 'Fibre internet ready', 'Secure basement parking', 'Lift access', 'Balcony with city views', 'Fitted wardrobes', '24/7 security'] },
  { id: 'k4', title: 'Lavington Garden Townhouse', area: 'Lavington', county: 'Nairobi', type: 'Townhouse', price: 38000000, beds: 4, baths: 5, size: 340, plot: '0.2 acre', parking: 3, year: 2020, status: 'Reduced', photos: ['h4', ...int], video: '',
    blurb: 'A walkable, family-friendly townhouse in a secure gated close.',
    desc: 'Four ensuite bedrooms, a sunny courtyard and a kitchen made for hosting. Close to leading schools, shops and Nairobi\'s ring road.',
    features: ['Gated close with shared playground', 'Private courtyard', 'DSQ', 'Fitted kitchen', 'Borehole water', 'Solar water heating', 'CCTV and electric fence', 'Near top schools'] },
  { id: 'k5', title: 'Nyali Oceanview Villa', area: 'Nyali', county: 'Mombasa', type: 'Villa', price: 52000000, beds: 4, baths: 5, size: 420, plot: '0.4 acre', parking: 4, year: 2019, status: 'For sale', photos: ['h5', ...int], video: '',
    blurb: 'Sea breeze, a private pool and a short drive to Nyali Beach.',
    desc: 'A coastal villa with open verandahs, a private pool and tropical gardens. Ideal as a family home or a holiday retreat with strong rental potential.',
    features: ['Private swimming pool', 'Covered verandahs', 'Tropical landscaped garden', 'Sea breeze cross-ventilation', 'Staff quarters', 'Generator', 'Close to Nyali Beach', 'Rental potential'] },
  { id: 'k6', title: 'Diani Beach Retreat', area: 'Diani', county: 'Kwale', type: 'Villa', price: 34000000, beds: 3, baths: 4, size: 290, plot: '0.3 acre', parking: 3, year: 2021, status: 'New', photos: ['h6', ...int], video: '',
    blurb: 'A relaxed three-bedroom retreat minutes from white-sand beaches.',
    desc: 'Open-plan living flows out to a shaded patio and plunge pool. Managed as a holiday let when you are away, or lived in full time.',
    features: ['Plunge pool', 'Shaded patio and BBQ area', 'Beach access nearby', 'Air conditioning', 'Holiday-let management available', 'Solar power', 'Secure compound', 'Furnished option'] },
  { id: 'k7', title: 'Syokimau Family Maisonette', area: 'Syokimau', county: 'Machakos', type: 'Maisonette', price: 14800000, beds: 4, baths: 4, size: 230, plot: '50 x 100 ft', parking: 2, year: 2022, status: 'For sale', photos: ['h7', ...int], video: '',
    blurb: 'Spacious four-bedroom close to the SGR station and Mombasa Road.',
    desc: 'A well-finished maisonette in a quiet gated estate with ample parking and a private backyard. A smart pick for families who commute by rail.',
    features: ['Gated estate', 'Private backyard', 'DSQ', 'Water and electricity connected', 'Ready title deed', 'Near SGR Syokimau', 'Tarmac access road', 'Shared amenities'] },
  { id: 'k8', title: 'Kitengela Starter Bungalow', area: 'Kitengela', county: 'Kajiado', type: 'Bungalow', price: 8900000, beds: 3, baths: 2, size: 140, plot: '1/8 acre', parking: 2, year: 2021, status: 'For sale', photos: ['h8', ...int], video: '',
    blurb: 'An affordable three-bedroom bungalow with room to extend.',
    desc: 'A neat, well-built bungalow on a generous plot with extra land to extend. Excellent value for first-time buyers and investors.',
    features: ['Ready title deed', 'Room to extend', 'Fenced and gated', 'Borehole water', 'Tiled throughout', 'Near schools and shops', 'Quiet neighbourhood', 'Flexible payment guidance'] },
  { id: 'k9', title: 'Naivasha Lakeside House', area: 'Naivasha', county: 'Nakuru', type: 'Villa', price: 46000000, beds: 5, baths: 5, size: 520, plot: '1 acre', parking: 5, year: 2018, status: 'Reduced', photos: ['h9', ...int], video: '',
    blurb: 'Lake views, big skies and weekends that start on a porch.',
    desc: 'A five-bedroom lake house on a full acre with mature trees, a fireplace lounge and sweeping verandahs. Perfect as a weekend escape or a permanent move out of the city.',
    features: ['Lake views', 'One-acre mature garden', 'Fireplace lounge', 'Wraparound verandahs', 'Guest cottage', 'Borehole and storage tanks', 'Solar backup', 'Two hours from Nairobi'] },
  { id: 'k10', title: 'Nanyuki Highland Cottage', area: 'Nanyuki', county: 'Laikipia', type: 'Bungalow', price: 21000000, beds: 3, baths: 3, size: 210, plot: '0.5 acre', parking: 3, year: 2020, status: 'For sale', photos: ['h10', ...int], video: '',
    blurb: 'Cool air, mountain views and a warm stone fireplace.',
    desc: 'A cosy highland cottage with timber ceilings and big windows facing Mt Kenya. Quiet, secure and close to the conservancies.',
    features: ['Mt Kenya views', 'Stone fireplace', 'Timber ceilings', 'Established garden', 'Staff quarters', 'Borehole water', 'Near conservancies', 'Secure fenced plot'] },
]
export const areas = [
  ['Karen', 'Nairobi', 'Leafy and quiet', 'h1'], ['Runda', 'Nairobi', 'Private and grand', 'h2'], ['Kilimani', 'Nairobi', 'Lively and central', 'h3'],
  ['Nyali', 'Mombasa', 'Coastal calm', 'h5'], ['Diani', 'Kwale', 'Beach-side living', 'h6'], ['Naivasha', 'Nakuru', 'Lake and sky', 'h9'],
]
export const why = [
  ['Verified listings', 'Every home is checked in person and its title is confirmed before it is listed.', 'M16 4l10 4v8c0 6-4 10-10 12C10 26 6 22 6 16V8zM11 16l4 4 7-8'],
  ['See it before you visit', 'Video tours let you walk through each home from your phone, then book only the ones you love.', 'M5 8h16v16H5zM21 14l6-4v12l-6-4'],
  ['One person, start to finish', 'Mansu handles viewings, negotiation and paperwork so you always know who to call.', 'M16 6a5 5 0 100 10 5 5 0 000-10zM6 27c1-6 4-9 10-9s9 3 10 9'],
  ['Honest, clear pricing', 'Prices, sizes and plot details are listed up front. No surprises at the signing table.', 'M6 10h20M6 16h20M6 22h12'],
]
export const steps = [
  ['Browse and watch', 'Filter homes, save favourites and watch the video tour of each one.'],
  ['Book a viewing', 'Message Mansu on WhatsApp and pick a time that suits you.'],
  ['Check the details', 'We help you review the title, survey and costs before you commit.'],
  ['Get your keys', 'Sign, pay and move in, with guidance on financing and transfer.'],
]
export const reviews = [
  ['I watched the video, loved it, and the viewing two days later confirmed it. We moved in within a month.', 'Wanjiru K.', 'Bought in Karen'],
  ['Mansu answered every question on WhatsApp, even late at night. The process felt calm from start to finish.', 'Brian O.', 'Bought in Syokimau'],
  ['Clear prices and no pressure. It is the reason we trusted them with our first home.', 'Amina and Said', 'Bought in Nyali'],
]
export const stats = [[12, 'years in Kenyan property', ''], [480, 'homes sold', '+'], [18, 'counties covered', ''], [97, 'buyers recommend us', '%']]
