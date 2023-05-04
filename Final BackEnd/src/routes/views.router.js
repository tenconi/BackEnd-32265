import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ mesagge: 'Home' });
  // res.render('home');
});

router.get('/users', (req, res) => {
  res.json({ mesagge: 'Users' });
  // res.render('users');
});

export default router;
