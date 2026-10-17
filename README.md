# Mansu Plas — Homes for sale in Kenya (React + Vite + Tailwind)

    npm install
    npm run dev      # local dev server
    npm run build    # production build in /dist

## Make it yours (all in `src/data.js`)
- **Contact details:** `CONTACT` (phone, WhatsApp number in digits like `2547XXXXXXXX`, email, office, hours).
- **Homes:** the `homes` list. Edit price, beds, baths, size, plot, features and description.
- **YouTube video:** paste a link into a home's `video` field (watch, youtu.be or embed links all work). It plays on the home's page. Empty = "Search YouTube" fallback.
- **Photos:** `PHOTOS` (URL, or a file in `public/images/` such as `/images/karen-1.jpg`). Each home's `photos` list picks the gallery order.

Favourites are saved in the browser (localStorage). Enquiries open WhatsApp, a call or an email with the message pre-filled, so no backend is needed. The listings, phone number and email shown are sample placeholders.
