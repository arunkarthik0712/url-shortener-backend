# URL Shortener Application

This project is a URL shortener application built using the MERN stack (MongoDB, Express, React, Node.js) with additional features including user authentication and URL analytics. It allows users to create shortened URLs and view statistics.

## Features

- **Shorten URLs:** Convert long URLs into short URLs.
- **User Authentication:** Secure login and registration.
- **Dashboard:** Visualize URL creation and analytics.

## Technologies Used

- **Frontend:** React, Bootstrap (via CDN), React Toastify
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Charting:** Chart.js
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer

---

## Deployed URL:

- **Frontend**: [https://arunkarthik0710-url-shortener.netlify.app/](https://arunkarthik0710-url-shortener.netlify.app/)
- **Backend**: `https://url-shortener-i6s8.onrender.com`

---

## Usage

1. **Register:** Create a new account or log in with an existing account.
2. **Shorten URLs:** Use the form to shorten a long URL.
3. **View URLs:** Access the dashboard to see your shortened URLs and their analytics.

---

## API Endpoints

### URL Endpoints

- **POST /api/urls/shorten**

  - **Description:** Shorten a long URL.
  - **Request Body:**
    ```json
    {
      "longUrl": "https://www.example.com"
    }
    ```
  - **Response:**
    ```json
    {
      "shortUrl": "http://localhost:5000/abc123",
      "longUrl": "https://www.example.com",
      "urlCode": "abc123",
      "clicks": 0,
      "_id": "unique_id",
      "createdAt": "timestamp",
      "userId": "user_id"
    }
    ```

- **GET /api/urls/**

  - **Description:** Get a list of all shortened URLs for the logged-in user.
  - **Response:**
    ```json
    [
      {
        "_id": "unique_id",
        "shortUrl": "http://localhost:5000/abc123",
        "longUrl": "https://www.example.com",
        "urlCode": "abc123",
        "clicks": 0,
        "createdAt": "timestamp",
        "userId": "user_id"
      },
      ...
    ]
    ```

- **GET /api/urls/:id**

  - **Description:** Get details of a specific shortened URL by its ID.
  - **Response:**
    ```json
    {
      "_id": "unique_id",
      "shortUrl": "http://localhost:5000/abc123",
      "longUrl": "https://www.example.com",
      "urlCode": "abc123",
      "clicks": 0,
      "createdAt": "timestamp",
      "userId": "user_id"
    }
    ```

- **GET /api/urls/dash/count**
  - **Description:** Get dashboard data for URL creation statistics.
  - **Response:**
    ```json
    {
      "urls": [
        {
          "dates": ["2024-08-01", "2024-08-02", ...],
          "counts": [5, 10, ...]
        }
      ]
    }
    ```

### User Endpoints

- **POST /api/auth/register**

  - **Description:** Register a new user.
  - **Request Body:**
    ```json
    {
      "username": "newuser",
      "email": "newuser@example.com",
      "password": "password123"
    }
    ```
  - **Response:**
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **POST /api/auth/login**
  - **Description:** Log in an existing user.
  - **Request Body:**
    ```json
    {
      "email": "existinguser@example.com",
      "password": "password123"
    }
    ```
  - **Response:**
    ```json
    {
      "token": "jwt_token"
    }
    ```

---
