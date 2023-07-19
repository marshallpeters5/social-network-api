# Social Network API

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The Social Network API is a backend application that provides API endpoints for a social media platform. It allows users to interact with the platform by creating, updating, and deleting thoughts, reactions, and user accounts. The API is built using Node.js, Express.js, and MongoDB, making it capable of handling large amounts of unstructured data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
  git clone https://github.com/marshallpeters5/social-network-api.git

2. Navigate to the project directory:
  cd social-network-api

3. Install the dependencies:
  npm install

4. Set up your MongoDB database and update the `MONGODB_URI` in `config.js` with your database connection URI.

## Usage

1. Start the server:
  npm start

2. The server will start running, and you can now access the API endpoints using a tool like [Insomnia](https://insomnia.rest/).

3. Refer to the API Endpoints section below for details on available routes and request/response formats.

## API Endpoints

### Users

- `GET /api/users`: Get all users.
- `GET /api/users/:userId`: Get a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update a user by ID.
- `DELETE /api/users/:userId`: Delete a user by ID.

### Thoughts

- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a single thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by ID.

### Reactions

- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

### Friends

- `POST /api/users/:userId/friends/:friendId`: Add a user to your friends list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a user from your friends list.

## Testing

Testing is not set up for this project.

## Media Demonstration

Screenshot:
![image](https://github.com/marshallpeters5/social-network-api/assets/89714815/82930c84-bc37-46f4-9390-ecc2d12d85b6)

Video Walkthrough: https://github.com/marshallpeters5/social-network-api/assets/89714815/1e5ac87b-92b9-4819-81de-db6ca78af632

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.

2. Create a new branch.

3. Make your changes and commit them.

4. Push the changes to your forked repository.

5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
© [Marshall Peters](https://github.com/marshallpeters5)
