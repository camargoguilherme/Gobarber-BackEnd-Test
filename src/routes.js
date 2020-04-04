import { Router } from 'express';

const routes = new Router();

const root = (req, res) => {
  res.json({ status: 'OK', version: '1.0.0', })
}

routes.get('/', root);

export default routes;