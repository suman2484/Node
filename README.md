People Management App
Overview
This project is a simple People Management application built using Node.js and Express. It provides a RESTful API for managing people, allowing users to create, read, update, and delete person records.

Project Structure
people-management-app
├── Node
│   ├── routes
│   │   └── person.routes.js
│   ├── models
│   │   └── person.model.js
│   ├── app.js
│   └── package.json
└── README.md
API Endpoints
GET /person
Retrieves all people from the database.

POST /person
Creates a new person in the database. Requires the following fields in the request body:

name: The name of the person.
age: The age of the person.
gender: The gender of the person.
mobileNumber: The mobile number of the person.
PUT /person/:id
Updates an existing person by ID. Requires the ID of the person in the URL and the fields to be updated in the request body.

DELETE /person/:id
Deletes a person by ID.

Setup Instructions
Clone the repository.
Navigate to the Node directory.
Run npm install to install the required dependencies.
Start the server with node app.js.
Usage
You can use tools like Postman or curl to interact with the API endpoints. Make sure to set the appropriate HTTP methods and headers when making requests.

License
This project is licensed under the MIT License.
