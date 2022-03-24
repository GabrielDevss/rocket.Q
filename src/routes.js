const express = require('express');
const QuestionControllers = require('./controllers/QuestionControllers');
const RoomControllers = require('./controllers/RoomControllers');


const routes = express.Router();

routes.get('/', (req, res) => res.render('index', { page: 'enter-room' }));
routes.get('/create-pass', (req, res) => res.render('index', { page: 'create-pass' }));

routes.post('/create-room', RoomControllers.create);  
routes.get('/room/:room', RoomControllers.open);
routes.post('/enter-room', RoomControllers.enter);

routes.post('/question/create/:room', QuestionControllers.create);
routes.post('/question/:room/:question/:action', QuestionControllers.index);

module.exports = routes;
