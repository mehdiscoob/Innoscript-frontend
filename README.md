# News Aggregator Frontend

This is the frontend application for the News Aggregator project, built using React.js. The application allows users to view news articles, search and filter articles by various criteria, and customize their news feed based on their preferences.

## Features

- User authentication and registration
- Article search and filtering by keyword, date, category, and source
- Personalized news feed based on user preferences
- Mobile-responsive design

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Docker
- Docker Compose

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/mehdiscoob/Innoscript-frontend
```
```bash
cd innoscripta-frontend
```
## Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
REACT_APP_API_BASE_URL=http://localhost:8000/api
```
## NPM Scripts

Alternatively, you can run the application using npm (without Docker).

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Start the development server:**

    ```bash
    npm start
    ```

3. The application will be available at `http://localhost:3000`.

## Project Structure

The project follows a standard React application structure:

- `src/components`: Contains React components for the application.
- `src/pages`: Contains React components for different pages of the application (e.g., Home, Login, Register, Settings).
- `src/services`: Contains API service functions to interact with the backend.
- `src/styles`: Contains CSS styles for the application.
## Project Structure

The project follows a standard React application structure:

- `src/components`: Contains reusable React components used throughout the application.
- `src/pages`: Contains React components representing different pages/routes of the application (e.g., Home, Login, Register, Settings).
- `src/services`: Contains API service functions to interact with the backend, such as fetching articles or handling user authentication.
- `src/styles`: Contains CSS styles for the application, including global styles and component-specific styles.

Each directory may contain further subdirectories and files as needed, organized according to their functionality or purpose.

Feel free to customize and expand this structure to better suit the needs of your project.
