const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', (req, res) => {
  moviesController.getMovie(req, res);
});

router.get('/:id', (req, res) => {
  moviesController.getMovieById(req, res);
});

router.post('/', (req, res) => {
    moviesController.postMovie(req, res);
});

router.delete('/:id', (req, res) => {
    moviesController.deleteMovie(req, res);
});

router.put('/:id', (req, res) => {
    moviesController.putMovie(req, res);
});

module.exports = router;