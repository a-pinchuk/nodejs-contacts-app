const { validateBody } = require('./validateBody');
const isValidId = require('./isValidId');
const { auth } = require('./auth');

module.exports = {
  auth,
  validateBody,
  isValidId,
};
