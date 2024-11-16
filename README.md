# Event Management System - CRUD Application

This project is a simple **Event Management System** built using **Express.js**, **MongoDB**, and **EJS** for dynamic views. It implements basic **CRUD (Create, Read, Update, Delete)** operations for managing events, with a clean and functional UI.

## Features:
- **Create Events**: Allows users to add new events to the database.
- **Read Events**: Displays a list of all events.
- **Update Events**: Enables the modification of existing event details.
- **Delete Events**: Provides the option to delete events.

## Tech Stack:
- **Frontend**: EJS (Embedded JavaScript templates)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Methods**: HTTP methods (GET, POST, PUT, DELETE)

---

## How to Run the Project Locally

### 1. Clone the Repository
Clone the project to your local machine using the following command:

```bash
git clone <your-repo-link>
```

Replace `<your-repo-link>` with the actual URL of the GitHub repository.

### 2. Install Dependencies
Navigate into the project directory and install the required dependencies:

```bash
cd <project-directory>
npm install
```

### 3. Set Up Environment Variables
The project uses **dotenv** for environment variable management. You'll need to create a `.env` file in the root directory of the project with the following content:

```env
DB_URL=your-mongodb-connection-url
```

Replace `your-mongodb-connection-url` with your actual MongoDB connection string.

### 4. Start the Server
After installing the dependencies and setting up the `.env` file, start the server using:

```bash
npm start
```

The application will be running on `http://localhost:8080`.

---

## Project Structure

Here’s a brief overview of the project structure:

```
├── views/                  # EJS views for rendering HTML
│   ├── index.ejs           # List all events
│   ├── create.ejs          # Event creation form
│   ├── view.ejs            # View single event
├── .env                    # Environment variables (DB_URL)
├── app.js                  # Main server file
├── package.json            # Project dependencies and scripts
└── node_modules/           # Node.js dependencies
```

---

## Routes Overview:

- **GET /api/v3/app**: Displays a list of all events.
- **GET /api/v3/app/events/new**: Renders the form to create a new event.
- **POST /api/v3/app/events**: Handles the submission of a new event.
- **GET /api/v3/app/events/:id**: Displays the details of a single event.
- **PUT /api/v3/app/events/:id**: Updates an existing event.
- **DELETE /api/v3/app/events/:id**: Deletes an event.

---

## Commands Overview:

- **Start Server**: 
  ```bash
  npm start
  ```
  
- **Install Dependencies**: 
  ```bash
  npm install
  ```

- **Run in Development Mode** (with auto-reload):
  ```bash
  npm run dev
  ```

- **Test the Application**: 
  Visit `http://localhost:8080` in your web browser to interact with the app.
---

## Contribution

Feel free to fork the repository, clone it, and create a pull request if you have suggestions or improvements.

---

## Clone Repository

You can clone the project from the following link:

[Event Management System Repository](<your-repo-link>)

---
