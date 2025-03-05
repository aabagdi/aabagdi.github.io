document.addEventListener("DOMContentLoaded", () => {
  createNavbar();
  
  // Set a small timeout to ensure all elements are fully rendered
  setTimeout(() => {
    createCarousel();
  }, 100);
});

function createNavbar() {
  const header = document.querySelector("header");

  const nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-md navbar-dark bg-dark";

  const container = document.createElement("div");
  container.className = "container-fluid";

  const brand = document.createElement("a");
  brand.className = "navbar-brand";
  brand.href = "#";
  brand.textContent = "Aadit's Portfolio";  // Added a brand name

  const toggleButton = document.createElement("button");
  toggleButton.className = "navbar-toggler";
  toggleButton.type = "button";
  toggleButton.setAttribute("data-bs-toggle", "collapse");
  toggleButton.setAttribute("data-bs-target", "#navbarNav");

  const srOnlyText = document.createElement("span");
  srOnlyText.className = "visually-hidden";
  srOnlyText.textContent = "Toggle navigation menu";
  toggleButton.appendChild(srOnlyText);

  const toggleIcon = document.createElement("span");
  toggleIcon.className = "navbar-toggler-icon";
  toggleButton.appendChild(toggleIcon);

  const navbarCollapse = document.createElement("div");
  navbarCollapse.className = "collapse navbar-collapse";
  navbarCollapse.id = "navbarNav";

  const navbarNav = document.createElement("ul");
  navbarNav.className = "navbar-nav";

  const navItems = [
    { name: "Welcome", href: "#welcome" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
  ];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "nav-item";

    const a = document.createElement("a");
    a.className = "nav-link";
    a.href = item.href;
    a.textContent = item.name;

    li.appendChild(a);
    navbarNav.appendChild(li);
  });

  navbarCollapse.appendChild(navbarNav);
  container.appendChild(brand);  // Add the brand name to the navbar
  container.appendChild(toggleButton);
  container.appendChild(navbarCollapse);
  nav.appendChild(container);
  header.appendChild(nav);
  
  console.log("Navbar created successfully");
}

function createCarousel() {
  console.log("Starting to create carousel...");
  const projectsSection = document.querySelector("#projects");

  if (!projectsSection) {
    console.error("Error: #projects element not found");
    // Let's log what elements are actually available
    console.log("Available sections:", document.querySelectorAll("section"));
    return;
  }

  console.log("Projects section found:", projectsSection.id);

  const carouselContainer = document.createElement("div");
  carouselContainer.id = "projectsCarousel";
  carouselContainer.className = "carousel slide";
  carouselContainer.setAttribute("data-bs-ride", "carousel");

  const indicators = document.createElement("div");
  indicators.className = "carousel-indicators";

  const carouselInner = document.createElement("div");
  carouselInner.className = "carousel-inner";

  const projects = [
    {
      title: "Chord Helper",
      image: "images/ChordHelper.webp",
      description:
        "An app that lets the user play chords and tests their chord recognition skills with a quiz",
      link: "https://apps.apple.com/us/app/chord-helper/id1660572883",
    },
    {
      title: "CursedSnake",
      image: "images/CursedSnake.webp",
      description: "A simple but funny Snake game",
      link: "https://apps.apple.com/us/app/cursed-snake/id6445866465",
    },
    {
      title: "MicMan",
      image: "images/MicMan.webp",
      description:
        "A user-friendly, stereo voice-memo app, with advanced features",
      link: "https://apps.apple.com/us/app/micman/id6615062868",
    },
    {
      title: "DogExplorer",
      image: "images/DogExplorer.webp",
      description: "A user-friendly app that uses machine learning to identify dog breeds through photo capture or upload",
      link: "https://apps.apple.com/us/app/dogexplorer/id6741376283",
    },
    {
      title: "MandelbrotMan",
      image: "images/MandelbrotMan.webp",
      description: "An app that renders the Mandelbrot set and allows the user to zoom into the intricacies of the fractal",
      link: "https://apps.apple.com/us/app/mandelbrotman/id6742133450",
    },
  ];

  projects.forEach((project, index) => {
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#projectsCarousel");
    indicator.setAttribute("data-bs-slide-to", index.toString());
    if (index === 0) {
      indicator.className = "active";
    }

    const indicatorText = document.createElement("span");
    indicatorText.className = "visually-hidden";
    indicatorText.textContent = `Slide ${index + 1}`;
    indicator.appendChild(indicatorText);
    indicators.appendChild(indicator);

    const slide = document.createElement("div");
    slide.className = index === 0 ? "carousel-item active" : "carousel-item";

    const img = document.createElement("img");
    img.src = project.image;
    img.className = "d-block w-100";
    img.alt = project.title;

    const caption = document.createElement("div");
    caption.className = "carousel-caption d-block";

    const titleLink = document.createElement("a");
    titleLink.href = project.link;
    titleLink.className = "text-decoration-none";
    titleLink.style.color = "#6c757d";
    titleLink.target = "_blank";

    const title = document.createElement("h5");
    title.textContent = project.title;
    title.style.fontSize = "1rem";
    titleLink.appendChild(title);

    const description = document.createElement("p");
    description.textContent = project.description;
    description.style.fontSize = "0.85rem";
    description.style.color = "#6c757d";

    caption.appendChild(titleLink);
    caption.appendChild(description);

    slide.appendChild(img);
    slide.appendChild(caption);
    carouselInner.appendChild(slide);
  });

  const prevButton = document.createElement("button");
  prevButton.className = "carousel-control-prev";
  prevButton.type = "button";
  prevButton.setAttribute("data-bs-target", "#projectsCarousel");
  prevButton.setAttribute("data-bs-slide", "prev");

  const prevIcon = document.createElement("span");
  prevIcon.className = "carousel-control-prev-icon";

  const prevText = document.createElement("span");
  prevText.className = "visually-hidden";
  prevText.textContent = "Previous";

  prevButton.appendChild(prevIcon);
  prevButton.appendChild(prevText);

  const nextButton = document.createElement("button");
  nextButton.className = "carousel-control-next";
  nextButton.type = "button";
  nextButton.setAttribute("data-bs-target", "#projectsCarousel");
  nextButton.setAttribute("data-bs-slide", "next");

  const nextIcon = document.createElement("span");
  nextIcon.className = "carousel-control-next-icon";

  const nextText = document.createElement("span");
  nextText.className = "visually-hidden";
  nextText.textContent = "Next";

  nextButton.appendChild(nextIcon);
  nextButton.appendChild(nextText);

  carouselContainer.appendChild(indicators);
  carouselContainer.appendChild(carouselInner);
  carouselContainer.appendChild(prevButton);
  carouselContainer.appendChild(nextButton);

  projectsSection.appendChild(carouselContainer);

  try {
    new bootstrap.Carousel(carouselContainer, {
      interval: 2000,
      touch: false,
    });
    console.log("Carousel created and added to #projects");
  } catch (error) {
    console.error("Error initializing Bootstrap carousel:", error);
  }
}