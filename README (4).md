# Timestamp Microservice 🕰️

A REST API microservice built with Node.js and Express.js. This project is part of the **Back End Development and APIs** certification curriculum on freeCodeCamp.

## 📖 Description

The Timestamp Microservice is an API that accepts a date string or a Unix timestamp through the URL parameters. It validates the input and returns a JSON object containing both the Unix timestamp (in milliseconds) and the UTC formatted date string. If the provided date is invalid, it gracefully returns an error message.

## ✨ Features

- Returns the current time if no date parameter is provided.
- Parses valid date strings (e.g., `2015-12-25` or `December 25, 2015`).
- Parses valid Unix timestamps in milliseconds (e.g., `1451001600000`).
- Handles invalid inputs and returns a specific JSON error object.
- Cross-Origin Resource Sharing (CORS) enabled for seamless frontend integration.

## 🚀 How to Run Locally

If you want to run this project on your local machine, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. Clone this repository:
   ```bash
   git clone [https://github.com/VasilisCheilas/Timestamp-Microservice.git](https://github.com/VasilisCheilas/Timestamp-Microservice.git)

```

2. Navigate into the project directory:
```bash
cd Timestamp-Microservice

```


3. Install the required dependencies:
```bash
npm i

```


4. Start the server:
```bash
npm start

```



The application will be running at `http://localhost:8000`.

## 📡 API Reference

### 1. Get Current Time

* **Endpoint:** `GET /api`
* **Description:** Returns the current date and time.
* **Success Response:**
```json
{
  "unix": 1694648155000,
  "utc": "Wed, 13 Sep 2023 23:35:55 GMT"
}

```



### 2. Get Parsed Date

* **Endpoint:** `GET /api/:date`
* **Description:** Parses the `:date` parameter. Accepts standard date strings or Unix timestamps.
* **Example Requests:**
* `GET /api/2015-12-25`
* `GET /api/1451001600000`


* **Success Response:**
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

```


* **Error Response (Invalid Input):**
* Request: `GET /api/invalid-date-string`
* Response:
```json
{
  "error": "Invalid Date"
}

```





## 📂 Project Structure

```text
Timestamp-Microservice/
├── public/                 
│   └── styles.css          # Stylesheet for the frontend view
├── views/                  
│   └── index.html          # Main HTML entry point
├── package-lock.json       # Dependency tree lock
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
└── server.js               # Main application entry point and API routes

```

## 🤝 Acknowledgments

* Instructions and tests provided by [freeCodeCamp](https://www.freecodecamp.org/).


