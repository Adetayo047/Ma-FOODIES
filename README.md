# Ma'FOODIES Website

The one-page website for **Ma'FOODIES — A Taste of Eminence**, a Nigerian catering business. It covers services, signature dishes, the *Ma'Cooking Journey* cookbook, the business's story and contact details. Orders and enquiries go through WhatsApp, and the cookbook is sold on Selar.

Built with [Next.js 15](https://nextjs.org), [Tailwind CSS v4](https://tailwindcss.com) and [lucide-react](https://lucide.dev) icons.

## Run it locally

You need [Node.js](https://nodejs.org) 18.18 or newer.

```bash
npm install     # first time only
npm run dev
```

Then open http://localhost:3000. To view it on a phone on the same Wi-Fi, use the "Network" address that `npm run dev` prints, e.g. `http://192.168.x.x:3000`.

Other commands:

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `npm run build` | Builds the production version             |
| `npm run start` | Serves the production build (after build) |

## Editing content

**Almost every change happens in [`content.ts`](content.ts).** It holds all text, prices, phone numbers, links and image paths, so you rarely need to touch the page code.

| What you want to change                          | Where in `content.ts`               |
| ------------------------------------------------ | ----------------------------------- |
| WhatsApp number used by every order button       | `whatsappNumber` (digits only, e.g. `2348129626017`) |
| Phone, email, opening hours, social links        | `site`                              |
| "Contact Developer" link in the footer           | `site.developer`                    |
| Hero headline, intro text and buttons            | `hero`                              |
| Services cards and the Saturday note             | `services`                          |
| Signature dishes (name, description, photo)      | `dishes.items`                      |
| Cookbook text, prices, Selar link, hardcopy order | `cookbook`                         |
| Our Story text, photo and stats                  | `story`                             |
| Contact section text                             | `contact`                           |

WhatsApp messages are written as plain text (e.g. `"Hello Ma'FOODIES! I would like to place an order."`). They're converted into proper links automatically.

## Images and video

Media lives in `public/` and is referenced from `content.ts` as `/images/...` or `/videos/...`.

| File                                    | Used for                              |
| --------------------------------------- | ------------------------------------- |
| `images/mafoodies-logo.jpeg`            | Logo in the navbar and footer, browser tab icon |
| `images/signature-dish.jpeg`            | Hero fallback image, first dish card, link-preview image |
| `images/pepper-soup.jpeg`               | Dish card                             |
| `images/appetizers.jpeg`                | Potato croquettes & kebab card (low resolution — replace if a larger copy exists) |
| `images/pounded-yam.jpeg`               | Dish card                             |
| `images/cookbook-order.jpeg`            | Cookbook section                      |
| `images/promotional-flyer-new.jpeg`     | Our Story section                     |
| `videos/hero.mp4`                       | Background video at the top of the page |

Not currently shown on the page, kept for later: `smoky-jollof-moimoi.jpeg`, `sonia-portrait.jpeg`, and the older `cookbook-cover.jpeg` and `promotional-flyer.jpeg`.

**To replace a photo**, either overwrite the file with a new one of the same name, or add the new file to `public/images/` and update its path in `content.ts`. If an image is missing, its spot shows a plain brown gradient rather than a broken image.

## Project structure

```
app/
  layout.tsx       Fonts, page title, search/social preview metadata
  page.tsx         All page sections (hero, services, dishes, cookbook, story, contact, footer)
  globals.css      Colour theme, shadows, fade/slide animations
components/
  navbar.tsx       Floating navbar with mobile menu
  social-icons.tsx WhatsApp, Instagram, Facebook, TikTok icons
content.ts         All editable text, links and image paths
public/            Images and video
```

The colour palette (dark brown background, gold `#d4af37` accent) is defined at the top of `app/globals.css`. Headings use Playfair Display and body text uses Source Sans 3, both loaded in `app/layout.tsx`.

## Deploying

The live site is hosted on [Vercel](https://vercel.com) at https://mafoodiess.vercel.app. Changes made locally **do not appear there until you deploy**.

- **From GitHub:** push this folder to the GitHub repository connected to the Vercel project. Vercel rebuilds and publishes automatically.
- **From your computer:** run `npx vercel login` once, then `npx vercel link` to connect this folder to the `mafoodiess` project, and `npx vercel --prod` to publish.

Before deploying, run `npm run build` to catch any errors.
