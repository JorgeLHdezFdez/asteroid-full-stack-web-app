# Full Stack Asteroids App

This project is a full-stack web application that displays a list of asteroids, allows users to search by date range, view details of asteroids, sort by name, and manage a list of favorite asteroids. The application is built using React for the frontend and Express.js for the backend.

## Features

- Display a list of asteroids
- Search asteroids by date range
- View detailed information about asteroids
- Sort asteroids by name
- Add asteroids to favorites
- View a list of favorite asteroids

## Technologies Used

- **Frontend:**

  - React
  - React Router Dom
  - React Query
  - Material UI
  - Vite

- **Backend:**
  - Express.js
  - TypeScript

## Project Structure

```
asteroid-full-stack-web-app/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AsteroidCard.tsx
│   │   │   └── Header.tsx
│   │   ├── hooks/
│   │   │   ├── useAsteroids.ts
│   │   │   └── useFavorites.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── AsteroidsList.tsx
│   │   │   └── Favorites.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── types/
│   │   │   └── asteroid.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── .eslintrc.json
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── asteroidController.ts
│   │   ├── routes/
│   │   │   └── asteroidRoutes.ts
│   │   ├── services/
│   │   │   └── nasaService.ts
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js

### Running the Application Locally

1. Clone the repository:

   ```
   git clone https://github.com/JorgeLHdezFdez/asteroid-full-stack-web-app.git
   cd full-stack-asteroids-app
   ```

2. Navigate to the client directory and install dependencies:

   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:

   ```
   cd ../server
   npm install
   ```

4. Start the server:

   ```
   npm run dev
   ```

5. In a new terminal, navigate to the client directory and start the client:
   ```
   cd client
   npm run dev
   ```

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
