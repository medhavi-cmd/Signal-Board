# Signal Board

A responsive single-page application for browsing, filtering, and reviewing signals from multiple sources. The application emphasizes clarity of information, efficient filtering, and a structured review workflow.

---

## Overview

This project presents a dashboard interface where users can:

* Browse a list of signals
* Search and filter based on multiple attributes
* Sort results using different criteria
* View detailed information in a side drawer
* Persist filter and sort preferences locally

The goal was to build a clean, intuitive interface that supports quick decision-making while maintaining a scalable component structure.

---

## Features

* Search functionality across signal title and summary
* Multi-criteria filtering (status, priority, source, owner)
* Sorting options (e.g., newest, score)
* Summary statistics (total signals, open signals, high priority, average score)
* Detail drawer for in-depth inspection
* Persistent UI state using local storage
* Responsive layout for different screen sizes

---

## Tech Stack

* React (functional components and hooks)
* Tailwind CSS with custom CSS for component-level styling
* LocalStorage for client-side persistence

---

## Project Structure

```
src/
  components/
  hooks/
  states/
  utils/
  data/
  App.jsx
```

* `components/` – UI components (cards, drawer, filters, etc.)
* `hooks/` – custom hooks (e.g., localStorage handling)
* `states/` – loading, empty, and error states
* `utils/` – filtering and sorting logic
* `data/` – static dataset (json format)

---

## Setup Instructions

Clone the repository and install dependencies:

```bash
git clone https://github.com/medhavi-cmd/Signal-Board.git
cd <project-folder>
npm install
npm run dev
```

The application will run locally on the default development server.

---

## Run Instructions

* Start the development server using `npm run dev`
* Open the provided local URL in the browser
* Interact with search, filters, and sorting controls
* Click on any signal card to open the detail drawer

---

## Demo


https://signal-board-lyart.vercel.app/

---

## Tradeoffs and Limitations

* The application uses static JSON data instead of a backend service to simplify setup and focus on frontend behavior
* No authentication or user management is implemented
* Keyboard navigation is limited to basic interactions
* Data persistence is limited to local storage and does not sync across devices

These choices were made to prioritize UI clarity, component structure, and interaction design within the scope of the assignment.

---

## Design and Architecture Decisions

* Filtering and sorting logic are separated into utility functions to keep components focused and maintainable
* A drawer pattern is used instead of a modal to preserve context while viewing details
* Local storage is used to persist user preferences for filters and sorting
* Components are structured to be reusable and composable

---

## AI Usage Disclosure

AI tools were used to assist with:

* UI refinement and design suggestions
* Code structuring and refactoring guidance

All generated content was reviewed, adapted, and integrated with a clear understanding of the implementation.

---

## Future Improvements

* Enhanced keyboard accessibility and navigation
* Backend integration for dynamic data
* Real-time updates and notifications
* Improved performance for larger datasets

---
