# Prince Art Packages — interactive redesign

26 content pages redesigned using the company's existing public content and imagery, with the Aster Hale reference's monochrome opening, layered photographic cards, floating navigation, large typography and light editorial sections.

## Included

- Home, About, Products, Capabilities, Innovation, Quality, Industries, Journal, Contact, Case Studies, Privacy and Terms.
- Eight product pages with technical specification dialogs and print actions.
- Six complete journal articles.
- Responsive mobile navigation, product carousel, FAQ disclosures, scroll transitions and reduced-motion support.
- Locally stored product images, brand favicon and fonts.
- Page-specific titles, descriptions and preserved social image metadata.

## Run locally

1. Extract the ZIP and open the `prince-art-website` folder.
2. Install Node.js 18 or later if it is not already installed.
3. Open a terminal in that folder and run:

   ```sh
   node serve.mjs
   ```

4. Open **http://127.0.0.1:4173/** in your browser.
5. Press **Ctrl+C** in the terminal to stop the server.

`npm start` runs the same server if npm is installed. No `npm install` or build command is required. On Windows PowerShell, an alternative port can be selected with `$env:PORT=4174` before running `node serve.mjs`.

This website uses plain HTML, CSS and JavaScript, not React, Vite or Next.js. All website source is included directly. The `dist` directory is the deployable static website. Serve it from an HTTP server with directory-index support; opening individual HTML files by double-clicking will not resolve root-relative links correctly.

## Files

- `dist/index.html`: homepage.
- `dist/<page>/index.html`: all other page source files, including nested product and journal routes.
- `dist/design.css`: shared responsive design.
- `dist/interactions.js`: navigation, motion, carousel, FAQ-related behavior, specification dialogs and enquiry preparation.
- `dist/assets/images/`: original company product imagery and favicon files.
- `dist/assets/fonts/`: local Inter font, Remix Icon font and icon stylesheet.
- `serve.mjs`: dependency-free local Node.js server.
- `package.json`: optional start and syntax-check scripts; no package dependencies.
- `.openai/hosting.json`: Sites project identity and static-output configuration. Contains no authentication token. Not required by other static hosts.
- `page-inventory.json`: original URL to new route mapping.

Upload the **contents of `dist`** to the web root of a static host to deploy elsewhere. No `node_modules` or build cache is needed. The Node server is for local preview, not a production application backend.

## External connections

Core page styling, JavaScript, images and fonts are bundled and work without third-party CDNs. The contact map uses Google Maps and requires internet access. Email and phone links use the visitor's email/phone application. The secure-enquiry link opens the existing Prince Art Packages website.

## Enquiries and launch

The quote form validates required fields, prepares an email to sales@princeartpackages.com, and can download an enquiry as a text file. It never claims to have sent an enquiry automatically. Artwork is attached by the visitor in their email application. A clearly labelled link opens the original website's secure enquiry form for direct submission.

The original site's PHP enquiry backend uses session-bound CSRF protection. Its code and credentials are not available from the public site. Native email delivery and on-site artwork uploads require connecting the owner's backend or a chosen form service before replacing the production site. No test message was sent.

This delivery is a separate private review site. The princeartpackages.com domain and original site have not been changed. Public sharing, domain migration and production form integration remain launch steps.

Business claims, certifications, testimonials and technical specifications were carried over from the source website; they were not independently audited. The source uses multiple contact email addresses and phone numbers; relevant source contacts were preserved.

`page-inventory.json` maps all 26 routes to their original content URLs. On a future domain migration, set permanent redirects for old PHP URLs and query-string product/article URLs to their corresponding new routes. Update the social metadata origin if moving to another domain.

## Validation

- All 26 generated HTML pages checked for local links, image/font references, fragment destinations and one primary heading.
- JavaScript syntax checked with Node.js.
- Mobile overflow checks across all main page types and representative product/article detail pages.
- Browser checks for navigation, specifications dialog and Escape dismissal, quote product/audit prefill, form field validation, FAQ and carousel behavior.
- WebMCP enquiry-staging tool validated with valid and invalid input. It only stages visible form values and does not submit data.

Source content retrieved on 23 September 2026.
