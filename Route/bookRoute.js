const {getBooks, postBooks, putBooks, deleteBooks} = require('../Controller/bookController');

const route = require('express').Router()

route.get('/', getBooks);

route.post('/', postBooks);

route.put('/:id', putBooks);

route.delete('/:id', deleteBooks);

module.exports = route;

