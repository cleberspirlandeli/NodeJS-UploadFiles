const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')

routes.get('/posts', (req, res) => {
    res.json({ hello: 'word' });
});

routes.post('/posts', multer(multerConfig).single("file"), (req, res) => {
    console.log(req.file);
    return res.json({ hello: 'word1' });
});

module.exports = routes;