# Rap Names API

A simple REST API that provides information about famous rappers. This project includes both a backend Express.js API server and a frontend HTML interface for searching rapper information.

## 🎵 Project Overview

Rap Names API is a beginner-friendly project that demonstrates:
- Building a RESTful API with Express.js
- Serving static files from an Express server
- Client-side API requests using the Fetch API
- CORS (Cross-Origin Resource Sharing) handling

## 🚀 Features

- **Rapper Database**: Pre-loaded with rapper information including birth name, age, and birth location
- **REST API Endpoint**: Query rapper information via `/api/:rapperName`
- **Web Interface**: Simple HTML frontend to search for rapper information
- **Case-Insensitive Search**: Search by rapper name (case-insensitive and space-tolerant)
- **Error Handling**: Returns error response for rappers not found in the database

## 📋 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, Vanilla JavaScript
- **Dependencies**:
  - Express.js (^5.2.1) - Web framework
  - CORS (^2.8.6) - Cross-Origin Resource Sharing middleware

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yeshwanthreddy1206/rap-names-Api.git
   cd rap-names-Api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server.js
   ```
   
   The server will run on port 8000:
   ```
   The server is running on port 8000, Go catch it! 
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`

## 📖 Usage

### Via Web Interface
1. Open the application in your browser
2. Enter a rapper's name in the input field
3. Click the "ENTER" button
4. View the rapper's information (Birth Name, Age, Birth Location)

### Via API Endpoint
Make a GET request to the API:

```bash
curl http://localhost:8000/api/rollrida
```

**Example Response:**
```json
{
  "Age": 29,
  "BirthName": "roll rida",
  "BirthLocation": "Hyderabad, India"
}
```

## 📊 Available Rappers

The API currently includes information for:

| Rapper Name | Birth Name | Age | Birth Location |
|---|---|---|---|
| rollrida | roll rida | 29 | Hyderabad, India |
| hanumankind | Sooraj Cherukat | 32 | Kondotty, Malappuram, Kerala, India |
| karanaujla | Jaskaran Singh Aujla | 32 | Ludhiana district, Punjab, India |

## 🔧 Project Structure

```
rap-names-Api/
├── server.js          # Express server with API endpoints
├── index.html         # Frontend HTML interface
├── js/
│   └── main.js       # Client-side JavaScript for API requests
├── package.json       # Project dependencies and metadata
└── README.md         # This file
```

## 💡 How It Works

### Backend (server.js)
- Initializes an Express server on port 8000
- Serves static files (HTML, CSS, JS) from the project directory
- Enables CORS for cross-origin requests
- Implements `/api/:rapperName` endpoint that:
  - Converts rapper name to lowercase and removes spaces
  - Searches the rappers database
  - Returns rapper info if found, otherwise returns error object

### Frontend (index.html + js/main.js)
- Simple HTML form with input field and button
- JavaScript fetch API to make requests to the backend
- Displays rapper information in a list format
- Includes basic error handling

## 🌐 Deployment

This project is deployed on Render and can be accessed at:
- API: `https://rap-names-api-4woq.onrender.com/api/{rapperName}`

## 🛠️ Future Enhancements

Potential improvements for this project:
- Add more rappers to the database
- Implement a database (MongoDB, PostgreSQL) instead of hardcoded data
- Add filtering and sorting capabilities
- Add input validation and sanitization
- Implement error status codes (404, 400, etc.)
- Add CSS styling for better UI
- Write unit and integration tests
- Add authentication for admin operations

## 📝 Notes

- The API search is case-insensitive (e.g., "RollRida", "rollrida", "ROLLRIDA" all work)
- Spaces in rapper names are automatically removed during search
- If a rapper is not found, the API returns an error response

## 📄 License

ISC

## 👤 Author

yeshwanthreddy1206

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

---

**Happy Rapping!** 🎤🎶
