const { getModel } = require("../model");

async function initialize() {
  const User = getModel('User');
  const current = await User.findOne({
    username: 'admin'
  });
  if (!current) {
    User.create({
      firstName: 'Admin',
      lastName: 'User',
      username: 'admin',
      password: 'Mimamamemimamemimamimama123*',
    });
  }
}

module.exports = {
  initialize
};
