
const places = [
  {
    id: 1,
    title: "Les remparts historiques",
    category: "fortifications",
    categoryLabel: "Fortifications",
    era: "XVIe siècle et phases ultérieures",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taroudant%20City%20Walls.jpg?width=1100",
    alt: "Photographie réelle des remparts de Taroudant, près de la place du 20 Août",
    description: "Une enceinte en terre qui marque encore le paysage et l'identité de la ville.",
    history: "Les remparts constituent l'un des éléments les plus reconnaissables de Taroudant. Les sources touristiques régionales associent leur développement à la période saadienne, au début du XVIe siècle, avec des phases de construction et de transformation postérieures. Leur fonction principale était défensive : protéger la ville et contrôler les accès.",
    date: "Développement important à partir du XVIe siècle ; plusieurs phases",
    purpose: "Défense de la ville et contrôle des accès",
    certainty: "Période générale documentée ; chronologie détaillée à confirmer",
    source: "https://visitagadir.com/destinations/la-grande-muraille-de-taroudannt/",
    sourceLabel: "Visit Agadir — La grande muraille"
  },
  {
    id: 2,
    title: "Bab Essalssla",
    category: "fortifications",
    categoryLabel: "Porte historique",
    era: "Datation précise à vérifier",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/City%20Wall%20of%20Taroudant%20%28Morocco%29%205.%20September%202016%20%2831723156244%29.jpg?width=1100",
    alt: "Photographie de Bab Essalssla dans les remparts de Taroudant",
    description: "Une porte photographiée dans l'enceinte historique de Taroudant.",
    history: "Bab Essalssla est documentée dans des photographies patrimoniales de l'enceinte de Taroudant. Comme pour plusieurs portes historiques, il faut distinguer la date de construction initiale des éventuelles réparations ou modifications. Une date précise ne doit pas être affirmée sans une source spécialisée.",
    date: "À établir à partir d'une étude patrimoniale",
    purpose: "Porte de l'enceinte et passage urbain",
    certainty: "Identification photographique ; date exacte non établie ici",
    source: "https://commons.wikimedia.org/wiki/File:City_Wall_of_Taroudant_(Morocco)_5._September_2016_(31723156244).jpg",
    sourceLabel: "Wikimedia Commons — photographie et licence"
  },
  {
    id: 3,
    title: "Bab al-Khamis",
    category: "fortifications",
    categoryLabel: "Porte historique",
    era: "Datation précise à vérifier",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taroudant%20City%20Walls%202011.jpg?width=1100",
    alt: "Remparts de Taroudant, photographie documentaire",
    description: "L'une des portes historiques citées parmi les accès de la médina.",
    history: "Bab al-Khamis figure parmi les portes historiques mentionnées dans les présentations patrimoniales de Taroudant. Son nom et son emplacement peuvent être documentés, mais une date exacte de construction, les transformations successives et les événements associés nécessitent des références historiques plus précises.",
    date: "À confirmer",
    purpose: "Accès à la ville fortifiée",
    certainty: "Porte mentionnée dans les sources touristiques ; datation à approfondir",
    source: "https://visitagadir.com/destinations/la-grande-muraille-de-taroudannt/",
    sourceLabel: "Visit Agadir — portes historiques"
  },
  {
    id: 4,
    title: "La médina",
    category: "vie",
    categoryLabel: "Vie urbaine",
    era: "Développement sur plusieurs périodes",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taroudant%20City%20Walls.jpg?width=1100",
    alt: "Enceinte historique autour de la médina de Taroudant",
    description: "Le tissu urbain ancien où se côtoient quartiers, commerces et traditions.",
    history: "La médina est un espace vivant, composé de rues, d'habitations, de commerces et de lieux de rencontre. Elle ne correspond pas à une construction unique réalisée à une date précise : son organisation s'est transformée au fil du temps. Les descriptions touristiques soulignent ses souks, ses métiers et son architecture traditionnelle.",
    date: "Évolution progressive ; plusieurs périodes",
    purpose: "Habitat, échanges, activités religieuses et commerciales",
    certainty: "Description générale appuyée par les sources touristiques",
    source: "https://www.visitmorocco.com/en/travel/taroudant/medina",
    sourceLabel: "Office National Marocain du Tourisme"
  },
  {
    id: 5,
    title: "La place Assarag",
    category: "vie",
    categoryLabel: "Espace public",
    era: "Datation historique à approfondir",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taroudant%20City%20Walls%202011.jpg?width=1100",
    alt: "Vue documentaire des remparts de Taroudant",
    description: "Un espace public associé à la vie sociale et aux déplacements dans la ville.",
    history: "Les places publiques participent à la vie quotidienne d'une médina : rencontres, commerce, repos et événements. Pour établir précisément l'évolution de la place Assarag, ses aménagements et les événements qui s'y sont déroulés, il faudrait consulter des archives locales, des témoignages documentés ou des études sur l'urbanisme de Taroudant.",
    date: "À vérifier dans les archives locales",
    purpose: "Rencontres et vie publique",
    certainty: "Présentation générale ; histoire détaillée à documenter",
    source: "https://www.visitmorocco.com/en/travel/taroudant",
    sourceLabel: "Office National Marocain du Tourisme — Taroudant"
  },
  {
    id: 6,
    title: "Les souks et l'artisanat",
    category: "artisanat",
    categoryLabel: "Savoir-faire",
    era: "Traditions transmises entre générations",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taroudant%20City%20Walls.jpg?width=1100",
    alt: "Photographie des remparts historiques de Taroudant ; illustration du patrimoine de la ville",
    description: "Des espaces de commerce et des métiers qui contribuent à l'identité de la médina.",
    history: "Les souks sont au cœur de la vie commerciale de Taroudant. Les descriptions touristiques mentionnent notamment les métiers artisanaux, les produits locaux et les activités traditionnelles. Pour raconter l'histoire de chaque corporation ou atelier, il est préférable de s'appuyer sur des sources propres à chaque métier et sur des témoignages locaux.",
    date: "Traditions de longue durée ; chronologie par métier à établir",
    purpose: "Commerce, production artisanale et transmission des savoir-faire",
    certainty: "Activités documentées ; histoire de chaque métier à approfondir",
    source: "https://www.visitmorocco.com/en/travel/taroudant/medina",
    sourceLabel: "Office National Marocain du Tourisme — médina et souks"
  }
];

const grid = document.querySelector("#placesGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const resultsCount = document.querySelector("#resultsCount");
const emptyState = document.querySelector("#emptyState");
const dialog = document.querySelector("#placeDialog");
const dialogContent = document.querySelector("#dialogContent");
const dialogClose = document.querySelector("#dialogClose");
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const scrollProgress = document.querySelector("#scrollProgress");

let activeFilter = "tous";
let searchTerm = "";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function cardTemplate(place) {
  return `
    <article class="place-card">
      <div class="card-image-wrap">
        <img
          class="card-image"
          src="${escapeHTML(place.image)}"
          alt="${escapeHTML(place.alt)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://commons.wikimedia.org/wiki/Special:FilePath/Taroudant%20City%20Walls.jpg?width=1100';"
        >
        <span class="card-category">${escapeHTML(place.categoryLabel)}</span>
        <span class="card-number">${String(place.id).padStart(2, "0")}</span>
      </div>
      <div class="card-body">
        <span class="card-era">${escapeHTML(place.era)}</span>
        <h3>${escapeHTML(place.title)}</h3>
        <p>${escapeHTML(place.description)}</p>
        <div class="card-footer">
          <span>Fiche patrimoniale</span>
          <button
            class="card-open"
            type="button"
            data-open-place="${place.id}"
            aria-label="Lire l'histoire de ${escapeHTML(place.title)}"
          >↗</button>
        </div>
      </div>
    </article>
  `;
}

function renderPlaces() {
  const filtered = places.filter(place => {
    const matchesCategory =
      activeFilter === "tous" || place.category === activeFilter;

    const searchableText = [
      place.title,
      place.categoryLabel,
      place.era,
      place.description,
      place.history
    ].join(" ").toLocaleLowerCase("fr");

    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filtered.map(cardTemplate).join("");
  resultsCount.textContent =
    `${filtered.length} ${filtered.length > 1 ? "lieux" : "lieu"}`;
  emptyState.hidden = filtered.length !== 0;

  observeReveals();
}

function openPlace(id) {
  const place = places.find(item => item.id === Number(id));
  if (!place) return;

  dialogContent.innerHTML = `
    <img
      class="dialog-image"
      src="${escapeHTML(place.image)}"
      alt="${escapeHTML(place.alt)}"
      onerror="this.onerror=null;this.src='https://commons.wikimedia.org/wiki/Special:FilePath/Taroudant%20City%20Walls.jpg?width=1100';"
    >
    <div class="dialog-body">
      <span class="section-index">${escapeHTML(place.categoryLabel)}</span>
      <h2 id="dialogTitle">${escapeHTML(place.title)}</h2>
      <p>${escapeHTML(place.history)}</p>

      <div class="dialog-facts">
        <div class="dialog-fact">
          <strong>Datation</strong>
          <span>${escapeHTML(place.date)}</span>
        </div>
        <div class="dialog-fact">
          <strong>Fonction ou rôle</strong>
          <span>${escapeHTML(place.purpose)}</span>
        </div>
        <div class="dialog-fact">
          <strong>État de la documentation</strong>
          <span>${escapeHTML(place.certainty)}</span>
        </div>
        <div class="dialog-fact">
          <strong>Catégorie</strong>
          <span>${escapeHTML(place.categoryLabel)}</span>
        </div>
      </div>

      <a
        class="dialog-source"
        href="${escapeHTML(place.source)}"
        target="_blank"
        rel="noopener noreferrer"
      >${escapeHTML(place.sourceLabel)} ↗</a>
    </div>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    alert(`${place.title}\n\n${place.history}`);
  }
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-open-place]");
  if (button) openPlace(button.dataset.openPlace);
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach(item => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderPlaces();
  });
});

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLocaleLowerCase("fr");
  renderPlaces();
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && mainNav.classList.contains("open")) {
    closeMenu();
  }
});

function closeMenu() {
  mainNav.classList.remove("open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu"
  );
  document.body.classList.toggle("menu-open", isOpen);
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

function updateScrollProgress() {
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = scrollable > 0
    ? (window.scrollY / scrollable) * 100
    : 0;

  scrollProgress.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

let revealObserver;

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    });
  }

  elements.forEach(element => revealObserver.observe(element));
}

renderPlaces();
updateScrollProgress();
observeReveals();