import express from 'express';
import { createSong, getAllSongs, getSong, updateSong, deleteSong, getTotalNumberOfSongs, getTotalNumberOfArtists, getTotalNumberOfAlbums, getTotalNumberOfGenres, getNumberOfSongsPerGenre, getNumberOfSongsPerArtist, getNumberOfSongsPerAlbum } from '../controllers/songs.controller.js';

const router = express.Router();

// Create a new song route
router.post('/songs', createSong);

// Get all songs route
router.get('/songs', getAllSongs);

// Get a single song by ID route
router.get('/songs/:id', getSong);

// Update a song by ID route
router.put('/song/:id', updateSong);

// Delete a song by ID route
router.delete('/song/:id', deleteSong);

//Get total number of songs route
router.get('/songs/stats/total', getTotalNumberOfSongs);

// Get total number of artists route
router.get('/songs/stats/artists', getTotalNumberOfArtists);

// Get total number of albums route
router.get('/songs/stats/albums', getTotalNumberOfAlbums);

// Get total number of genres route
router.get('/songs/stats/genres', getTotalNumberOfGenres);

// Get total number of songs per genre route
router.get('/songs/stats/genres/:genre', getNumberOfSongsPerGenre);

// Get total number of songs per artist route
router.get('/songs/stats/artist/:artist', getNumberOfSongsPerArtist);

// Get total number of songs per album route
router.get('/songs/stats/album/:album', getNumberOfSongsPerAlbum);

export default router;