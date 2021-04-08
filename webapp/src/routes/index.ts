import { Router } from 'express';

import page404 from './errors/404';
import root from './root';
import dummy from './dummy';

const router = Router();

router.use(root);
router.use(dummy);
router.use(page404);

export default router;
