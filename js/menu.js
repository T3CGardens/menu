/* ═══════════════════════════════════════════════════════════
   T3C GARDENS — js/menu.js
   SINGLE SOURCE OF TRUTH FOR BUSINESS + MENU CONTENT

   Edit THIS FILE when you need to change:
   - restaurant/contact details
   - social links
   - menu categories
   - menu items
   - prices
   - descriptions
   - events/leisure information

   This file contains the menu supplied by T3C Gardens.
   ═══════════════════════════════════════════════════════════ */

var MENU = {

  /* ── RESTAURANT ─────────────────────────────────────────── */
  restaurant: {

    name: "T3C Gardens",

    tagline: "Outdoor Events | Leisure Drops",

    heroCopy:
      "Good food, open gardens, drinks, leisure and memorable gatherings in Lilayi, Lusaka.",

    currency: "K",

    currencyNote:
      "Menu prices are in Zambian Kwacha (K).",

    priceOnRequest: "Ask",

    /* ── Location ─────────────────────────────────────────── */
    address: "Lilayi Plot 28, Lusaka, Zambia, 10101",
    city: "Lusaka",
    province: "Lusaka",
    country: "Zambia",

    mapsUrl:
      "https://maps.app.goo.gl/aoyP43KpesiTsQb4A?g_st=iw",

    /* ── Contact ──────────────────────────────────────────── */
    phone: "+260 779763404",

    whatsapp: "+260 572222459",

    whatsappLink:
      "https://wa.me/260572222459",

    email:
      "t3cgardens@gmail.com",

    /* ── Opening information ─────────────────────────────── */
    /*
      Exact opening times have not been confirmed.
      "Open Daily" is used instead of inventing times.
    */
    hoursSummary: "Open Daily",

    hours: [],

    /* ── Social media ─────────────────────────────────────── */
    social: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/p/T3C-Gardens-Events-Centre-Accommodation-100064144957521/"
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/t3cgardens_official/"
      },
      {
        label: "TikTok",
        url: "https://www.tiktok.com/@t3c.gardens"
      }
    ],

    /*
      Leave these empty until genuine T3C assets are supplied.

      logo:
        Path to the real T3C logo.

      heroImage:
        Path to a genuine T3C Gardens photograph.
    */
    logo: "",

    heroImage: "",


    /* ── More Than A Meal section ─────────────────────────── */
    events: {

      title: "More than a meal",

      intro:
        "T3C Gardens is a place for outdoor leisure, celebrations and private functions, with gardens, food, drinks and space to enjoy the day or evening.",

      hostLabel: "Host with us",

      host: [
        "Weddings",
        "Birthdays",
        "Private functions",
        "Outdoor events"
      ],

      leisureLabel: "At T3C",

      leisure: [
        "Fishing",
        "Gardens and open grounds",
        "Several bars across the grounds",
        "Grill for yourself"
      ]
    }
  },


  /* ═════════════════════════════════════════════════════════
     MENU
     ═════════════════════════════════════════════════════════ */

  categories: [

    /* ── BREAKFAST ────────────────────────────────────────── */
    {
      id: "breakfast",
      name: "Breakfast",
      navLabel: "Breakfast",

      items: [
        {
          name: "Full English Breakfast",
          price: 260,
          desc:
            "Two eggs, bacon, baked beans, fried or poached tomatoes."
        }
      ]
    },


    /* ── MAIN COURSE ─────────────────────────────────────── */
    {
      id: "main-course",
      name: "Main Course",
      navLabel: "Main Course",

      items: [

        {
          name: "Chicken Stir Fry",
          price: 180,
          desc: "Served with rice."
        },

        {
          name: "Chicken Wings (4)",
          price: 140,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Chicken Wraps",
          price: 190,
          desc: "Served with chips."
        },

        {
          name: "1/4 Chicken",
          price: 180,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Chicken Drumsticks (4)",
          price: 180,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "French Quails (2)",
          price: 180,
          desc: "Served with nshima or rice."
        },

        {
          name: "Beef Stew",
          price: 170,
          desc: "Served with nshima."
        },

        {
          name: "Beef Stir Fry",
          price: 170,
          desc: "Served with rice."
        },

        {
          name: "Beef Bolognese",
          price: 180
        },

        {
          name: "Boerewors Sausage",
          price: 180,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Pan-Grilled Chicken Breast",
          price: 200,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Pork Chops",
          price: 200,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Smoked Spare Ribs",
          price: 200,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Smoked T-Bone",
          price: 200,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Grilled Chuck",
          price: 200,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Fresh T3C Bream",
          price: 200,
          desc: "Served with nshima, rice or chips."
        }
      ]
    },


    /* ── PLATTERS ─────────────────────────────────────────── */
    {
      id: "platters",
      name: "Platters",
      navLabel: "Platters",

      items: [

        {
          name: "Large Platter",
          price: 700,
          desc:
            "Chops, wings (6), T-bone, drumsticks (6), sausage, samoussas (6), coleslaw."
        },

        {
          name: "Medium Platter",
          price: 360,
          desc:
            "Chops, wings (3), drumsticks (3), sausage, samoussas (3), coleslaw."
        },

        {
          name: "Weekend Special Platter",
          price: 700,
          desc:
            "Chips, wings (4), T-bone, drumsticks (4), sausage, samosas (6), coleslaw."
        }
      ]
    },


    /* ── MATEBETO ─────────────────────────────────────────── */
    {
      id: "matebeto",
      name: "Matebeto (Traditional)",
      navLabel: "Matebeto",

      items: [

        {
          name: "Village Chicken",
          price: 150
        },

        {
          name: "Goat Meat",
          price: 150
        },

        {
          name: "Game Meat",
          price: 150
        },

        {
          name: "Vimbombo",
          price: 150
        },

        {
          name: "Oxtail",
          price: 150
        },

        {
          name: "Dry Fish",
          price: 150
        }
      ]
    },


    /* ── SOUPS ────────────────────────────────────────────── */
    {
      id: "soups",
      name: "Soups",
      navLabel: "Soups",

      items: [

        {
          name: "Mushroom Soup",
          price: 100
        },

        {
          name: "Vegetable Soup",
          price: 100
        }
      ]
    },


    /* ── SALADS ───────────────────────────────────────────── */
    {
      id: "salads",
      name: "Salads",
      navLabel: "Salads",

      items: [

        {
          name: "T3C Green Salad",
          price: 100
        },

        {
          name: "T3C Greek Salad",
          price: 120
        }
      ]
    },


    /* ── WEEKEND SPECIALS ────────────────────────────────── */
    {
      id: "weekend-specials",
      name: "Weekend Specials",
      navLabel: "Weekend Specials",

      blurb:
        "Available on weekends.",

      items: [

        {
          name: "Passion Fruit Mojito",
          price: 70,
          desc:
            "Citrus, passion fruit, a splash of lime juice, mint and sugar."
        },

        {
          name: "Blue Island Ice Rum",
          price: 150,
          desc:
            "Vodka, fruit tequila topped with Coke and premium rum."
        }
      ]
    },


    /* ── BAR & DRINKS ────────────────────────────────────── */
    {
      id: "drinks",
      name: "Bar & Drinks",
      navLabel: "Drinks",

      items: [

        /* ───────── SOFT DRINKS ───────── */
        {
          name: "Coke",
          group: "Soft Drinks",
          price: 20
        },

        {
          name: "Fanta",
          group: "Soft Drinks",
          price: 20
        },

        {
          name: "Sprite",
          group: "Soft Drinks",
          price: 20
        },

        {
          name: "Fruiticana",
          group: "Soft Drinks",
          price: 20
        },


        /* ───────── BOTTLED LAGERS ───────── */
        {
          name: "Mosi Lager",
          group: "Bottled Lagers",
          price: 25
        },

        {
          name: "Castle Lager",
          group: "Bottled Lagers",
          price: 25
        },

        {
          name: "Castle Lite",
          group: "Bottled Lagers",
          price: 25
        },

        {
          name: "Mosi Lite",
          group: "Bottled Lagers",
          price: 25
        },

        {
          name: "Heineken Silver",
          group: "Bottled Lagers",
          price: 50
        },

        {
          name: "Breezer",
          group: "Bottled Lagers",
          price: 50
        },

        {
          name: "1664",
          group: "Bottled Lagers",
          price: 50
        },

        {
          name: "Black Label",
          group: "Bottled Lagers",
          price: 30
        },

        {
          name: "Budweiser",
          group: "Bottled Lagers",
          price: 40
        },


        /* ───────── CANNED LAGERS ───────── */
        {
          name: "Black Label",
          group: "Canned Lagers",
          price: 50
        },

        {
          name: "Heineken",
          group: "Canned Lagers",
          price: 50
        },

        {
          name: "Windhoek Lager",
          group: "Canned Lagers",
          price: 50
        },

        {
          name: "Windhoek Draught",
          group: "Canned Lagers",
          price: 50
        },

        {
          name: "Corona",
          group: "Canned Lagers",
          price: 50
        },

        {
          name: "Stella",
          group: "Canned Lagers",
          price: 50
        },


        /* ───────── CIDERS ───────── */
        {
          name: "Hunters Dry",
          group: "Ciders",
          price: 50
        },

        {
          name: "Hunters Gold",
          group: "Ciders",
          price: 50
        },

        {
          name: "Savanna",
          group: "Ciders",
          price: 60
        },

        {
          name: "Flying Fish",
          group: "Ciders",
          price: 60
        },

        {
          name: "Brutal Fruit",
          group: "Ciders",
          price: 60
        },

        {
          name: "Belgravia",
          group: "Ciders",
          price: 70
        },


        /* ───────── MIXERS ───────── */
        {
          name: "Lemonade",
          group: "Mixers",
          price: 20
        },

        {
          name: "Ginger Ale",
          group: "Mixers",
          price: 20
        },

        {
          name: "Soda Water",
          group: "Mixers",
          price: 20
        },

        {
          name: "Lime Cordial",
          group: "Mixers",
          price: 20
        },

        {
          name: "Grenadine",
          group: "Mixers",
          price: 20
        },

        {
          name: "Passion Fruit",
          group: "Mixers",
          price: 20
        },


        /* ───────── SHOOTERS ───────── */
        {
          name: "Blow Job",
          group: "Shooters",
          price: 100
        },

        {
          name: "Suite Case",
          group: "Shooters",
          price: 100
        },

        {
          name: "Spring BOC",
          group: "Shooters",
          price: 100
        },

        {
          name: "Jägerbomb",
          group: "Shooters",
          price: 100
        },


        /* ───────── COCKTAILS ───────── */
        {
          name: "Long Island",
          group: "Cocktails",
          price: 150
        },

        {
          name: "Sex on the Beach",
          group: "Cocktails",
          price: 150
        },

        {
          name: "Classic Mojito",
          group: "Cocktails",
          price: 150
        },

        {
          name: "T3C Blue Lagoon",
          group: "Cocktails",
          price: 150
        },

        {
          name: "Blue Citrus",
          group: "Cocktails",
          price: 150
        },

        {
          name: "Piña Colada",
          group: "Cocktails",
          price: 150
        },

        {
          name: "Cosmopolitan",
          group: "Cocktails",
          price: 150
        },

        {
          name: "Whiskey Sour",
          group: "Cocktails",
          price: 150
        },

        {
          name: "Strawberry Daiquiri",
          group: "Cocktails",
          price: 150
        },


        /* ───────── MOCKTAILS ───────── */
        {
          name: "Malawi Shandy",
          group: "Mocktails",
          price: 60
        },

        {
          name: "Rock Shandy Tropical",
          group: "Mocktails",
          price: 60
        },

        {
          name: "Mango Berry Mint",
          group: "Mocktails",
          price: 60
        },

        {
          name: "Virgin Mojito",
          group: "Mocktails",
          price: 70
        },


        /* ───────── HOT BEVERAGES ───────── */
        {
          name: "Five Roses",
          group: "Hot Beverages",
          price: 45
        },

        {
          name: "Rooibos",
          group: "Hot Beverages",
          price: 45
        },

        {
          name: "Green Tea",
          group: "Hot Beverages",
          price: 45
        },

        {
          name: "Mochaccino",
          group: "Hot Beverages",
          price: 60
        },

        {
          name: "Hot Chocolate",
          group: "Hot Beverages",
          price: 60
        },

        {
          name: "Iced Coffee",
          group: "Hot Beverages",
          price: 60
        },

        {
          name: "Masala Ginger",
          group: "Hot Beverages",
          price: 60
        },

        {
          name: "Mint Tea",
          group: "Hot Beverages",
          price: 60
        },

        {
          name: "Espresso",
          group: "Hot Beverages",
          price: 50
        },

        {
          name: "Americano",
          group: "Hot Beverages",
          price: 50
        },

        /*
          The supplied menu text lists Green Tea again at K50.
          It may be a duplicate or a different preparation.
          It is intentionally retained until the original menu
          image is checked.
        */
        {
          name: "Green Tea",
          group: "Hot Beverages",
          price: 50
        },


        /* ───────── MILKSHAKES ───────── */
        {
          name: "Vanilla",
          group: "Milkshakes",
          price: 100
        },

        {
          name: "Strawberry",
          group: "Milkshakes",
          price: 100
        }
      ]
    }
  ]
};


/* ── Make the data available to app.js ───────────────────── */
window.MENU = MENU;