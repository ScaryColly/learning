const Movie = require('../model/movieModel');

const getMovie = async(req, res) => {
    const filter = req.query
    try {
        if(filter) {
            const movies = await Movie.find(filter);
            res.json(movies);
        } else {
            const movies = await Movie.find();
            res.json(movies);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const getMovieById = async(req, res) => {
    const id = req.params.id;
    console.log(id);

    try {
        const movie = await Movie.findById(id);
        if(movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const postMovie = async(req, res) => {
    const newMovie = req.body;
    console.log(newMovie);

    try {
        const response =await Movie.create(newMovie);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteMovie = async(req, res) => {
    const id = req.params.id;

    try {
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if(deletedMovie) {
            res.json({ message: 'Movie deleted successfully' });
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const putMovie = async(req, res) => {
    const id = req.params.id;
    const updatedMovie = req.body;
    console.log(id, updatedMovie);
    
    try {
        const movie = await Movie.findByIdAndUpdate(id, updatedMovie, { new: true });
        if(movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getMovie,
    getMovieById,
    postMovie,
    deleteMovie,
    putMovie
}