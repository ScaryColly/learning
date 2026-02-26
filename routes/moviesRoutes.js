const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', (req, res) => {
  moviesController.getMovie(req, res);
});

router.post('/', (req, res) => {
    moviesController.postMovie(req, res);
});

router.delete('/', (req, res) => {
    moviesController.deleteMovie(req, res);
});

router.put('/', (req, res) => {
    moviesController.putMovie(req, res);
});

module.exports = router;