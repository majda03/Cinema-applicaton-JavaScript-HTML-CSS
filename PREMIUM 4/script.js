const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    runtime: "2h 49m",
    director: "Christopher Nolan",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 2,
    title: "Dune",
    year: 2021,
    genre: "Sci-Fi",
    rating: 8.0,
    runtime: "2h 35m",
    director: "Denis Villeneuve",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    description: "A noble family becomes involved in a war for control over the galaxy's most valuable resource."
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    runtime: "2h 32m",
    director: "Christopher Nolan",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces the Joker, a criminal mastermind who wants to bring chaos to Gotham City."
  },
  {
    id: 4,
    title: "Inception",
    year: 2010,
    genre: "Thriller",
    rating: 8.8,
    runtime: "2h 28m",
    director: "Christopher Nolan",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    description: "A thief who steals secrets through dream-sharing technology is given a chance to erase his past."
  },
  {
    id: 5,
    title: "La La Land",
    year: 2016,
    genre: "Drama",
    rating: 8.0,
    runtime: "2h 8m",
    director: "Damien Chazelle",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description: "A pianist and an actress fall in love while pursuing their dreams in Los Angeles."
  },
  {
    id: 6,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    rating: 8.4,
    runtime: "2h 2m",
    director: "Todd Phillips",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "A failed comedian descends into isolation and becomes a symbol of chaos in Gotham."
  },
  {
    id: 7,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Animation",
    rating: 8.4,
    runtime: "1h 57m",
    director: "Peter Ramsey",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    description: "Teenager Miles Morales becomes Spider-Man and joins others from different dimensions."
  },
  {
    id: 8,
    title: "Knives Out",
    year: 2019,
    genre: "Comedy",
    rating: 7.9,
    runtime: "2h 10m",
    director: "Rian Johnson",
    poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    description: "A detective investigates the mysterious death of a wealthy crime novelist."
  },
  {
    id: 9,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy",
    rating: 8.1,
    runtime: "1h 39m",
    director: "Wes Anderson",
    poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    description: "A hotel concierge and his lobby boy become involved in a battle over a family fortune."
  },
  {
    id: 10,
    title: "Arrival",
    year: 2016,
    genre: "Sci-Fi",
    rating: 7.9,
    runtime: "1h 56m",
    director: "Denis Villeneuve",
    poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    description: "A linguist works with the military to communicate with alien lifeforms after mysterious spacecraft appear."
  },
  {
    id: 11,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    rating: 8.5,
    runtime: "2h 12m",
    director: "Bong Joon-ho",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description: "A poor family schemes to become employed by a wealthy household, leading to unexpected consequences."
  },
  {
    id: 12,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    rating: 8.5,
    runtime: "1h 46m",
    director: "Damien Chazelle",
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    description: "A young drummer enrolls at a music conservatory where his dreams are mentored by a ruthless instructor."
  }
];

const loader = document.getElementById("loader");
const movieGrid = document.getElementById("movieGrid");
const watchlistGrid = document.getElementById("watchlistGrid");
const watchlistEmpty = document.getElementById("watchlistEmpty");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const filters = document.getElementById("filters");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const watchlistCount = document.getElementById("watchlistCount");
const watchlistBtn = document.getElementById("watchlistBtn");
const themeBtn = document.getElementById("themeBtn");
const toast = document.getElementById("toast");

const totalMovies = document.getElementById("totalMovies");
const savedMovies = document.getElementById("savedMovies");
const watchedMovies = document.getElementById("watchedMovies");
const bestRating = document.getElementById("bestRating");

let currentGenre = "All";
let watchlist = JSON.parse(localStorage.getItem("cinevault-watchlist")) || [];
let watched = JSON.parse(localStorage.getItem("cinevault-watched")) || [];
let theme = localStorage.getItem("cinevault-theme") || "dark";

const genres = ["All", ...new Set(movies.map(movie => movie.genre))];

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);
});

function initTheme() {
  if (theme === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "☀";
  } else {
    document.body.classList.remove("light");
    themeBtn.textContent = "☾";
  }
}

function saveData() {
  localStorage.setItem("cinevault-watchlist", JSON.stringify(watchlist));
  localStorage.setItem("cinevault-watched", JSON.stringify(watched));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function renderFilters() {
  filters.innerHTML = "";

  genres.forEach(genre => {
    const button = document.createElement("button");
    button.className = `filter-btn ${genre === currentGenre ? "active" : ""}`;
    button.textContent = genre;

    button.addEventListener("click", () => {
      currentGenre = genre;
      renderFilters();
      renderMovies();
    });

    filters.appendChild(button);
  });
}

function getFilteredMovies() {
  const searchValue = searchInput.value.trim().toLowerCase();

  let filtered = movies.filter(movie => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchValue) ||
      movie.director.toLowerCase().includes(searchValue) ||
      movie.genre.toLowerCase().includes(searchValue);

    const matchesGenre = currentGenre === "All" || movie.genre === currentGenre;

    return matchesSearch && matchesGenre;
  });

  const sortValue = sortSelect.value;

  if (sortValue === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (sortValue === "year-new") {
    filtered.sort((a, b) => b.year - a.year);
  }

  if (sortValue === "year-old") {
    filtered.sort((a, b) => a.year - b.year);
  }

  if (sortValue === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  return filtered;
}

function createMovieCard(movie) {
  const isSaved = watchlist.includes(movie.id);
  const isWatched = watched.includes(movie.id);

  const card = document.createElement("article");
  card.className = "movie-card";

  card.innerHTML = `
    <div class="poster-wrap">
      <img src="${movie.poster}" alt="${movie.title}">
      <span class="badge">${movie.genre}</span>
    </div>

    <div class="movie-info">
      <h3>${movie.title}</h3>
      <p class="movie-meta">${movie.year} • ${movie.runtime} • ${movie.director}</p>

      <div class="card-bottom">
        <span class="rating">★ ${movie.rating}</span>

        <div class="card-actions">
          <button class="small-btn watch-btn ${isWatched ? "active" : ""}" title="Mark as watched" data-id="${movie.id}">
            ✓
          </button>

          <button class="small-btn save-btn ${isSaved ? "active" : ""}" title="Save to watchlist" data-id="${movie.id}">
            ${isSaved ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  `;

  card.addEventListener("click", () => openModal(movie.id));

  const saveBtn = card.querySelector(".save-btn");
  const watchBtn = card.querySelector(".watch-btn");

  saveBtn.addEventListener("click", event => {
    event.stopPropagation();
    toggleWatchlist(movie.id);
  });

  watchBtn.addEventListener("click", event => {
    event.stopPropagation();
    toggleWatched(movie.id);
  });

  return card;
}

function renderMovies() {
  const filteredMovies = getFilteredMovies();

  movieGrid.innerHTML = "";

  if (filteredMovies.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  filteredMovies.forEach(movie => {
    movieGrid.appendChild(createMovieCard(movie));
  });

  updateStats();
}

function renderWatchlist() {
  watchlistGrid.innerHTML = "";

  const savedList = movies.filter(movie => watchlist.includes(movie.id));

  if (savedList.length === 0) {
    watchlistEmpty.style.display = "block";
    return;
  }

  watchlistEmpty.style.display = "none";

  savedList.forEach(movie => {
    watchlistGrid.appendChild(createMovieCard(movie));
  });
}

function openModal(id) {
  const movie = movies.find(item => item.id === id);
  const isSaved = watchlist.includes(movie.id);
  const isWatched = watched.includes(movie.id);

  modalBody.innerHTML = `
    <div class="modal-layout">
      <img src="${movie.poster}" alt="${movie.title}">

      <div class="modal-text">
        <p class="eyebrow">${movie.genre}</p>
        <h2>${movie.title}</h2>

        <div class="modal-details">
          ${movie.year} • ${movie.runtime} • ★ ${movie.rating} • ${movie.director}
        </div>

        <p>${movie.description}</p>

        <div class="modal-actions">
          <button class="primary-btn" onclick="toggleWatchlist(${movie.id})">
            ${isSaved ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>

          <button class="secondary-btn" onclick="toggleWatched(${movie.id})">
            ${isWatched ? "Mark as Unwatched" : "Mark as Watched"}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeMovieModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

function toggleWatchlist(id) {
  if (watchlist.includes(id)) {
    watchlist = watchlist.filter(movieId => movieId !== id);
    showToast("Removed from watchlist");
  } else {
    watchlist.push(id);
    showToast("Added to watchlist");
  }

  saveData();
  updateStats();
  renderMovies();
  renderWatchlist();

  if (modal.classList.contains("show")) {
    openModal(id);
  }
}

function toggleWatched(id) {
  if (watched.includes(id)) {
    watched = watched.filter(movieId => movieId !== id);
    showToast("Marked as unwatched");
  } else {
    watched.push(id);
    showToast("Marked as watched");
  }

  saveData();
  updateStats();
  renderMovies();
  renderWatchlist();

  if (modal.classList.contains("show")) {
    openModal(id);
  }
}

function updateStats() {
  totalMovies.textContent = movies.length;
  savedMovies.textContent = watchlist.length;
  watchedMovies.textContent = watched.length;

  const highestRating = Math.max(...movies.map(movie => movie.rating));
  bestRating.textContent = highestRating.toFixed(1);

  watchlistCount.textContent = watchlist.length;
}

searchInput.addEventListener("input", renderMovies);

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  currentGenre = "All";
  sortSelect.value = "default";
  renderFilters();
  renderMovies();
});

sortSelect.addEventListener("change", renderMovies);

closeModal.addEventListener("click", closeMovieModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeMovieModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMovieModal();
  }
});

watchlistBtn.addEventListener("click", () => {
  document.getElementById("watchlist").scrollIntoView({ behavior: "smooth" });
});

themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("cinevault-theme", theme);
  initTheme();
});

initTheme();
renderFilters();
renderMovies();
renderWatchlist();
updateStats();