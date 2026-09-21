# T3C Gardens — Digital Menu

A fast, mobile-first digital menu for **T3C Gardens** in Lilayi, Lusaka.

The site is designed primarily for use through a **QR code at the venue**. It has no backend, no build step and no framework — just HTML, CSS and JavaScript.

Live site:

**https://t3cgardens.github.io/menu/**

---

## 1. Project structure

```text
T3C-Gardens/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── menu.js
│   └── app.js
├── assets/
└── README.md
```

### What each file does

| File            | Purpose                                                                   | Normally edit it?                                     |
| --------------- | ------------------------------------------------------------------------- | ----------------------------------------------------- |
| `index.html`    | Page structure and major sections                                         | **No**                                                |
| `css/style.css` | Colours, typography, layout, spacing and responsive design                | Only for design changes                               |
| `js/menu.js`    | **Business information, menu items, prices, events and links**            | **Yes — this is the main content file**               |
| `js/app.js`     | Builds the menu and handles search, navigation, links and dynamic content | Usually **No**                                        |
| `assets/`       | Photos, logo and other visual assets                                      | Add/remove assets here                                |
| `README.md`     | Project documentation                                                     | Update when the project structure or workflow changes |

The project intentionally keeps **content separate from presentation and behaviour**.

---

# 2. Current site features

The current digital menu includes:

* Responsive T3C Gardens hero section
* Garden photography
* Category navigation
* Searchable menu
* Menu categories and sub-groups
* Menu item names, prices and descriptions
* Optional menu-item images
* Weekend specials
* Food and drinks sections
* Visual photography breaks between sections
* Gardens/leisure information
* Event information
* Google Maps directions
* Phone contact
* WhatsApp contact
* Email contact
* Instagram
* Facebook
* TikTok
* Mobile-friendly layout
* Sticky category navigation
* "Back to top" navigation

The **menu remains the primary purpose of the site**. Photography and additional sections are intended to support the menu rather than turn the site into a gallery or general-purpose website.

---

# 3. Editing the menu

Most content changes belong in:

```text
js/menu.js
```

The main business information is stored inside the `restaurant` object.

Menu categories are stored in:

```js
categories: [...]
```

### Change a price

Find the item and change its `price`:

```js
{
  name: "Pork Chops",
  price: 200
}
```

Change only the number if the price changes.

---

## Add an item

Copy an existing item and change its values:

```js
{
  name: "Beef Burger",
  price: 150,
  desc: "Served with chips."
}
```

Place it inside the appropriate category's `items` list.

---

## Remove an item

Delete the complete item object, including its surrounding `{` and `}`.

For example:

```js
{
  name: "Beef Burger",
  price: 150
}
```

Remove the whole block.

---

## Temporarily mark an item unavailable

The application supports unavailable items.

Use:

```js
{
  name: "Pork Chops",
  price: 200,
  unavailable: true
}
```

The item remains on the menu but is visually reduced and marked as unavailable.

Remove the `unavailable: true` line when the item is available again.

---

# 4. Adding photographs to menu items

Individual menu items **can** have photographs, but they should be used intentionally.

Add the image file to:

```text
assets/
```

Then add:

```js
{
  name: "Pork Chops",
  price: 200,
  image: "assets/pork-chops.jpg",
  imageAlt: "Grilled pork chops",
}
```

`imageAlt` should accurately describe the image.

### Important design rule

Do **not** add an image to one random menu item unless the design intentionally treats that item as a featured item.

A single photographed item can look like a special/signature dish.

The current site instead uses photography primarily as part of the **overall page composition**, while keeping the menu items visually consistent.

---

# 5. Categories and menu groups

Categories are defined in `js/menu.js`.

A normal category can contain an `items` array:

```js
{
  id: "main-course",
  name: "Main Course",

  items: [
    {
      name: "Chicken Stir Fry",
      price: 180,
      desc: "Served with rice."
    }
  ]
}
```

A category can also contain `groups`.

This is currently used for the **Bar & Drinks** section:

```js
{
  id: "bar-drinks",
  name: "Bar & Drinks",

  groups: [

    {
      name: "Cocktails",

      items: [
        {
          name: "Classic Mojito",
          price: 150
        }
      ]
    }

  ]
}
```

The application automatically renders these groups as sub-headings.

Categories appear in the same order as defined in `menu.js`.

---

# 6. Business information

Business information is stored in:

```js
restaurant: {
  ...
}
```

This includes:

* business name
* tagline
* hero text
* currency
* location
* Google Maps link
* phone
* WhatsApp
* email
* opening-hours information
* social-media links
* logo
* hero image
* events/leisure information

Keep this information in `menu.js` rather than hard-coding duplicate values into HTML.

---

# 7. Social media

The current social links are stored under:

```js
restaurant.social
```

Example:

```js
social: {

  facebook: "...",

  instagram: "...",

  tiktok: "..."

}
```

The footer reads these values and generates the social links automatically.

This means social URLs can be changed in `menu.js` without manually editing the HTML footer.

---

# 8. Google Maps and contact links

Google Maps is configured in:

```js
restaurant.maps
```

Phone:

```js
restaurant.phone
```

WhatsApp:

```js
restaurant.whatsapp
```

and:

```js
restaurant.whatsappLink
```

Email:

```js
restaurant.email
```

These are connected to the appropriate buttons and footer/contact elements automatically.

Do not hard-code alternate versions of these details into the HTML unless there is a specific structural reason.

---

# 9. Events and leisure information

The events section is controlled through:

```js
restaurant.events
```

It currently supports information such as:

* weddings
* birthdays
* private functions
* outdoor events
* fishing
* gardens/open grounds
* bars
* grill-for-yourself

The events section can also provide an appropriate event-enquiry call-to-action.

Keep event information factual and current.

Do not add services that T3C Gardens has not confirmed.

---

# 10. Images and assets

The current `assets/` folder contains the photography used throughout the site.

Examples include:

```text
assets/
├── hero-gardens.jpg
├── gardens-leisure.jpg
├── food-platter.jpg
├── beer.jpg
├── cocktail.jpg
├── grill-charcoal.jpg
└── Twix.jpg
```

Always check the actual filename and extension before referencing an image.

### Important

GitHub Pages is case-sensitive.

These are different filenames:

```text
Twix.jpg
twix.jpg
```

An incorrect filename or capitalisation will cause the image to fail to load.

When adding a new image:

1. Put it inside `assets/`.
2. Reference the exact filename in the code.
3. Keep the file reasonably compressed so the menu remains fast on mobile data.
4. Use a meaningful `alt`/`imageAlt` value where appropriate.

---

# 11. How photography is used

Photography is intentionally used to give different parts of the page different moods.

The design currently uses photography around areas such as:

* T3C Gardens / hero
* food
* grill
* weekend specials
* bar and drinks
* gardens and leisure

The goal is:

**menu first, photography second.**

Avoid filling the site with unnecessary galleries or large image sections.

Not every image in `assets/` needs to be used.

A photograph should only be added where it genuinely improves the page.

---

# 12. Search

Search is handled by:

```text
js/app.js
```

It searches across menu content and can match information such as:

* item names
* descriptions
* categories
* groups
* tags where present

When searching:

* non-matching items are hidden
* empty groups are hidden
* empty categories are hidden
* a result count is displayed
* the search can be cleared
* the full menu can be restored

The photo sections are hidden during an active search so that the search experience stays focused on menu results.

**Do not remove or bypass the existing search logic when making visual changes.**

---

# 13. Category navigation

The category navigation is generated from the categories in `menu.js`.

Clicking a category:

* clears an active search
* scrolls to the corresponding menu section
* respects the sticky navigation offset

The active category can also be highlighted while scrolling.

Because the navigation is generated from the data, changing category names/order in `menu.js` automatically updates the navigation.

---

# 14. Responsive design

The site is designed to work across:

* desktop
* laptops
* tablets
* mobile phones

Particular attention should be paid to:

* category navigation
* search
* menu cards
* image cropping
* footer/contact sections
* social links
* typography
* spacing

Before publishing a major change, test the menu on a real phone.

---

# 15. Common mistakes that can break the menu

If the page suddenly goes blank after editing `menu.js`, the problem is usually a JavaScript syntax error.

Common causes:

### Missing comma

Incorrect:

```js
{
  name: "Chicken",
  price: 180
}

{
  name: "Beef",
  price: 170
}
```

Correct:

```js
{
  name: "Chicken",
  price: 180
},

{
  name: "Beef",
  price: 170
}
```

### Missing quote

Incorrect:

```js
name: "Chicken Stir Fry
```

Correct:

```js
name: "Chicken Stir Fry"
```

### Wrong nesting

Make sure `restaurant`, `categories`, `groups`, and `items` remain properly closed.

If the menu disappears after an edit, check the browser console first.

---

# 16. Testing locally

You can open:

```text
index.html
```

directly in a browser for basic testing.

Most functionality will work locally because there is no build process.

Internet access may still be required for externally hosted resources such as Google Fonts.

For proper testing, also run the site through GitHub Pages because the live environment confirms:

* relative asset paths
* CSS paths
* JavaScript paths
* image loading
* external links

---

# 17. GitHub Pages

The live site is hosted using GitHub Pages.

Current address:

**https://t3cgardens.github.io/menu/**

The repository should retain this structure:

```text
index.html
css/
js/
assets/
```

`index.html` must remain at the site root.

After pushing changes to the GitHub Pages branch, allow GitHub Pages a short time to redeploy.

A hard refresh may be necessary when testing CSS or JavaScript changes.

---

# 18. QR code

The QR code should point to the **stable website address**:

```text
https://t3cgardens.github.io/menu/
```

The purpose of using a stable URL is that the menu can be updated later without changing the QR code.

### Before printing

Test the QR code on multiple phones.

Check that it:

* scans quickly
* opens the correct site
* loads over mobile data
* displays the menu correctly
* allows searching and category navigation

Use a sufficiently large QR code for comfortable scanning from a seated position.

---

# 19. Content checks before publication

Before publishing a significant menu update:

* [ ] Check every food price against the current T3C menu/till.
* [ ] Check every drinks price.
* [ ] Confirm names and spellings.
* [ ] Confirm any new menu items.
* [ ] Confirm event information is still accurate.
* [ ] Confirm "Open Daily" wording if operating hours have changed.
* [ ] Confirm Google Maps opens correctly.
* [ ] Confirm phone and WhatsApp links.
* [ ] Confirm Instagram, Facebook and TikTok links.
* [ ] Check every image loads.
* [ ] Test search.
* [ ] Test category navigation.
* [ ] Test the page on a real phone.

---

# 20. Design principles

The current design should remain guided by a few principles.

### The menu comes first

Visitors should immediately understand that this is a digital menu for T3C Gardens.

### Photography supports the experience

Images should make the page feel more lively and connected to the gardens, food and drinks without turning it into a gallery.

### Keep the visual language consistent

The established direction uses:

* deep black
* natural dark greens
* warm cream
* restrained brass/gold
* modern-classic typography
* real venue/food photography where appropriate

### Avoid unnecessary complexity

There is no backend or build system by design.

The site should remain easy for the business to maintain.

### Preserve working functionality

Visual changes should not break:

* menu rendering
* search
* category navigation
* responsive behaviour
* contact links
* social links
* image loading

---

# 21. Current maintenance philosophy

The project is intended to be easy to maintain.

For normal business updates, start with:

```text
js/menu.js
```

For new photographs:

```text
assets/
```

For visual/design changes:

```text
css/style.css
```

For changes to how the page behaves:

```text
js/app.js
```

For major structural changes:

```text
index.html
```

Before modifying `app.js` or `index.html`, make sure the existing menu/search/navigation behaviour is understood and preserved.

---

## Final principle

**T3C Gardens is a menu first.**

The website should feel attractive, premium, natural and memorable, but the visitor should never lose sight of the food, drinks and information they came there to find.
