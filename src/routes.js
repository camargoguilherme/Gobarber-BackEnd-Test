const { Router } = require('express');

const routes = new Router();

const root = (req, res) => {
  res.json({ status: 'OK', version: '1.0.0', })
}

routes.get('/', root);

module.exports = routes;