# CineVault — Movie Discovery Application

CineVault is an interactive movie-discovery frontend built with **HTML, CSS, and JavaScript**. It demonstrates client-side search, filtering, sorting, modal detail views, persistent user preferences, and dynamic DOM rendering without a framework.

**Portfolio case study:** https://majdakapetanovic.com/#applications

## What the application demonstrates

- 12-film data set rendered dynamically from JavaScript
- Search by title, director, or genre
- Dynamic genre filters generated from the data
- Multiple sort states including rating, newest, oldest, and title
- Movie detail modal views
- Watchlist add/remove behavior
- Watched/unwatched state
- Persistent theme preference
- Local Storage persistence for watchlist, watched items, and theme
- Empty states and live UI updates
- Dynamic statistics
- Toast feedback
- Responsive interface behavior

## Core product flow

1. Browse the film catalogue
2. Search across titles, directors, and genres
3. Filter by genre
4. Sort the visible collection
5. Open a movie detail view
6. Save a movie to the watchlist
7. Mark titles as watched
8. Return later with preferences preserved locally

## State and persistence

CineVault stores three pieces of user state in the browser:

- `cinevault-watchlist`
- `cinevault-watched`
- `cinevault-theme`

This allows user choices to persist across refreshes rather than resetting on every visit.

## Engineering notes

The project uses a data-driven rendering approach. Movie cards, genre filters, watchlist content, modal details, and statistics are generated from JavaScript state rather than hard-coded as repeated HTML.

Key functions include:

- `renderFilters()`
- `getFilteredMovies()`
- `createMovieCard()`
- `renderMovies()`
- `renderWatchlist()`
- `openModal()`
- local-storage synchronization utilities

## Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM APIs
- Local Storage

## Why this project matters

CineVault shows practical JavaScript application behavior: combining multiple filters, managing user state, persisting preferences, rendering reusable UI from data, and keeping several interface views synchronized.

## Role

**Frontend development, JavaScript logic, UI implementation, interaction design, and responsive behavior by Majda Kapetanović.**

Portfolio: https://majdakapetanovic.com  
GitHub: https://github.com/majda03
