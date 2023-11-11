module.exports = app => {
  'use strict';
  const express = require('express');
  const persoanaCtrl = require('../controllers/persoanaCtrl')(app.locals.db);
  const router = express.Router();

  router.post('/', persoanaCtrl.create);
  router.put('/', persoanaCtrl.update);
  router.get('/', persoanaCtrl.findAll);
  router.get('/:id', persoanaCtrl.find);
  router.delete('/:id', persoanaCtrl.destroy);

  return router;
};
