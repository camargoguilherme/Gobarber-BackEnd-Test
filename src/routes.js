import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Guilherme Camargo',
    email: 'guilhermecamargo57@hotmail.com',
    password_hash: '1234567',
  });
  return res.json(user);
});

export default routes;
