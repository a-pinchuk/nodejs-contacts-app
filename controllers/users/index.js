const { register } = require('./newUser');
const { login } = require('./loginUser');
const { logout } = require('./logout');
const { updateSubscription } = require('./updateSubscription');
const { currentUser } = require('./currentUser');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  currentUser: ctrlWrapper(currentUser),
  updateSubscription: ctrlWrapper(updateSubscription),
};
