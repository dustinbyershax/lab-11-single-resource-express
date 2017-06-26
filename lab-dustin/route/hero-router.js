'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const Hero = require('../model/heros.js');

let heroRouter = module.exports = new Router();

heroRouter.post('/api/heros', jsonParser, (req, res, next) => {
  console.log('hit /api/heros');

  req.body.dateCreated = new Date();

  new Hero(req.body)
  .save()
  .then(hero => res.json(hero))
  .catch(next);
});

heroRouter.get('/api/heros:id', (req, res, next) => {
  console.log('hit get api/notes/:id');

  Hero.findById(req.params.id)
  .then(hero => res.json(hero))
  .catch(next);
});
