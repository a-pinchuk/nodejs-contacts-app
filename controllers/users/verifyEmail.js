const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const verifyEmail = async (req, res) => {
  console.log('🚀 ~ req:', req);
  console.log('tyt');
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw HttpError(400, 'Verify token is not valid');
  }

  await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: null });

  return res.json({ message: 'Success' });
};

module.exports = verifyEmail;
