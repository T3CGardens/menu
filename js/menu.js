/* ============================================================
   T3C GARDENS — MENU DATA
   ------------------------------------------------------------
   This file contains the content for the digital menu.

   Design/layout lives in:
      css/style.css

   Page structure lives in:
      index.html

   Application behaviour lives in:
      js/app.js
   ============================================================ */

const MENU = {

  /* ==========================================================
     RESTAURANT
     ========================================================== */

  restaurant: {

    name: "T3C Gardens",

    tagline: "Outdoor Events | Leisure Drops",

    heroCopy:
      "Good food, open gardens, drinks, leisure and memorable gatherings in Lilayi, Lusaka.",


    /* --------------------------------------------------------
       Currency
       -------------------------------------------------------- */

    currency: "K",

    currencyNote:
      "Menu prices are in Zambian Kwacha (K).",

    menuInfo:
      "Use search to find a dish or drink, or browse by category.",

    priceOnRequest: "Ask",


    /* --------------------------------------------------------
       Location
       -------------------------------------------------------- */

    address:
      "Lilayi Plot 28, Lusaka, Zambia, 10101",

    city: "Lusaka",

    province: "Lusaka",

    country: "Zambia",

    maps:
      "https://maps.app.goo.gl/PkdmCRR69GtcSWFD7",


    /* --------------------------------------------------------
       Contact
       -------------------------------------------------------- */

    phone:
      "+260 779763404",

    whatsapp:
      "+260 572222459",

    whatsappLink:
      "https://wa.me/260572222459",

    email:
      "t3cgardens@gmail.com",


    /* --------------------------------------------------------
       Opening hours
       -------------------------------------------------------- */

    hoursSummary:
      "Open Daily",

    hours: [],


    /* --------------------------------------------------------
       Social media
       -------------------------------------------------------- */

    social: {

      facebook:
        "https://www.facebook.com/p/T3C-Gardens-Events-Centre-Accommodation-100064144957521/",

      instagram:
        "https://www.instagram.com/t3cgardens_official/",

      tiktok:
        "https://www.tiktok.com/@t3c.gardens"

    },


    /* --------------------------------------------------------
       Branding / imagery
       -------------------------------------------------------- */

    logo: "",

    heroImage:
      "assets/hero-gardens.jpg",


    /* --------------------------------------------------------
       Events / leisure
       -------------------------------------------------------- */

    events: {

      title:
        "More than a meal",

      intro:
        "T3C Gardens is a place for outdoor leisure, celebrations and private functions, with gardens, food, drinks and space to enjoy the day or evening.",

      enquiryLabel:
        "Planning an event?",

      enquiryCopy:
        "Tell us a little about your celebration or function and the team will help you get started.",

      enquiryButton:
        "Plan an event on WhatsApp",

      whatsappMessage:
        "Hi T3C Gardens, I'd like to enquire about hosting an event.",

      hostLabel:
        "Host with us",

      host: [
        "Weddings",
        "Birthdays",
        "Private functions",
        "Outdoor events"
      ],

      leisureLabel:
        "Enjoy the Gardens",

      leisure: [
        "Fishing",
        "Gardens and open grounds",
        "Several bars across the grounds",
        "Grill for yourself"
      ]

    }

  },


  /* ==========================================================
     MENU CATEGORIES
     ========================================================== */

  categories: [

    /* ========================================================
       BREAKFAST
       ======================================================== */

    {
      id: "breakfast",
      name: "Breakfast",

      items: [

        {
          name: "Full English Breakfast",
          price: 260,
          desc:
            "Two eggs, bacon, baked beans, fried or poached tomatoes."
        }

      ]

    },


    /* ========================================================
       MAIN COURSE
       ======================================================== */

    {
      id: "main-course",
      name: "Main Course",

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
          price: 200
        },

        {
          name: "Smoked Spare Ribs",
          price: 200
        },

        {
          name: "Smoked T-Bone",
          price: 200
        },

        {
          name: "Grilled Chuck",
          price: 200
        },

        {
          name: "Fresh T3C Bream",
          price: 200
        }

      ]

    },


    /* ========================================================
       PLATTERS
       ======================================================== */

    {
      id: "platters",
      name: "Platters",

      items: [

        {
          name: "Large Platter",
          price: 700
        },

        {
          name: "Medium Platter",
          price: 360
        },

        {
          name: "Weekend Special Platter",
          price: 700
        }

      ]

    },


    /* ========================================================
       MATEBETO / TRADITIONAL
       ======================================================== */

    {
      id: "matebeto",
      name: "Matebeto (Traditional)",

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


    /* ========================================================
       SOUPS
       ======================================================== */

    {
      id: "soups",
      name: "Soups",

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


    /* ========================================================
       SALADS
       ======================================================== */

    {
      id: "salads",
      name: "Salads",

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


    /* ========================================================
       WEEKEND SPECIALS
       ======================================================== */

    {
      id: "weekend-specials",
      name: "Weekend Specials",

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


    /* ========================================================
       BAR & DRINKS
       ======================================================== */

    {
      id: "bar-drinks",
      name: "Bar & Drinks",

      groups: [

        /* ------------------------------------------------------
           SOFT DRINKS
           ------------------------------------------------------ */

        {
          name: "Soft Drinks",

          items: [

            {
              name: "Coke",
              price: 20
            },

            {
              name: "Fanta",
              price: 20
            },

            {
              name: "Sprite",
              price: 20
            },

            {
              name: "Fruiticana",
              price: 20
            }

          ]

        },


        /* ------------------------------------------------------
           BOTTLED LAGERS
           ------------------------------------------------------ */

        {
          name: "Bottled Lagers",

          items: [

            {
              name: "Mosi Lager",
              price: 25
            },

            {
              name: "Castle Lager",
              price: 25
            },

            {
              name: "Castle Lite",
              price: 25
            },

            {
              name: "Mosi Lite",
              price: 25
            },

            {
              name: "Heineken Silver",
              price: 50
            },

            {
              name: "Breezer",
              price: 50
            },

            {
              name: "1664",
              price: 50
            },

            {
              name: "Black Label",
              price: 30
            },

            {
              name: "Budweiser",
              price: 40
            }

          ]

        },


        /* ------------------------------------------------------
           CANNED LAGERS
           ------------------------------------------------------ */

        {
          name: "Canned Lagers",

          items: [

            {
              name: "Black Label",
              price: 50
            },

            {
              name: "Heineken",
              price: 50
            },

            {
              name: "Windhoek Lager",
              price: 50
            },

            {
              name: "Windhoek Draught",
              price: 50
            },

            {
              name: "Corona",
              price: 50
            },

            {
              name: "Stella",
              price: 50
            }

          ]

        },


        /* ------------------------------------------------------
           CIDERS
           ------------------------------------------------------ */

        {
          name: "Ciders",

          items: [

            {
              name: "Hunters Dry",
              price: 50
            },

            {
              name: "Hunters Gold",
              price: 50
            },

            {
              name: "Savanna",
              price: 60
            },

            {
              name: "Flying Fish",
              price: 60
            },

            {
              name: "Brutal Fruit",
              price: 60
            },

            {
              name: "Belgravia",
              price: 70
            }

          ]

        },


        /* ------------------------------------------------------
           MIXERS
           ------------------------------------------------------ */

        {
          name: "Mixers",

          items: [

            {
              name: "Lemonade",
              price: 20
            },

            {
              name: "Ginger Ale",
              price: 20
            },

            {
              name: "Soda Water",
              price: 20
            },

            {
              name: "Lime Cordial",
              price: 20
            },

            {
              name: "Grenadine",
              price: 20
            },

            {
              name: "Passion Fruit",
              price: 20
            }

          ]

        },


        /* ------------------------------------------------------
           SHOOTERS
           ------------------------------------------------------ */

        {
          name: "Shooters",

          items: [

            {
              name: "Blow Job",
              price: 100
            },

            {
              name: "Suite Case",
              price: 100
            },

            {
              name: "Spring BOC",
              price: 100
            },

            {
              name: "Jägerbomb",
              price: 100
            }

          ]

        },


        /* ------------------------------------------------------
           COCKTAILS
           ------------------------------------------------------ */

        {
          name: "Cocktails",

          items: [

            {
              name: "Long Island",
              price: 150
            },

            {
              name: "Sex on the Beach",
              price: 150
            },

            {
              name: "Classic Mojito",
              price: 150
            },

            {
              name: "T3C Blue Lagoon",
              price: 150
            },

            {
              name: "Blue Citrus",
              price: 150
            },

            {
              name: "Piña Colada",
              price: 150
            },

            {
              name: "Cosmopolitan",
              price: 150
            },

            {
              name: "Whiskey Sour",
              price: 150
            },

            {
              name: "Strawberry Daiquiri",
              price: 150
            }

          ]

        },


        /* ------------------------------------------------------
           MOCKTAILS
           ------------------------------------------------------ */

        {
          name: "Mocktails",

          items: [

            {
              name: "Malawi Shandy",
              price: 60
            },

            {
              name: "Rock Shandy Tropical",
              price: 60
            },

            {
              name: "Mango Berry Mint",
              price: 60
            },

            {
              name: "Virgin Mojito",
              price: 70
            }

          ]

        },


        /* ------------------------------------------------------
           HOT BEVERAGES
           ------------------------------------------------------ */

        {
          name: "Hot Beverages",

          items: [

            {
              name: "Five Roses",
              price: 45
            },

            {
              name: "Rooibos",
              price: 45
            },

            {
              name: "Green Tea",
              price: 45
            },

            {
              name: "Mochaccino",
              price: 60
            },

            {
              name: "Hot Chocolate",
              price: 60
            },

            {
              name: "Iced Coffee",
              price: 60
            },

            {
              name: "Masala Ginger",
              price: 60
            },

            {
              name: "Mint Tea",
              price: 60
            },

            {
              name: "Espresso",
              price: 50
            },

            {
              name: "Americano",
              price: 50
            },

            {
              name: "Green Tea",
              price: 50
            }

          ]

        },


        /* ------------------------------------------------------
           MILKSHAKES
           ------------------------------------------------------ */

        {
          name: "Milkshakes",

          items: [

            {
              name: "Vanilla",
              price: 100
            },

            {
              name: "Strawberry",
              price: 100
            }

          ]

        }

      ]

    }

  ]

};


/* ============================================================
   EXPOSE MENU DATA
   ============================================================ */

window.MENU = MENU;
