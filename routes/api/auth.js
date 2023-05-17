const express = require('express');
const { validateBody, auth, upload } = require('../../middlewares');
const { schemas } = require('../../models/user');
const ctrl = require('../../controllers/users');

const router = express.Router();

router.get('/current', auth, ctrl.currentUser);
router.post('/register', validateBody(schemas.registerSchema), ctrl.register);
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);
router.post('/logout', auth, ctrl.logout);
router.patch('/', auth, ctrl.updateSubscription);
router.patch('/avatars', auth, upload.single('avatar'), ctrl.updateAvatar);

// router.patch('/:id/image', upload.single('image'), ctrl.uploadImage);

module.exports = router;
