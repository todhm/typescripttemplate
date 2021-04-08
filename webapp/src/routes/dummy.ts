import { Router } from 'express';
import { getRepository } from 'typeorm';
import express, {Request, Response} from 'express';
import { Dummy } from '../models/entities/dummy';


const router = Router();

router.post('/dummy', async (req, res, next) => {
  const { data } = req.body;
  const dummyEntity = getRepository(Dummy);
  const dummy = new Dummy();
  dummy.data = data;
  dummyEntity.save(dummy);
  res.send({ result: 'success' });
});

export default router;