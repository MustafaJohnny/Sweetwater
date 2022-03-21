// Selecting some elements so that we can manipulate the accordion when the user clicks on it.
const itemElement = document.querySelector(".item");
const parentElement = document.querySelector(".accordion");

// When one of the accordion elements is clicked, we first find it using the closest method and then toggle the open class on it.
parentElement.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".item");
  clicked.classList.toggle("open");
});

// Selecting the hero section so that we when the user leave it, we make the navigation sticky.
const hero = document.querySelector(".section-hero");

// Creating our Intersection observer.
const obs = new IntersectionObserver(
  function (entries) {
    // Getting our entrie
    const ent = entries[0];

    // When the user stops intersection with the hero page(main page) and leave it, we add our sticky navigation.
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    // When the user is back to the main page, start intersection we then remove the sticky navigation and put it back to normal.
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },

  // some options we pass to our intersection observer.
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

// Setting the goal of the observer on our main hero page.
obs.observe(hero);
