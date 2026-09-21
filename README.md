# T3C Gardens — Digital Menu

A fast, mobile-first menu for **T3C Gardens** (Lilayi, Lusaka), designed to sit
behind a QR code on the tables. No backend, no build step, no frameworks —
plain HTML, CSS and JavaScript.

---

## 1. What each file does

| File | What it is | Do you edit it? |
|---|---|---|
| `index.html` | Page structure (hero, nav, footer) | **No** |
| `css/style.css` | Colours, type, spacing | Only to re-brand |
| `js/menu.js` | **All content: dishes, prices, contact details, event text** | **Yes — this is the one** |
| `js/app.js` | Builds the page from `menu.js` | **No** |
| `README.md` | This file | — |

You can add an `assets/` folder at any time for photos and a logo.

---

## 2. Common changes (all in `js/menu.js`)

### Change a price
```js
{ name: "Pork Chops", desc: "Served with nsima, rice or chips.", price: 200 },
                                                        /* ↑ change this */
```

### Add an item
Copy a block including its `{` and `},` and paste it inside `items: [...]`:
```js
{
  name: "Beef Burger",
  desc: "Served with chips.",
  price: 150,
  tags: ["new"]
},
```

### Remove an item
Delete the whole block, from `{` down to its `},`.

### Mark something unavailable
Add this line inside the item:
```js
available: false
```
The item stays on the menu, greyed out and tagged **Unavailable** — useful when
you have run out rather than removing it. Delete the line to put it back.

### Add a photo
1. Save the photo into `assets/`, e.g. `assets/pork-chops.jpg`
2. Keep it **under about 150 KB** so the menu stays fast on mobile data.
3. Add a line to that item:
```js
image: "assets/pork-chops.jpg",
imageAlt: "Grilled pork chops with chips",
```
Items without an `image:` line simply show no photo — no gap, no delay.
`imageAlt` describes the photo for screen readers and should say what the
picture actually shows.

### Add or remove a category
Categories appear in the same order as in `js/menu.js`. Copy a whole
`{ id, name, blurb, items: [...] }` block, or delete one.
The `id` must be lowercase with no spaces (use dashes).
`navLabel` is an optional shorter name for the top bar.

### Sub-headings inside a category
The Drinks list uses `group:` to create headings such as *Cocktails*:
```js
{ group: "Cocktails", name: "Classic Mojito" },
```
Change the text and the sub-heading follows automatically.

---

## 3. The mistakes that break the file

If the menu goes blank after editing, it is almost always one of these.
Press **Ctrl + Z** (or **Cmd + Z**) to undo.

1. A missing comma after a `}` that has another block after it.
2. A missing quote mark — `name: "Pork Chops` breaks everything after it.
3. A missing comma between two fields on separate lines.

Only the **last** block in a list has no comma after its closing `}`.

---

## 4. Still to be verified (nothing has been invented)

These were unclear on the scanned menu, so they are deliberately **not**
displayed yet. Confirm with the business, then update `js/menu.js`:

| # | Item | Current handling |
|---|---|---|
| 1 | **Drinks prices** | Every drink shows **Ask**. The scan suggested roughly K25–K60 for bottled lagers, about K50 for canned lagers, K50–K70 for ciders, and "K20" appeared beside the soft drinks. None of these are published. |
| 2 | **"Chicken dish — name to be confirmed"** (K180, Main Course) | Name unreadable on the scan. Rename it or delete the block. |
| 3 | **Spellings** | `Fruticana`, `Suite Case`, `Spring BOC`, `Jagabom`, `Mocha-Chino`, `Mosi-Lite`, `Vimbombo` are exactly as scanned. |
| 4 | **Weekend Platter vs Large Platter** | Both K700 with identical contents. Confirm whether they are the same item. |
| 5 | **Hours** | Facebook lists "Always Open", so the hero shows **Open Daily** and no weekly table. |
| 6 | **Matebeto serving note** | The line "Served with nsima, rice or chips" came from the source and should be confirmed. |

To publish a drink price, add it to that drink:
```js
{ group: "Bottled Lagers", name: "Mosi Lager", price: 25 },
```

---

## 5. Re-branding later

All colours are at the top of `css/style.css`:
```css
:root{
  --ink:    #070a08;   /* near-black page background      */
  --forest: #142a1e;   /* deep garden green (active chip) */
  --cream:  #f4f1e7;   /* warm off-white headings         */
  --brass:  #c9a24d;   /* muted gold accent, e.g. prices  */
}
```
Change those and the whole site follows.

**Add the real logo** — put the file in the project and set:
```js
logo: "assets/logo.png",
```
in the `restaurant` block. It replaces the typographic wordmark automatically
and keeps the business name in the page for screen readers.

**Add a hero photograph** — only use a genuine T3C photo:
```js
heroImage: "assets/t3c-gardens.jpg",
```
Until then the hero uses the green garden gradient. There are no stock photos
anywhere in this project, so nothing on the page implies a photo is of T3C food.

---

## 6. Testing

Double-click `index.html` — it opens in your browser and works offline (fonts
need internet, everything else does not). Check it on a real phone as well:
the sticky category rail, the search button, and tapping through categories.

---

## 7. Putting it online (GitHub Pages)

1. Create a free GitHub account and a new repository, e.g. `t3c-gardens-menu`.
2. Upload the whole project, keeping the folder structure —
   `index.html` must be at the top level.
3. In the repo: **Settings → Pages**.
4. Under *Branch*, choose `main` and `/ (root)`, then **Save**.
5. After a minute the menu is live at
   `https://YOUR-USERNAME.github.io/t3c-gardens-menu/`

---

## 8. The QR code

Generate a QR code pointing at the live address. Two tips:

- Use a **static** QR code (free ones) — a subscription "dynamic" code stops
  working if you stop paying.
- Test the printed code with two or three different phones, and print it large
  enough to scan from a seated position at the table.

---

## 9. Before printing the QR code

- [ ] Confirm the drink prices (see section 4) and add them
- [ ] Confirm or rename the unclear Main Course chicken dish
- [ ] Check every price against the till
- [ ] Confirm the "Open Daily" wording
- [ ] Add the logo and any real T3C photographs
- [ ] Tap every category and run a few searches on a real phone