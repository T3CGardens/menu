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
          price: 160,
          desc:
            "Two eggs, bacon, baked beans, beef or pork chipolata."
        }

      ]

    },


    /* ========================================================
       MAIN COURSE
       ======================================================== */

    {
      id: "main-course",
      name: "Main Course",
      combineSamePrice: true,

      items: [

        {
          name: "Chicken Stir-Fry",
          price: 180,
          desc: "Chicken prepared in a savoury stir-fry. Served with rice."
        },

        {
          name: "Chicken Wings (4)",
          price: 180,
          desc: "Four chicken wings. Served with nshima, rice or chips."
        },

        {
          name: "Chicken Wrap",
          price: 180,
          desc: "Chicken served in a wrap. Served with chips."
        },

        {
          name: "Chicken Nuggets",
          price: 180,
          desc: "Bite-sized breaded chicken pieces. Served with a choice of nshima, rice or chips."
        },

        {
          name: "Quarter Chicken (1/4 Chicken)",
          price: 180,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Chicken Drumsticks (4)",
          price: 180,
          desc: "Four chicken drumsticks. Served with nshima, rice or chips."
        },

        {
          name: "French Quails (2)",
          price: 180,
          desc: "Two French quails. Served with nshima or rice."
        },

        {
          name: "Beef Stew",
          price: 180,
          desc: "Beef slowly cooked in a savoury stew. Served with rice."
        },

        {
          name: "Beef Stir-Fry",
          price: 180,
          desc: "Beef prepared in a savoury stir-fry. Served with rice."
        },

        {
          name: "Beef Bolognese",
          price: 180,
          desc: "Beef in a tomato-based Bolognese sauce. Served with a choice of nshima, rice or chips."
        },

        {
          name: "Boerewors Sausage",
          price: 180,
          desc: "A seasoned traditional sausage. Served with nshima, rice or chips."
        },

        {
          name: "Pan-Grilled Chicken Breast",
          price: 200,
          desc: "Served with nshima, rice or chips."
        },

        {
          name: "Pork Chops",
          price: 200,
          desc: "Pork chops prepared by the kitchen. Served with a choice of nshima, rice or chips."
        },

        {
          name: "Smoked Spare Ribs",
          price: 200,
          desc: "Served with a choice of nshima, rice or chips."
        },

        {
          name: "Smoked T-Bone",
          price: 200,
          desc: "Served with a choice of nshima, rice or chips."
        },

        {
          name: "Grilled Chuck Steak",
          price: 200,
          desc: "Chuck steak grilled by the kitchen. Served with a choice of nshima, rice or chips."
        },

        {
          name: "T3C Bream",
          price: 200,
          desc: "Bream sourced from one of the ponds at T3C Gardens. Served with a choice of nshima, rice or chips."
        },

        {
          name: "Plain Chips",
          price: 50
        },

        {
          name: "Plain Nshima",
          price: 50
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
          price: 770,
          desc: "Chips, wings (4), T-bone, drumsticks (4), sausage, samosas (6), coleslaw."
        },

        {
          name: "Medium Platter",
          price: 360,
          desc: "Chips, wings (2), drumsticks (2), sausage, samosas (3), coleslaw."
        }

      ]

    },


    /* ========================================================
       MATEBETO / TRADITIONAL
       ======================================================== */

    {
      id: "matebeto",
      name: "Matebeto (Traditional)",
      note: "Matebeto meals are served with nshima and a vegetable selection. Please ask our staff which vegetables are available.",

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
          price: 200
        },

        {
          name: "Oxtail",
          price: 150
        },

        {
          name: "Dry Fish",
          price: 200
        }

      ]

    },


    /* ========================================================
       SOUPS
       ======================================================== */

    {
      id: "soups",
      name: "Soups",
      combineSamePrice: true,

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
          price: 100,
          desc: "A fresh garden salad. Ask your waiter about available additions."
        },

        {
          name: "T3C Greek Salad",
          price: 100,
          desc: "Tomato, cucumber, red onion, green pepper, olives and feta cheese, finished with an olive oil and herb dressing."
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
          combineSamePrice: true,

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
              name: "Minute Maid",
              price: 20
            },

            {
              name: "Sprite",
              price: 20
            },

            {
              name: "Fruiticana",
              price: 20
            },

            {
              name: "Water",
              price: 10
            }

          ]

        },


        /* ------------------------------------------------------
           BOTTLED LAGERS & COOLERS
           ------------------------------------------------------ */

        {
          name: "Bottled Lagers & Coolers",
          combineSamePrice: true,

          items: [

            {
              name: "Mosi Lager",
              price: 25
            },

            {
              name: "Castle Lager Bottle",
              price: 25
            },

            {
              name: "Castle Lite Bottle",
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
              name: "1664",
              price: 50
            },

            {
              name: "Carling Black Label Bottle",
              price: 30
            },

            {
              name: "Budweiser",
              price: 60
            },

            {
              name: "Amstel",
              price: 50
            },

            {
              name: "Stella Artois Bottle",
              price: 50
            },

            {
              name: "Carling Black Label Dumpie",
              price: 40
            },

            {
              name: "Castle Lite Dumpie",
              price: 40
            },

            {
              name: "Circa 1430 Spirit Cooler",
              price: 50
            }

          ]

        },


        /* ------------------------------------------------------
           CANNED LAGERS
           ------------------------------------------------------ */

        {
          name: "Canned Lagers",
          combineSamePrice: true,

          items: [

            {
              name: "Carling Black Label Can",
              price: 50
            },

            {
              name: "Heineken Can",
              price: 50
            },

            {
              name: "Castle Lager Can",
              price: 40
            },

            {
              name: "Castle Lite Can",
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
              name: "Stella Artois Can",
              price: 50
            }

          ]

        },


        /* ------------------------------------------------------
           CIDERS
           ------------------------------------------------------ */

        {
          name: "Ciders",
          combineSamePrice: true,

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
              name: "Savanna Dry",
              price: 50
            },

            {
              name: "Flying Fish Bottle",
              price: 50
            },

            {
              name: "Flying Fish Can",
              price: 50
            },

            {
              name: "Brutal Fruit Bottle",
              price: 50
            },

            {
              name: "Brutal Fruit Can",
              price: 50
            },

            {
              name: "Breezer",
              price: 50
            },

            {
              name: "Fruit Tree",
              price: 50
            },

            {
              name: "Pure Joy",
              price: 50
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
          combineSamePrice: true,

          items: [

            {
              name: "Tonic Water",
              price: 20
            },

            {
              name: "Tonic Soda",
              price: 20
            },

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
              price: 30
            },

            {
              name: "Grenadine",
              price: 20
            },

            {
              name: "Passion Fruit",
              price: 30
            },

            {
              name: "Brothers",
              price: 30
            },

            {
              name: "Red Bull",
              price: 50
            }

          ]

        },


        /* ------------------------------------------------------
           SHOOTERS
           ------------------------------------------------------ */

        {
          name: "Shooters",
          combineSamePrice: true,

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
              name: "Springbok",
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
              price: 200,
              desc: "Vodka, white rum, tequila, gin, triple sec, lemon juice, simple syrup and cola."
            },

            {
              name: "Blue Floating Bar",
              price: 200,
              desc: "Try our Blue Floating Bar cocktail at our actual floating bar on the pond."
            },

            {
              name: "Sex on the Beach",
              price: 150,
              desc: "Vodka, peach schnapps, orange juice and cranberry juice."
            },

            {
              name: "Classic Mojito",
              price: 150,
              desc: "White rum, fresh mint, lime, simple syrup and soda water."
            },

            {
              name: "T3C Blue Lagoon",
              price: 150,
              desc: "Classic Blue Lagoon-style combination of vodka, blue curaçao and lemonade."
            },

            {
              name: "Blue Citrus",
              price: 150
            },

            {
              name: "Piña Colada",
              price: 150,
              desc: "Rum, cream of coconut, pineapple juice and lime."
            },

            {
              name: "Cosmopolitan",
              price: 150,
              desc: "Citrus vodka, triple sec, cranberry juice and lime."
            },

            {
              name: "Whiskey Sour",
              price: 150,
              desc: "Whiskey, lemon juice and simple syrup; egg white is optional in a classic recipe."
            },

            {
              name: "Strawberry Daiquiri",
              price: 150,
              desc: "Rum, strawberries, lime juice and simple syrup."
            }

          ]

        },


        /* ------------------------------------------------------
           MOCKTAILS
           ------------------------------------------------------ */

        {
          name: "Mocktails",
          combineSamePrice: true,

          items: [

            {
              name: "Malawi Shandy",
              price: 60
            },

            {
              name: "Rock Shandy",
              price: 60
            },

            {
              name: "Tropical Mango",
              price: 70
            },
            
            {
              name: "Mango Berry Mint",
              price: 70
            },

            {
              name: "Virgin Mojito",
              price: 70
            },

            {
              name: "Freshly Squeezed Strawberry Lemonade",
              price: 70
            },

            {
              name: "Fresh Passion Fruit",
              price: 70
            },

            {
              name: "Fresh Mint Lemonade",
              price: 70
            },

            {
              name: "Blue Lemonade",
              price: 70
            },

            {
              name: "Berry Mint",
              price: 70
            }

          ]

        },


        /* ------------------------------------------------------
           HOT BEVERAGES
           ------------------------------------------------------ */

        {
          name: "Hot Beverages",
          combineSamePrice: true,

          items: [

            {
              name: "Five Roses Tea",
              price: 40,
              desc: "A classic black tea."
            },

            {
              name: "Rooibos Tea",
              price: 40,
              desc: "A naturally caffeine-free herbal tea."
            },

            {
              name: "Green Tea",
              price: 45,
              desc: "A light green tea."
            },

            {
              name: "Mochaccino",
              price: 80,
              desc: "Espresso with chocolate and steamed milk."
            },

            {
              name: "Hot Chocolate",
              price: 80,
              desc: "A warm chocolate drink."
            },

            {
              name: "Masala Ginger",
              price: 60,
              desc: "A warming blend of masala spices and ginger."
            },

            {
              name: "Masala Tea",
              price: 60,
              desc: "Tea brewed with warming spices."
            },

            {
              name: "Ginger Tea",
              price: 60,
              desc: "A hot ginger infusion."
            },

            {
              name: "Mint Tea",
              price: 60,
              desc: "A refreshing mint infusion."
            },

            {
              name: "Espresso",
              price: 50,
              desc: "A short, concentrated coffee."
            },

            {
              name: "Americano",
              price: 50,
              desc: "Espresso topped with hot water."
            }

          ]

        },

        {
          name: "Cold Coffee",
          combineSamePrice: true,

          items: [
            {
              name: "Iced Coffee",
              price: 100,
              desc: "Chilled coffee served over ice."
            }
          ]

        },


        /* ------------------------------------------------------
           MILKSHAKES
           ------------------------------------------------------ */

        {
          name: "Milkshakes",
          combineSamePrice: true,

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

        },

        /* ------------------------------------------------------
           WINES BY GLASS
           ------------------------------------------------------ */
        {
          name: "Wines by Glass",
          items: [
            { name: "Four Cousins 5L Red", price: 50, desc: "A fruity, easy-drinking red with juicy berry flavours and a smooth, sweet finish." },
            { name: "Drostdy Hof Claret 5L", price: 50, desc: "A smooth red blend with ripe berry flavours and notes of strawberry and mulberry." },
            { name: "Cronier Natural Sweet Red", price: 50, desc: "Juicy red berries and ripe plum flavours combine with a pleasant, sweet finish." },
            { name: "Cellar Cask Red", price: 50, desc: "An approachable red with inviting fruity notes and a smooth, easy-drinking character." }
          ]
        },

        /* ------------------------------------------------------
           WINE BOTTLES
           ------------------------------------------------------ */
        {
          name: "Wine Bottles",
          items: [
            { name: "Cronier Merlot", price: 600, desc: "Soft and velvety, with ripe plum and cherry flavours and a rounded finish." },
            { name: "Four Cousins Red", price: 400, desc: "A lively red with ripe berry aromas, gentle spice and a smooth finish." },
            { name: "Cronier Cabernet Sauvignon", price: 600, desc: "A bold red with dark-fruit flavours, hints of blackcurrant and a structured finish." },
            { name: "FAT bastard Gold Reserve", price: 600, desc: "A rich, full-bodied wine with concentrated dark-fruit flavours and a lingering finish." },
            { name: "Nederburg Cabernet Sauvignon", price: 400, desc: "Rich blackcurrant flavours combine with dark fruit, firm structure and a satisfying finish." },
            { name: "Nederburg Merlot", price: 400, desc: "A smooth red featuring ripe plum, juicy cherry and a mellow finish." },
            { name: "Cronier Natural Sweet Red", price: 400, desc: "Silky and fruit-forward, with ripe plum, red berries and a pleasantly sweet finish." },
            { name: "Cronier Natural Sweet White", price: 400, desc: "A refreshing sweet white with bright fruity flavours and a light, easy-drinking finish." },
            { name: "Sunkissed Natural Sweet Red", price: 400, desc: "Juicy red-fruit flavours and gentle sweetness make this a smooth, relaxed choice." },
            { name: "Sunkissed Natural Sweet White", price: 400, desc: "Light, fruity and refreshing, with a sweet character best enjoyed chilled." },
            { name: "Sunkissed Natural Sweet Rosé", price: 400, desc: "A cheerful pink wine with delicate berry flavours, refreshing fruitiness and gentle sweetness." },
            { name: "Jam Jar Natural Sweet", price: 400, desc: "Bursting with juicy berry flavours and hints of dark chocolate, balanced by refreshing acidity." },
            { name: "4th Street Natural Sweet Red", price: 400, desc: "A light, sweet red with juicy berry flavours and a smooth, refreshing finish." },
            { name: "Nederburg Duet", price: 450, desc: "An expressive red blend combining ripe dark-fruit flavours with gentle spice and a rounded finish." },
            { name: "KWV Pinotage", price: 400, desc: "A distinctly South African red with ripe plum, dark berries and warming spice." },
            { name: "KWV Merlot", price: 400, desc: "Ripe plum, raspberry and cherry notes combine with subtle oak and a soft finish." },
            { name: "FAT bastard Cabernet Sauvignon", price: 500, desc: "A bold red with deep blackcurrant flavours, dark-fruit richness and a lingering finish." },
            { name: "FAT bastard Merlot", price: 500, desc: "Lush and juicy, with ripe plum, cherry and subtle spice wrapped in a smooth finish." },
            { name: "Swartland Merlot", price: 500, desc: "Rich ruby-red fruit with ripe plum, sweet black cherry and a velvety finish." },
            { name: "Nederburg Baronne", price: 400, desc: "A generous red blend with ripe berry flavours, gentle spice and a smooth, rounded character." },
            { name: "Nederburg Sauvignon Blanc", price: 400, desc: "Crisp and refreshing, with bright citrus, fresh green-fruit notes and a lively finish." },
            { name: "Cronier Sauvignon Blanc", price: 500, desc: "A fresh, aromatic white with zesty citrus, crisp fruit flavours and a clean finish." }
          ]
        },

        /* ------------------------------------------------------
           SPARKLING WINES
           ------------------------------------------------------ */
        {
          name: "Sparkling Wines",
          items: [
            { name: "Four Cousins Sparkling Wine", price: 400, desc: "Fruity and festive, with delicate floral aromas, lively bubbles and refreshing fruit flavours." },
            { name: "Don Carlo Sparkling Wine", price: 400, desc: "An easy-drinking sparkling wine with bright fruit flavours and lively bubbles." },
            { name: "J.P. Chenet Sparkling Wine", price: 400, desc: "Elegant and refreshing, with fruity aromas, delicate bubbles and a crisp character." },
            { name: "Prospero Sparkling Wine", price: 400, desc: "Bright and celebratory, offering fresh fruit notes and a bubbly finish." },
            { name: "Martini Sparkling Wine", price: 400, desc: "Lively and aromatic, with refreshing fruit flavours, fine bubbles and a delightful finish." }
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
