import { Router } from 'express';
import {NotFoundError} from '../../errors/not-found-error';

const router = Router();

router.all('*', async (req, res) => {
  throw new NotFoundError();
});

export default router;
