/* ═══════════════════════════════════════════════════════════
   T3C GARDENS — js/app.js
   Builds the page from js/menu.js. You do NOT need to edit
   this file to change the menu, the prices or the contact
   details — those all live in js/menu.js.
   ═══════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── 0. read the data ───────────────────────────────────── */
  var data = window.MENU;

  if (!data) {
    console.error(
      "T3C Gardens: menu data not found. " +
      "js/menu.js must load BEFORE js/app.js in index.html."
    );
    return;
  }

  var cfg       = data.restaurant || {};
  var cats      = data.categories || [];
  var events    = cfg.events || {};
  var reduceMotion = window.matchMedia &&
                     window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  /* ── 1. helpers ─────────────────────────────────────────── */
  function $(sel)  { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }

  /* Escapes text so a name like "Fish & Chips" cannot break the page. */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* 180 → "K180"   1250 → "K1,250" */
  function money(number) {
    return (cfg.currency || "K") + Number(number).toLocaleString("en-US");
  }

  function setText(el, value) {
    if (el && value != null) el.textContent = value;
  }

  function scrollTo(el) {
    if (!el) return;
    var bar = $("#navbar");
    var barH = bar ? bar.getBoundingClientRect().height : 0;
    var y = el.getBoundingClientRect().top + window.pageYOffset - barH - 10;
    window.scrollTo({ top: Math.max(y, 0), behavior: reduceMotion ? "auto" : "smooth" });
  }


  /* ── 2. simple text fills ───────────────────────────────── */
  $$("[data-fill]").forEach(function (el) {
    var key = el.getAttribute("data-fill");
    if (cfg[key] != null) el.textContent = cfg[key];
  });

  setText($("#currencyNote"), cfg.currencyNote);
  setText($("#year"), new Date().getFullYear());

  setText($("#eventsTitle"),      events.title);
  setText($("#eventsIntro"),      events.intro);
  setText($("#eventsHostLabel"),  events.hostLabel);
  setText($("#eventsLeisureLabel"), events.leisureLabel);


  /* ── 3. links ───────────────────────────────────────────── */
  var telDigits = String(cfg.phone || "").replace(/[^\d+]/g, "");

  $$('[data-link="phone"]').forEach(function (a) {
    a.textContent = cfg.phone || "";
    if (telDigits) a.href = "tel:" + telDigits;
  });

  $$('[data-link="whatsapp"]').forEach(function (a) {
    a.textContent = cfg.whatsapp || "";
    if (cfg.whatsappLink) a.href = cfg.whatsappLink;
  });

  $$('[data-link="email"]').forEach(function (a) {
    a.textContent = cfg.email || "";
    if (cfg.email) a.href = "mailto:" + cfg.email;
  });

  $$('[data-link="maps"]').forEach(function (a) {
    if (cfg.mapsUrl) a.href = cfg.mapsUrl;
  });


  /* ── 4. logo, hero photo, open pill, hours, social ──────── */
  /* Logo: replaces the typographic wordmark, keeps an h1 for
     screen readers and search engines. */
  var brandSlot = $("#brandSlot");
  if (brandSlot && cfg.logo) {
    brandSlot.innerHTML =
      '<img class="brand__logo" src="' + esc(cfg.logo) + '" alt="' +
      esc(cfg.name || "T3C Gardens") + '">' +
      '<h1 class="sr-only">' + esc(cfg.name || "T3C Gardens") + "</h1>";
  }

  /* Optional hero photograph (only use a real T3C photograph). */
  var hero = $("#top");
  if (hero && cfg.heroImage) {
    hero.style.setProperty("--hero-image", 'url("' + cfg.heroImage + '")');
    hero.classList.add("hero--photo");
  }

  /* "Open Daily" pill */
  var pill = $("#openPill");
  if (pill && cfg.hoursSummary) {
    pill.textContent = cfg.hoursSummary;
    var isOpen = !/closed/i.test(cfg.hoursSummary);
    pill.classList.add(isOpen ? "pill--open" : "pill--closed");
  } else if (pill) {
    pill.remove();
  }

  /* Weekly hours card — removed entirely if no hours are supplied,
     so no invented times ever appear. */
  var hoursCard = $("#hoursCard");
  var hoursList = $("#hoursList");
  if (hoursCard) {
    if (hoursList && cfg.hours && cfg.hours.length) {
      hoursList.innerHTML = cfg.hours.map(function (row) {
        return '<li><span class="hours__day">' + esc(row.day) +
               '</span><span class="hours__time">' + esc(row.time) + "</span></li>";
      }).join("");
    } else {
      hoursCard.remove();
    }
  }

  /* Social buttons */
  var socialWrap = $("#socialLinks");
  if (socialWrap) {
    if (cfg.social && cfg.social.length) {
      socialWrap.innerHTML = cfg.social.map(function (s) {
        return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
               esc(s.label) + "</a>";
      }).join("");
    } else {
      socialWrap.remove();
    }
  }

  /* Footer lists (events + leisure). Empty lists hide themselves. */
  function fillList(listEl, labelEl, values) {
    if (!listEl) return;
    if (!values || !values.length) {
      listEl.remove();
      if (labelEl) labelEl.remove();
      return;
    }
    listEl.innerHTML = values.map(function (value) {
      return "<li>" + esc(value) + "</li>";
    }).join("");
  }

  fillList($("#eventsHost"),    $("#eventsHostLabel"),    events.host);
  fillList($("#eventsLeisure"), $("#eventsLeisureLabel"), events.leisure);


  /* ── 5. build ONE menu row ──────────────────────────────── */
  /* Takes a raw item object, its position, its category and its
     subgroup name. Returns an HTML string. Arguments are passed
     explicitly, never through map(), so nothing can be mismatched. */
  function itemHTML(item, index, cat, group) {
    var name      = item.name || "";
    var desc      = item.desc || "";
    var note      = item.priceNote || "";
    var image     = item.image || "";
    var tags      = item.tags || [];
    var isOff     = item.available === false;

    /* badges */
    var badges = "";
    for (var t = 0; t < tags.length; t++) {
      var tag = String(tags[t]).toLowerCase();
      if (tag === "popular") badges += '<span class="tag tag--popular">Popular</span>';
      if (tag === "new")     badges += '<span class="tag tag--new">New</span>';
    }
    if (isOff) badges += '<span class="tag tag--out">Unavailable</span>';

    /* optional photo — lazy-loaded, fixed size, so no layout shift */
    var thumb = "";
    if (image) {
      thumb =
        '<div class="item__thumb">' +
          '<img src="' + esc(image) + '" alt="' + esc(item.imageAlt || name) + '" ' +
               'loading="lazy" decoding="async" width="76" height="76">' +
        "</div>";
    }

    /* price: a number, a custom string, or "Ask" when not yet confirmed */
    var priceHTML;
    if (typeof item.price === "number") {
      priceHTML = '<span class="item__price">' + money(item.price) + "</span>";
    } else if (typeof item.price === "string" && item.price !== "") {
      priceHTML = '<span class="item__price">' + esc(item.price) + "</span>";
    } else {
      priceHTML = '<span class="item__price item__price--ask" title="Ask our team for the price">' +
                  esc(cfg.priceOnRequest || "Ask") + "</span>";
    }

    /* the words the search box matches against */
    var haystack = (
      name + " " + desc + " " + (cat.name || "") + " " + (group || "") + " " + tags.join(" ")
    ).toLowerCase();

    return (
      '<li class="item' + (isOff ? " is-off" : "") + '" ' +
          'data-search="' + esc(haystack) + '" ' +
          'style="animation-delay:' + Math.min(index * 18, 180) + 'ms">' +
        thumb +
        '<div class="item__body">' +
          '<div class="item__top">' +
            '<h3 class="item__name">' + esc(name) + "</h3>" +
            '<span class="item__leader" aria-hidden="true"></span>' +
            priceHTML +
          "</div>" +
          (desc ? '<p class="item__desc">' + esc(desc) + "</p>" : "") +
          (note ? '<p class="item__note">' + esc(note) + "</p>" : "") +
          (badges ? '<div class="item__tags">' + badges + "</div>" : "") +
        "</div>" +
      "</li>"
    );
  }


  /* ── 6. render every category ───────────────────────────── */
  var root = $("#menuRoot");
  if (!root) return;

  if (!cats.length) {
    root.innerHTML =
      '<div class="empty"><h3>Menu coming soon</h3>' +
      "<p>Add categories and items in <code>js/menu.js</code>.</p></div>";
    return;
  }

  var sectionsHTML = "";

  for (var c = 0; c < cats.length; c++) {
    var cat   = cats[c];
    var items = cat.items || [];
    var rows  = "";
    var lastGroup = null;
    var availableCount = 0;

    for (var i = 0; i < items.length; i++) {
      var item  = items[i];
      var group = item.group || "";

      /* sub-heading whenever the group changes (e.g. "Cocktails") */
      if (group && group !== lastGroup) {
        rows += '<li class="item-group"><span class="item-group__title">' +
                esc(group) + '</span><span class="item-group__line" aria-hidden="true"></span></li>';
      }
      if (group) lastGroup = group;

      if (item.available !== false) availableCount++;
      rows += itemHTML(item, i, cat, group);
    }

    sectionsHTML +=
      '<section class="cat-section" id="cat-' + esc(cat.id) + '" data-cat="' + esc(cat.id) + '">' +
        '<div class="cat-section__head">' +
          '<h2 class="cat-section__title">' + esc(cat.name) + "</h2>" +
          '<span class="cat-section__rule" aria-hidden="true"></span>' +
          '<span class="cat-section__count">' + availableCount +
            (availableCount === 1 ? " item" : " items") + "</span>" +
        "</div>" +
        (cat.blurb ? '<p class="cat-section__blurb">' + esc(cat.blurb) + "</p>" : "") +
        (cat.note  ? '<p class="cat-section__note">'  + esc(cat.note)  + "</p>" : "") +
        '<ul class="items">' + rows + "</ul>" +
      "</section>";
  }

  root.innerHTML = sectionsHTML;


  /* ── 7. category navigation ─────────────────────────────── */
  var nav = $("#categoryNav");
  var navHTML = "";

  for (var n = 0; n < cats.length; n++) {
    navHTML +=
      '<button type="button" class="cat-btn' + (n === 0 ? " is-active" : "") + '" ' +
        'data-target="cat-' + esc(cats[n].id) + '" ' +
        'aria-controls="cat-' + esc(cats[n].id) + '"' +
        (n === 0 ? ' aria-current="true"' : "") + ">" +
        esc(cats[n].navLabel || cats[n].name) +
      "</button>";
  }
  nav.innerHTML = navHTML;

  function setActiveCategory(id) {
    var buttons = nav.querySelectorAll(".cat-btn");
    for (var b = 0; b < buttons.length; b++) {
      var on = buttons[b].getAttribute("data-target") === "cat-" + id;
      buttons[b].classList.toggle("is-active", on);
      if (on) {
        buttons[b].setAttribute("aria-current", "true");
        /* keep the active chip visible in the horizontal rail */
        if (window.innerWidth < 700) {
          buttons[b].scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", inline: "center", block: "nearest" });
        }
      } else {
        buttons[b].removeAttribute("aria-current");
      }
    }
  }

  nav.addEventListener("click", function (event) {
    var btn = event.target.closest ? event.target.closest(".cat-btn") : null;
    if (!btn) return;

    resetSearch();                                    /* clear any filter */
    var targetId = btn.getAttribute("data-target");
    setActiveCategory(targetId.replace("cat-", ""));
    scrollTo(document.getElementById(targetId));
  });

  /* Highlight the category the visitor is currently looking at. */
  var sections = root.querySelectorAll(".cat-section");

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        setActiveCategory(entry.target.getAttribute("data-cat"));
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    for (var s = 0; s < sections.length; s++) observer.observe(sections[s]);
  }


  /* ── 8. search ──────────────────────────────────────────── */
  var navbar   = $("#navbar");
  var input    = $("#searchInput");
  var toggle   = $("#searchToggle");
  var clearBtn = $("#searchClear");
  var bar      = $("#resultsBar");
  var barText  = $("#resultsText");
  var resetBtn = $("#resetBtn");
  var timer    = null;

  function isPhone() { return window.innerWidth < 700; }

  function openSearch() {
    navbar.classList.add("is-searching");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    setTimeout(function () { input.focus(); }, 20);
  }

  function closeSearch() {
    navbar.classList.remove("is-searching");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    input.blur();
  }

  function resetSearch() {
    input.value = "";
    clearBtn.hidden = true;
    var hidden = $$(".is-hidden-by-filter");
    for (var h = 0; h < hidden.length; h++) hidden[h].classList.remove("is-hidden-by-filter");
    bar.hidden = true;
  }

  function runSearch() {
    var query = input.value.trim().toLowerCase();
    clearBtn.hidden = !query;

    if (!query) { resetSearch(); return; }

    /* 1. show only matching rows */
    var hits = 0;
    var rows = $$(".item");
    for (var r = 0; r < rows.length; r++) {
      var match = (rows[r].getAttribute("data-search") || "").indexOf(query) !== -1;
      rows[r].classList.toggle("is-hidden-by-filter", !match);
      if (match) hits++;
    }

    /* 2. hide sub-headings (Cocktails, Ciders…) that lost all their rows */
    var groups = $$(".item-group");
    for (var g = 0; g < groups.length; g++) {
      var node = groups[g].nextElementSibling;
      var any = false;
      while (node && !node.classList.contains("item-group")) {
        if (node.classList.contains("item") && !node.classList.contains("is-hidden-by-filter")) {
          any = true;
          break;
        }
        node = node.nextElementSibling;
      }
      groups[g].classList.toggle("is-hidden-by-filter", !any);
    }

    /* 3. hide whole categories that lost all their rows */
    var blocks = $$(".cat-section");
    for (var k = 0; k < blocks.length; k++) {
      var hasVisible = blocks[k].querySelector(".item:not(.is-hidden-by-filter)");
      blocks[k].classList.toggle("is-hidden-by-filter", !hasVisible);
    }

    /* 4. report the result */
    bar.hidden = false;
    if (hits === 0) {
      barText.innerHTML = 'Nothing on the menu matches <strong>"' + esc(input.value.trim()) + '"</strong>.';
    } else {
      barText.innerHTML = hits + (hits === 1 ? " item matches " : " items match ") +
        '<strong>"' + esc(input.value.trim()) + '"</strong>';
    }
  }

  if (input) {
    input.addEventListener("focus", function () {
      if (isPhone()) openSearch();
    });

    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(runSearch, 130);   /* tiny delay = no jank on phones */
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        resetSearch();
        if (isPhone()) closeSearch();
      }
    });

    input.addEventListener("blur", function () {
      /* Collapse again on phones, but only if nothing is typed. */
      if (isPhone() && !input.value.trim()) closeSearch();
    });
  }

  if (toggle) {
    toggle.addEventListener("click", openSearch);
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      resetSearch();
      input.focus();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      resetSearch();
      if (isPhone()) closeSearch();
    });
  }


  /* ── 9. if the page opens on #cat-drinks, set that chip active ── */
  var match = /^#cat-(.+)$/.exec(window.location.hash || "");
  if (match) setActiveCategory(match[1]);


  /* ── 10. safety: the page must never scroll sideways ────── */
  document.documentElement.style.overflowX = "hidden";

})();