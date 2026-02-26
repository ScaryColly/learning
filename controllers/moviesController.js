const getMovie = (req, res) => {
    res.send('start wars!');
}

const postMovie = (req, res) => {
    res.send('post start wars!');
}

const deleteMovie = (req, res) => {
    res.send('delete start wars!');
}

const putMovie = (req, res) => {
    res.send('put start wars!');
}

module.exports = {
    getMovie,
    postMovie,
    deleteMovie,
    putMovie
}