# Song API - Node.js Backend Service

This is a Node.js backend service for managing a collection of songs. It utilizes MongoDB for data persistence and provides an API for CRUD operations and fetching song statistics.

**Features**

- Create, read, update, and delete songs.
- Retrieve all songs.
- Get a song by its ID.
- Update a song by its ID.
- Delete a song by its ID.
- Retrieve various song statistics:
  - Total number of songs.
  - Total number of artists.
  - Total number of albums.
  - Total number of genres.
  - Number of songs per genre.
  - Number of songs per artist.
  - Number of songs per album.

**Dependencies**

- Express.js - Web framework for building APIs
- Mongoose - Object Data Modeling (ODM) library for interacting with MongoDB
- dotenv - Loads environment variables from a `.env` file
- cors - Enables Cross-Origin Resource Sharing (CORS)

**Installation**

1. Clone this repository.
2. Install the required dependencies: `npm install`

**Configuration**

1. Create a .env file in the project root directory.
2. Add the following environment variables to your `.env` file:

- `CONNECTION_URL`: The connection string for your MongoDB database.
- `PORT` (optional): The port on which the server will listen. Defaults to `8000`.

**Usage**

1. Start the server: `npm install`
2. The server will listen on the specified port (`8000` by default).

**API Endpoints**

The API is accessible under the `/api` base path.

**Songs**

- **Create a song (POST /api/songs):**
  - Request Body: `{ title: string, artist: string, album: string, genre: string }`
  - Response: The newly created song object.
- **Get all songs (GET /api/songs):**
  - Response: An array of song objects.
- **Get a song by ID (GET /api/songs/:id):**
  - Path Parameter: `:id` (the ID of the song)
  - Response: The song object if found, otherwise a 404 Not Found error.
- **Update a song by ID (PUT /api/songs/:id):**
  - Path Parameter: `:id` (the ID of the song)
  - Request Body: `{ title: string, artist: string, album: string, genre: string }`
  - Response: The updated song object if found, otherwise a 400 Bad Request error.
- **Delete a song by ID (DELETE /api/songs/:id):**
  - Path Parameter: `:id` (the ID of the song)
  - Response: Response: A success message if deleted, otherwise a 404 Not Found error.

**Song Statistics**

- Get total number of songs (GET /api/songs/stats/total):
  - Response: An object containing the `totalSongs` property.
- Get total number of artists (GET /api/songs/stats/artists):
  - Response: An object containing the `totalArtists` property.
- Get total number of albums (GET /api/songs/stats/albums):
  - Response: An object containing the `totalAlbums` property.
- Get total number of genres (GET /api/songs/stats/genres):
  - Response: An object containing the `totalGenres` property.
- Get number of songs per genre (GET /api/songs/stats/genres/:genre):
  - Path Parameter: `:genre` (the name of the genre)
  - Response: An object containing the `songsPerGenre` property.
- Get number of songs per artist (GET /api/songs/stats/artists/:artist):
  - Path Parameter: `:artist` (the name of the artist)
  - Response: An object containing the `songsPerArtist` property.
- Get number of songs per album (GET /api/songs/stats/albums/:album):
  - Path Parameter: `:album` (the name of the album)
  - Response: An object containing the `songsPerAlbum` property.
