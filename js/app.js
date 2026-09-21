(() => {
  "use strict";

  // Menu categories live at the top level while business details live in
  // MENU.restaurant.  Normalise that once so every consumer reads the same
  // source of truth without duplicating business data.
  const source = window.MENU || {};

  const cfg = {
    ...source,
    ...(source.restaurant || {})
  };

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));


  const esc = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");


  const slugify = (value) =>
    String(value ?? "")
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");


  const money = (value) => {

    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return cfg.priceOnRequest || "Price on request";
    }

    const currency = cfg.currency || "K";

    const number = Number(value);

    return Number.isFinite(number)
      ? `${currency}${number.toLocaleString("en-US")}`
      : esc(value);
  };


  const setText = (selector, value) => {

    const el = $(selector);

    if (el) {
      el.textContent = value ?? "";
    }
  };


  const scrollToEl = (el) => {

    if (!el) return;

    const nav = $("#navbar");

    const offset =
      (nav?.getBoundingClientRect().height || 0) + 18;

    const y =
      window.scrollY +
      el.getBoundingClientRect().top -
      offset;

    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth"
    });
  };


  const imageHTML = (
    src,
    alt,
    className = ""
  ) => {

    if (!src) return "";

    return `
      <img
        class="${className}"
        src="${esc(src)}"
        alt="${esc(alt || "")}"
        loading="lazy"
        decoding="async"
      >
    `;
  };


  const itemHTML = (item) => {

    const itemTags =
      Array.isArray(item.tags)
        ? item.tags
        : (item.tags ? [item.tags] : []);

    const tags = [];

    if (item.popular) {
      tags.push(
        `<span class="menu-tag menu-tag--popular">Popular</span>`
      );
    }

    if (item.new) {
      tags.push(
        `<span class="menu-tag menu-tag--new">New</span>`
      );
    }


    const image = item.image
      ? imageHTML(
          item.image,
          item.imageAlt || item.name,
          "menu-item__image"
        )
      : "";


    const imageWrap = image
      ? `<div class="menu-item__media">${image}</div>`
      : "";


    return `
      <li
        class="menu-item${item.unavailable ? " menu-item--unavailable" : ""}"
        data-name="${esc(item.name)}"
        data-tags="${esc(itemTags.join(" "))}"
      >

        ${imageWrap}

        <div class="menu-item__body">

          <div class="menu-item__top">

            <h4 class="menu-item__name">
              ${esc(item.name)}
            </h4>

            <span
              class="menu-item__dots"
              aria-hidden="true"
            ></span>

            <span class="menu-item__price">
              ${money(item.price)}
            </span>

          </div>


          ${
            item.desc
              ? `
                <p class="menu-item__desc">
                  ${esc(item.desc)}
                </p>
              `
              : ""
          }


          ${
            tags.length
              ? `
                <div class="menu-item__tags">
                  ${tags.join("")}
                </div>
              `
              : ""
          }


          ${
            item.unavailable
              ? `
                <p class="menu-item__unavailable">
                  Currently unavailable
                </p>
              `
              : ""
          }

        </div>

      </li>
    `;
  };


  /* ==========================================================
     PHOTO BREAKS BETWEEN MENU SECTIONS
     ========================================================== */

  const storyForCategory = (name) => {

    const key = slugify(name);

    const stories = {

      "main-course": {
        image: "assets/food-platter.jpg",

        eyebrow: "From the Grill",

        title: "Proper food for the table.",

        text:
          "Chicken, beef, pork, ribs, bream and more — with the sides you already know and love.",

        position: "left"
      },


      "weekend-specials": {
        image: "assets/cocktail.jpg",

        eyebrow: "Weekend Specials",

        title: "Stay a little longer.",

        text:
          "A weekend at T3C calls for a proper drink. Explore the specials, then make yourself comfortable in the Gardens.",

        position: "right"
      },


      "bar-and-drinks": {
        image: "assets/beer.jpg",

        eyebrow: "At the Bar",

        title: "From cold lagers to cocktails.",

        text:
          "Soft drinks, bottled and canned lagers, ciders, mixers, shooters, cocktails, mocktails and hot drinks.",

        position: "left"
      }

    };

    return stories[key] || null;
  };


  const leisureStory = () => `

    <section
      class="menu-story menu-story--garden menu-story--final"
      aria-label="T3C Gardens experience"
    >

      <div class="menu-story__image-wrap">

        <img
          class="menu-story__image"
          src="assets/gardens-leisure.jpg"
          alt="The T3C Gardens grounds"
          loading="lazy"
          decoding="async"
        >

      </div>


      <div class="menu-story__content">

        <p class="eyebrow">
          Beyond the plate
        </p>

        <h3>
          Eat. Drink. Unwind.
        </h3>

        <p>
          Come for the food and stay for the setting —
          gardens, open grounds, fishing, drinks and space
          for a relaxed day or evening.
        </p>


        <div class="menu-story__mini-grid">

          <img
            src="assets/Twix.jpg"
            alt="Leisure at T3C Gardens"
            loading="lazy"
            decoding="async"
          >

          <img
            src="assets/grill-charcoal.jpg"
            alt="Charcoal grill detail"
            loading="lazy"
            decoding="async"
          >

        </div>

      </div>

    </section>
  `;


  /* ==========================================================
     IMAGE FALLBACKS
     ========================================================== */

  const setupImageFallbacks = () => {

    $$('[data-fallback]').forEach((image) => {

      image.addEventListener(
        "error",
        () => {

          const fallback = image.dataset.fallback;

          if (fallback) {
            image.removeAttribute("data-fallback");
            image.src = fallback;
          }

        },
        { once: true }
      );

    });

  };


  /* ==========================================================
     STATIC BUSINESS INFORMATION
     ========================================================== */

  const fillStatic = () => {

    const heroImage = $(".hero__image");

    if (heroImage && cfg.heroImage) {
      heroImage.src = cfg.heroImage;
    }

    $$("[data-fill]").forEach((el) => {

      const key = el.dataset.fill;

      if (key in cfg) {
        el.textContent = cfg[key] ?? "";
      }

    });


    setText(
      "#currencyNote",
      cfg.currencyNote ||
      "Prices in Zambian Kwacha (K)"
    );

    setText(
      "#menuInfo",
      cfg.menuInfo || ""
    );


    setText(
      "#year",
      new Date().getFullYear()
    );


    const brand = $("#brandSlot");

    if (brand && cfg.logo) {

      brand.innerHTML = `
        <img
          class="brand__logo"
          src="${esc(cfg.logo)}"
          alt="${esc(cfg.name || "T3C Gardens")}"
        >

        <span class="sr-only">
          ${esc(cfg.name || "T3C Gardens")}
        </span>
      `;
    }


    const phone = $(
      "[data-link='phone']"
    );

    if (phone && cfg.phone) {

      phone.href =
        `tel:${String(cfg.phone).replace(/\s+/g, "")}`;

      phone.textContent =
        cfg.phone;
    }


    const whatsapp = $(
      "[data-link='whatsapp']"
    );

    if (
      whatsapp &&
      (cfg.whatsappLink || cfg.whatsapp)
    ) {

      whatsapp.href =
        cfg.whatsappLink ||
        `https://wa.me/${String(cfg.whatsapp).replace(/\D/g, "")}`;

      whatsapp.textContent =
        cfg.whatsapp ||
        cfg.whatsappLink;
    }


    const email = $(
      "[data-link='email']"
    );

    if (email && cfg.email) {

      email.href =
        `mailto:${cfg.email}`;

      email.textContent =
        cfg.email;
    }


    $$('[data-link="maps"]').forEach((link) => {

      if (cfg.maps) {
        link.href = cfg.maps;
      }

    });


    const pill = $("#openPill");

    if (pill) {

      pill.textContent =
        cfg.hoursSummary ||
        "Open Daily";
    }


    const hoursList = $("#hoursList");

    const hoursCard = $("#hoursCard");


    if (hoursList) {

      const hours =
        Array.isArray(cfg.hours)
          ? cfg.hours
          : [];


      if (!hours.length) {

        // A weekly timetable is optional. Keep the footer informative when
        // the business has supplied a summary such as "Open Daily" instead.
        if (hoursCard) {
          hoursCard.hidden = false;
        }

        hoursList.innerHTML = `
          <li>
            <span>Every day</span>
            <span>${esc(cfg.hoursSummary || "Open Daily")}</span>
          </li>
        `;

      } else {

        hoursList.innerHTML =
          hours
            .map(
              (entry) => `
                <li>
                  <span>
                    ${esc(entry.day || "")}
                  </span>

                  <span>
                    ${esc(
                      entry.hours ||
                      entry.time ||
                      ""
                    )}
                  </span>
                </li>
              `
            )
            .join("");
      }
    }


    renderEvents();
    renderSocials();
  };


  /* ==========================================================
     EVENTS
     ========================================================== */

  const renderEvents = () => {

    const events =
      cfg.events || {};


    setText(
      "#eventsTitle",
      events.title ||
      "More than a meal"
    );


    setText(
      "#eventsIntro",
      events.intro || ""
    );

    setText(
      "#eventsEnquiryTitle",
      events.enquiryLabel ||
      "Planning an event?"
    );

    setText(
      "#eventsEnquiryCopy",
      events.enquiryCopy || ""
    );

    const eventsEnquiry =
      $("#eventsEnquiry");

    const eventWhatsapp =
      $("[data-link='event-whatsapp']");

    const whatsappLink =
      cfg.whatsappLink ||
      (cfg.whatsapp
        ? `https://wa.me/${String(cfg.whatsapp).replace(/\D/g, "")}`
        : "");

    if (eventWhatsapp && whatsappLink) {

      const joiner =
        whatsappLink.includes("?")
          ? "&"
          : "?";

      eventWhatsapp.href =
        `${whatsappLink}${joiner}text=${encodeURIComponent(
          events.whatsappMessage ||
          "Hi T3C Gardens, I'd like to enquire about hosting an event."
        )}`;

      eventWhatsapp.textContent =
        events.enquiryButton ||
        "Plan an event on WhatsApp";

    } else if (eventsEnquiry) {

      eventsEnquiry.hidden = true;

    }


    setText(
      "#eventsHostLabel",
      events.hostLabel ||
      "Host with us"
    );


    setText(
      "#eventsLeisureLabel",
      events.leisureLabel ||
      "Enjoy the Gardens"
    );


    const host =
      $("#eventsHost");


    const leisure =
      $("#eventsLeisure");


    if (host) {

      host.innerHTML =
        (events.host || [])
          .map(
            (item) =>
              `<li>${esc(item)}</li>`
          )
          .join("");
    }


    if (leisure) {

      leisure.innerHTML =
        (events.leisure || [])
          .map(
            (item) =>
              `<li>${esc(item)}</li>`
          )
          .join("");
    }

  };


  /* ==========================================================
     SOCIAL LINKS
     ========================================================== */

  const renderSocials = () => {

    const root =
      $("#socialLinks");

    if (!root) return;


    const social =
      cfg.social || {};


    const links = [

      [
        "Instagram",
        social.instagram ||
        cfg.instagram,
        "IG"
      ],

      [
        "Facebook",
        social.facebook ||
        cfg.facebook,
        "f"
      ],

      [
        "TikTok",
        social.tiktok ||
        cfg.tiktok,
        "TK"
      ]

    ].filter(
      (entry) => entry[1]
    );


    root.innerHTML =
      links
        .map(
          ([label, href, mark]) => `
            <a
              class="social__link"
              href="${esc(href)}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="T3C Gardens on ${esc(label)}"
            >

              <span
                class="social__mark"
                aria-hidden="true"
              >
                ${esc(mark)}
              </span>

              <span>
                ${esc(label)}
              </span>

            </a>
          `
        )
        .join("");
  };


  /* ==========================================================
     MENU DATA
     ========================================================== */

  const normalizeCategories = () => {

    const source =
      Array.isArray(cfg.categories)
        ? cfg.categories
        : [];


    return source.map(
      (category, index) => ({

        ...category,

        index,

        name:
          category.name ||
          `Category ${index + 1}`,

        slug:
          category.slug ||
          slugify(
            category.name ||
            `category-${index + 1}`
          ),

        // A category can either contain named groups (the bar) or a direct
        // items array (food).  Render direct items as one unlabelled group so
        // both data shapes retain the same menu-card UI.
        groups:
          Array.isArray(category.groups) && category.groups.length
            ? category.groups
            : [{
                name: "",
                items: Array.isArray(category.items)
                  ? category.items
                  : []
              }]

      })
    );
  };


  const renderCategory = (category) => {

    const groups =
      category.groups
        .map(
          (group, groupIndex) => {

            const items =
              Array.isArray(group.items)
                ? group.items
                : [];


            return `
              <section
                class="menu-group"
                data-group="${esc(
                  slugify(
                    group.name ||
                    `group-${groupIndex + 1}`
                  )
                )}"
              >

                ${
                  group.name
                    ? `
                      <div class="menu-group__head">
                        <h3>${esc(group.name)}</h3>
                        <span class="menu-group__rule" aria-hidden="true"></span>
                      </div>
                    `
                    : ""
                }


                <ul class="menu-items">

                  ${items
                    .map(itemHTML)
                    .join("")}

                </ul>

              </section>
            `;
          }
        )
        .join("");


    return `
      <article
        class="menu-category"
        id="category-${esc(category.slug)}"
        data-category="${esc(category.slug)}"
        data-category-name="${esc(category.name)}"
      >

        <header class="menu-category__head">

          <div>

            <p class="menu-category__number">
              ${String(
                category.index + 1
              ).padStart(2, "0")}
            </p>

            <h2 class="menu-category__title">
              ${esc(category.name)}
            </h2>

          </div>


          <p class="menu-category__hint">
            ${
              category.index === 0
                ? "Take your time"
                : "T3C Gardens"
            }
          </p>

        </header>


        ${groups}

      </article>
    `;
  };


  const renderStory = (story) => {

    const sideClass =
      story.position === "right"
        ? "menu-story--image-right"
        : "menu-story--image-left";


    return `
      <section
        class="menu-story ${sideClass}"
        aria-label="${esc(story.title)}"
      >

        <div class="menu-story__image-wrap">

          <img
            class="menu-story__image"
            src="${esc(story.image)}"
            ${
              story.image === cfg.heroImage
                ? 'data-fallback="assets/gardens-leisure.jpg"'
                : ""
            }
            alt="${esc(story.eyebrow)}"
            loading="lazy"
            decoding="async"
          >

        </div>


        <div class="menu-story__content">

          <p class="eyebrow">
            ${esc(story.eyebrow)}
          </p>

          <h3>
            ${esc(story.title)}
          </h3>

          <p>
            ${esc(story.text)}
          </p>

        </div>

      </section>
    `;
  };


  const renderMenu = () => {

    const root =
      $("#menuRoot");

    const nav =
      $("#categoryNav");


    if (!root) return;


    const categories =
      normalizeCategories();


    const chunks = [];


    categories.forEach(
      (category) => {

        const story =
          storyForCategory(
            category.name
          );


        if (story) {

          chunks.push(
            renderStory(story)
          );
        }


        chunks.push(
          renderCategory(category)
        );
      }
    );


    chunks.push(
      leisureStory()
    );


    root.innerHTML =
      chunks.join("");


    if (nav) {

      nav.innerHTML =
        categories
          .map(
            (category) => `
              <button
                type="button"
                class="category-btn"
                data-scroll-category="${esc(
                  category.slug
                )}"
              >
                ${esc(category.name)}
              </button>
            `
          )
          .join("");
    }

  };


  /* ==========================================================
     SEARCH
     ========================================================== */

  const getSearchableText =
    (
      item,
      categoryName,
      groupName
    ) => [

      item.dataset.name,

      item.dataset.tags,

      categoryName,

      groupName,

      $(".menu-item__desc", item)
        ?.textContent || ""

    ]
      .join(" ")
      .toLowerCase();


  const updateResults = (query) => {

    const clean =
      query.trim().toLowerCase();


    const items =
      $$(".menu-item");


    const categories =
      $$(".menu-category");


    let matchCount = 0;


    items.forEach(
      (item) => {

        const category =
          item.closest(
            ".menu-category"
          )?.dataset.categoryName ||
          "";


        const group =
          item.closest(
            ".menu-group"
          )?.querySelector(
            ".menu-group__head h3"
          )?.textContent ||
          "";


        const matches =
          !clean ||
          getSearchableText(
            item,
            category,
            group
          ).includes(clean);


        item.hidden =
          !matches;


        if (matches) {
          matchCount += 1;
        }

      }
    );


    $$(".menu-group").forEach(
      (group) => {

        const visible =
          $$(".menu-item", group)
            .some(
              (item) =>
                !item.hidden
            );


        group.hidden =
          !visible;
      }
    );


    categories.forEach(
      (category) => {

        const visible =
          $$(".menu-item", category)
            .some(
              (item) =>
                !item.hidden
            );


        category.hidden =
          !visible;
      }
    );


    /* Hide the photo breaks while searching */

    $$(".menu-story").forEach(
      (story) => {

        story.hidden =
          Boolean(clean);
      }
    );


    const resultsBar =
      $("#resultsBar");


    const resultsText =
      $("#resultsText");


    if (resultsBar) {
      resultsBar.hidden =
        !clean;
    }


    if (resultsText) {

      resultsText.textContent =
        `${matchCount} menu item${
          matchCount === 1
            ? ""
            : "s"
        } found`;
    }

  };


  const setupSearch = () => {

    const input =
      $("#searchInput");


    const clear =
      $("#searchClear");


    const toggle =
      $("#searchToggle");


    const wrap =
      $("#searchWrap");


    const reset =
      $("#resetBtn");


    if (!input) return;


    const run = () => {

      updateResults(
        input.value
      );


      if (clear) {

        clear.hidden =
          !input.value;
      }
    };


    input.addEventListener(
      "input",
      run
    );


    input.addEventListener(
      "search",
      run
    );


    clear?.addEventListener(
      "click",
      () => {

        input.value = "";

        run();

        input.focus();
      }
    );


    reset?.addEventListener(
      "click",
      () => {

        input.value = "";

        run();

        window.location.hash = "";

        scrollToEl(
          $("#menu")
        );
      }
    );


    toggle?.addEventListener(
      "click",
      () => {

        const open =
          wrap?.classList.toggle(
            "is-open"
          ) || false;


        toggle.setAttribute(
          "aria-expanded",
          String(open)
        );


        if (open) {

          input.focus();
        }
      }
    );


    input.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape"
        ) {

          input.value = "";

          run();

          wrap?.classList.remove(
            "is-open"
          );

          toggle?.setAttribute(
            "aria-expanded",
            "false"
          );

          input.blur();
        }
      }
    );

  };


  /* ==========================================================
     CATEGORY NAVIGATION
     ========================================================== */

  const setupCategoryNav = () => {

    $$(
      "[data-scroll-category]"
    ).forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            const slug =
              button.dataset
                .scrollCategory;


            const target =
              document.getElementById(
                `category-${slug}`
              );


            const input =
              $("#searchInput");


            if (input) {

              input.value = "";

              updateResults("");

              $("#searchClear").hidden = true;
            }


            scrollToEl(target);
          }
        );

      }
    );


    const categories =
      $$(".menu-category");


    const buttons =
      $$("[data-scroll-category]");


    if (
      !categories.length ||
      !buttons.length ||
      !(
        "IntersectionObserver"
        in window
      )
    ) {
      return;
    }


    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                !entry.isIntersecting
              ) {
                return;
              }


              const slug =
                entry.target.dataset
                  .category;


              buttons.forEach(
                (button) => {

                  button.classList.toggle(
                    "is-active",
                    button.dataset
                      .scrollCategory ===
                      slug
                  );

                }
              );

            }
          );

        },
        {
          rootMargin:
            "-22% 0px -65% 0px",

          threshold: 0
        }
      );


    categories.forEach(
      (category) => {

        observer.observe(
          category
        );

      }
    );

  };


  /* ==========================================================
     HASH LINKS
     ========================================================== */

  const setupHash = () => {

    const hash =
      decodeURIComponent(
        window.location.hash
          .replace(/^#/, "")
      );


    if (
      !hash ||
      !hash.startsWith(
        "category-"
      )
    ) {
      return;
    }


    requestAnimationFrame(
      () => {

        scrollToEl(
          document.getElementById(
            hash
          )
        );

      }
    );
  };


  /* ==========================================================
     SAFETY
     ========================================================== */

  const forceSafeViewport = () => {

    document.documentElement.style
      .overflowX = "hidden";

    document.body.style
      .overflowX = "hidden";
  };


  /* ==========================================================
     INIT
     ========================================================== */

  fillStatic();

  renderMenu();

  setupImageFallbacks();

  setupSearch();

  setupCategoryNav();

  setupHash();

  forceSafeViewport();

})();
