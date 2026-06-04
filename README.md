# CatStore

CatStore is a small webshop project built with React as part of the course *Gränssnittsutveckling*. The application uses data from The Cat API and allows users to browse cat breeds, read more information about them, add cats to a cart, and place an order.

## Built with

* React
* Vite
* React Router DOM
* React Bootstrap
* Context API
* The Cat API

## Pages

### Home

Landing page introducing the CatStore project.

### Cats

Displays cat breeds fetched from The Cat API. Users can:

* Search for breeds by name
* Browse through paginated results
* View detailed information about each breed
* Add cats to the shopping cart

### Cat Info

A separate page for each cat breed showing:

* Breed name
* Origin
* Temperament
* Description
* Image

### About

Information about the store and contact details.

### Cart

Shows all selected cats and allows the user to:

* Remove cats from the cart
* Place an order
* Receive an order confirmation

## Project Structure

I organized the project into separate folders to keep responsibilities clear:

* **pages/** contains the different views of the application.
* **components/** contains reusable UI components such as the navbar and footer.
* **context/** contains the global cart state using React Context.
* **assets/** contains image used in the project.

This structure made the project easier to maintain as it grew.

## Design Choices

### React Bootstrap instead of custom CSS

One goal of the assignment was to work mainly with React and Bootstrap rather than writing large amounts of custom CSS.

Because of that, almost the entire layout is built using Bootstrap classes. The only custom styling I added was a small amount of inline styling on the Home and About pages to create semi-transparent content boxes that allow the background image to remain visible.

### Toasts and Alerts

I used two different approaches for user feedback:

* **Toast notifications** when adding or removing cats from the cart.
* **Alert messages** for order confirmation.

The order confirmation uses an alert because it was specifically requested in the assignment instructions. I chose to use Toast notifications elsewhere because I wanted to explore another way of handling user feedback in React Bootstrap.

### Shared Toast State

The same cartMessage state is used in both the Cats and Cart pages. This means a toast can briefly remain visible when navigating between pages. I could have separated the messages into different states, but after discussing it with the teacher and confirming it was not required for the assignment, I chose the simpler solution.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application runs locally on:

```text
http://localhost:5173
```