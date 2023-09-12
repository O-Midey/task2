# User Management API

A simple Express.js API for managing user data using MongoDB as the database.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This API allows you to perform basic CRUD (Create, Read, Update, Delete) operations on user data. It provides endpoints for creating users, retrieving user information, updating user data, and deleting users.

## Features

- Create a new user.
- Retrieve a list of all users.
- Retrieve a user by their ID.
- Update user information.
- Delete a user by their ID.

## Getting Started

### Prerequisites

Before running the API, make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/user-management-api.git

2. Navigate to the project directory:

   ```bash
   cd user-management-api
   
3. Install dependencies:

   ```bash
   npm install
   
4. Set up your MongoDB connection by modifying the config.js file with your MongoDB URI.
   
5. Start the server
    ```bash
   node index.js

## Usage
Once the server is running, you can interact with the API using HTTP requests. **The base URL is http://localhost:3001/api.**

## API EndPoints

**Create a User**
  POST /users

**Get All Users**
  GET /users

**Get a User by ID**
  GET /users/{id}

**Update a User by ID**
  PUT /users/{id}

**Partially Update a User by ID**
  PATCH /users/{id}

**Delete a User by ID**
  DELETE /users/{id}
