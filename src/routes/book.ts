import { Router } from 'express'

//! MIDDLEARES
/* import { auth, role } from '../middlewares/auth' */

//! CONTROLLERS
import bookController from '../controllers/bookController'

const router = Router()

router.get('/', bookController.index)
router.post('/', /* auth(), role('0'), */ bookController.store)
router.get('/add', /* auth(), role('0'), */ bookController.create)
router.get('/:id', bookController.show) // ? .show is down to let .create work
router.put('/:id', /* auth(), role('0'), */ bookController.update)
router.get('/:id/edit', /* auth(), role('0'), */ bookController.edit)
router.delete('/:id', /* auth(), role('0'), */ bookController.destroy)

export default router
