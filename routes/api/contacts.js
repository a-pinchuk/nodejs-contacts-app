const express = require('express');
const { isValidId } = require('../../middlewares');

const router = express.Router();

const ctrl = require('../../controllers/contacts');
const { validateBody } = require('../../middlewares');
const { schemas } = require('../../models/contact');

router.get('/', ctrl.getAll);
router.get('/:contactId', isValidId, ctrl.getContactById);
router.post('/', validateBody(schemas.addSchema), ctrl.add);
router.delete('/:contactId', isValidId, ctrl.deleteContact);
router.put('/:contactId', isValidId, validateBody(schemas.addSchema), ctrl.update);
router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
