
import Song from "../model/song.js";

// Create a new song
export const createSong = async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;

    const saveTitle = title.toLowerCase();
    const saveArtist = artist.toLowerCase();
    const saveAlbum = album.toLowerCase();
    const saveGenre = genre.toLowerCase();

    const newSong = new Song({ title: saveTitle, artist: saveArtist, album: saveAlbum, genre: saveGenre });

    await newSong.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all songs
export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single song by ID
export const getSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.json(song);
  } catch (err) {
    res.status(404).json({ message: 'Song not found' });
  }
};

// Update a song by ID
export const updateSong = async (req, res) => {

  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a song by ID
export const deleteSong = async (req, res) => {

  try {
    await Song.findByIdAndDelete(req.params.id);
    res.json({ message: 'Song deleted' });
  } catch (err) {
    res.status(404).json({ message: 'Song not found' });
  }
};

//Get total number of songs
export const getTotalNumberOfSongs = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    res.json({ totalSongs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get total number of artists
export const getTotalNumberOfArtists = async (req, res) => {
  try {
    const Artists = await Song.distinct('artist');
    const totalNumberOfArtists = Artists.length
    res.json({ totalArtists: totalNumberOfArtists });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get total number of albums
export const getTotalNumberOfAlbums = async (req, res) => {
  try {
    const Albums = await Song.distinct('album');
    const totalNumberOfAlbums = Albums.length
    res.json({ totalAlbums:  totalNumberOfAlbums});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get total number of genres
export const getTotalNumberOfGenres = async (req, res) => {
  try {
    const Genres = await Song.distinct('genre');
    const totalNumberOfGenres = Genres.length
    res.json({ totalGenres: totalNumberOfGenres });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get total number of songs per genre
export const getNumberOfSongsPerGenre = async (req, res) => {
  try {
    const songsPerGenre = await Song.countDocuments({ genre: req.params.genre });
    res.json({ songsPerGenre });
  } catch (err) {
    res.status(404).json({ message: 'Genre not found' });
  }
};

// Get total number of songs per artist
export const getNumberOfSongsPerArtist = async (req, res) => {
  try {
    const songsPerArtist = await Song.countDocuments({ artist: req.params.artist });
    res.json({ songsPerArtist });
  } catch (err) {
    res.status(404).json({ message: 'Artist not found' });
  }
};

// Get total number of songs per album
export const getNumberOfSongsPerAlbum = async (req, res) => {
  try {
    const songsPerAlbum = await Song.countDocuments({ album: req.params.album });
    res.json({ songsPerAlbum });
  } catch (err) {
    res.status(404).json({ message: 'Album not found' });
  }
};