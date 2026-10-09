# T3C Gardens — Digital Menu

A mobile-friendly digital menu for T3C Gardens in Lilayi, Lusaka. The site is a static HTML, CSS, and JavaScript project: there is no backend, package manager, framework, or build step.

Published address listed for the project: **https://t3cgardens.github.io/menu/**

## Project files

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── menu.js
│   └── app.js
├── assets/
│   └── venue and food image files
└── README.md
```

| File | What it contains |
| --- | --- |
| `index.html` | Page structure, hero, menu/search placeholders, contact and events sections; loads the CSS and JavaScript. |
| `css/style.css` | Colors, typography, responsive layout, menu cards, photo breaks, and print styles. |
| `js/menu.js` | The `MENU` data object: business details, contacts, opening-hours summary, events, social links, and all menu items and prices. |
| `js/app.js` | Renders the data and implements search, category navigation, image fallbacks, event/contact links, and social links. |
| `assets/` | Images used by the page and other image files kept with the project. |
| `README.md` | Project and editing guide. |

The page loads `js/menu.js` before `js/app.js`. The first file exposes `window.MENU`; the second uses that data to fill the page and render the menu.

## Current menu sections

Categories and their order are defined in `MENU.categories` in `js/menu.js`:

1. Breakfast
2. Main Course
3. Platters
4. Matebeto (Traditional)
5. Soups
6. Salads
7. Weekend Specials
8. Bar & Drinks

Bar & Drinks is divided into named groups. Other categories use a direct `items` list. The category navigation is generated from this data, so its labels and order follow the array.

## Editing content

For normal business updates, edit `js/menu.js`. Keep the existing object and array structure, and use commas between properties and items.

### Menu items

Add or edit an item inside the appropriate category's `items` array. A basic item looks like this:

```js
{
  name: "Beef Burger",
  price: 150,
  desc: "Served with chips."
}
```

The renderer also supports optional `image`, `imageAlt`, `tags`, `popular`, `new`, and `unavailable` fields. For example:

```js
{
  name: "Pork Chops",
  price: 200,
  desc: "Served with a choice of nshima, rice or chips.",
  unavailable: true
}
```

An unavailable item stays visible and is labelled “Currently unavailable.” Remove the flag when it is available again. Items without a numeric price display the configured price-on-request text (`restaurant.priceOnRequest`).

Some categories or groups set `combineSamePrice: true`. In those places, eligible items without descriptions, images, tags, or an unavailable flag may be combined into one display line when they share a price.

### Business, contact, and event details

Edit the `restaurant` object in `js/menu.js` to change:

- Name, tagline, hero text, currency, and menu notes
- Address and Google Maps URL
- Phone, WhatsApp number/link, and email
- Opening-hours summary or optional day-by-day `hours` entries
- Instagram, Facebook, and TikTok URLs
- Optional logo and hero image paths
- Event copy, enquiry message, event types, and leisure information

The current `hours` array is empty, so the page displays the `hoursSummary` (“Open Daily”) in the hours card and hero status. When supplying a timetable, use entries with a `day` and `hours` (or `time`) value.

Keep contact and event information accurate. The footer links and event-enquiry button are generated from this data; avoid duplicating those URLs in `index.html`.

## Images

Check spelling, capitalization, and extension when using an asset. Paths are case-sensitive on many static hosts. New menu-item photos can be placed in `assets/` and referenced with a relative path such as `assets/dish-name.jpg`. Add a useful `imageAlt` description.

### Current image references

| File | Current use |
| --- | --- |
| `hero-gardens.jpg` | Hero image path in `index.html` and `js/menu.js`. |
| `gardens-leisure.jpg` | Hero image fallback, final menu photo break, and print-page background. |
| `food-platter.jpg` | Photo break before Main Course. |
| `cocktail.jpg` | Photo break before Weekend Specials. |
| `beer.jpg` | Photo break before Bar & Drinks. |
| `Twix.jpg` | Small image in the final leisure photo break. |
| `grill-charcoal.jpg` | Small image in the final leisure photo break. |

Other image files currently present but not referenced by the page are `bliss.jpg`, `bridge.jpg`, `floating.jpg`, `scenes.jpg`, `swimming.jpg`, `Tbone.jpg`, `views.jpg`, and `wow.jpg`. They can remain unused until the design calls for them.

**Hero image format note:** despite its filename, `assets/hero-gardens.jpg` has an HEIC/HEIF file signature, not a JPEG signature. The page has an image-error fallback to `gardens-leisure.jpg`; browser support for HEIC varies. For consistent display, replace that file with a real JPEG at the same path, or update the references when changing the filename.

## How the page behaves

- The menu search matches item names, descriptions, tags, category names, and drink-group names. It hides non-matching items, empty groups/categories, and photo breaks, and shows a result count.
- Clearing search or selecting a category restores the full menu. Category buttons scroll to sections, and the current section is highlighted while scrolling when the browser supports `IntersectionObserver`.
- Menu photography appears between selected categories and after the menu. It is hidden during an active search.
- Contact, directions, event-enquiry, and configured social links are filled from `js/menu.js`.
- Layouts adapt for desktop, tablet, and mobile screens. The menu uses the Fraunces and Inter fonts from Google Fonts, with local system fallbacks.
- A print stylesheet formats the menu for A4 portrait pages. Use the browser’s Print command to print it or save it as a PDF. The browser may need its “print backgrounds” option enabled for the full background treatment.

## Run and publish

For a quick local preview, open `index.html` in a browser. To serve the folder locally, run a static HTTP server from the project directory; for example:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000`. Internet access is needed for the externally hosted Google Fonts; the rest of the page is local.

The site is structured for static hosting: keep `index.html` at the published root and preserve the `css/`, `js/`, and `assets/` relative paths. The project’s listed public address is the GitHub Pages URL above. After publishing a change, check the page on a phone and confirm that menu items, images, search, category navigation, contact links, and the print view work.

## Before publishing menu updates

- Verify food and drink prices, item names, spelling, and descriptions against the current menu.
- Confirm opening-hours, contact, social, and event information.
- Confirm every newly referenced image exists at the exact path and loads.
- Check search and category navigation on a phone.
- Review the print preview if the printed menu is used.
