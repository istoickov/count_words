# Word Count Web App

A web application that counts the number of words on a given webpage.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [With docker](#with-docker)
    - [Without docker](#without-docker)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This web application allows users to input a URL, and it fetches the content of the webpage and counts the number of words present on the page. It provides a simple and straightforward way to perform word count analysis on online content.

## Features

- Count words on a webpage by providing its URL.
- Simple and user-friendly interface.
- Error handling for invalid URLs and backend errors.
- Dockerized for easy deployment.

## Technologies

- React for the frontend.
- FastAPI for the backend.
- Docker for containerization.

## Getting Started

### Prerequisites

To run this application locally, you need to have the following software installed on your system:

- Node.js and npm (for the frontend).
- Python 3.x and pip (for the backend).
- Docker (optional, for containerization).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/istoickov/count_words.git
cd count_words
```

#### With docker

You can also run the application using Docker. Make sure you have Docker installed.

1. Build and run the Docker image:

```bash 
docker-compose up --build
```

The frontend will be accessible at http://localhost:3000.
The backend API will be accessible at http://localhost:8000.

#### Without docker

1. Install frontend dependencies:

```bash
cd frontend
npm install
cd ..
```

2. Install backend dependencies:

```bash
cd backend
pip install -r requirements.txt
cd ..
```

##### Usage

1. Start the frontend:

```bash
cd frontend
npm start
```

The frontend will be accessible at http://localhost:3000.

2. Start the backend:

```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

The backend API will be accessible at http://localhost:8000.



## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.
