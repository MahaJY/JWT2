const jwt = require('jsonwebtoken');
const UserAuth = require('../models/empmodel'); 
const jwtUtils = require('../utils/JWTutils');
async function authenticateUser(username, password, role) {
    const user = await UserAuth.findOne({
      where: {
        username,
        password,
        role,
      },
    });
  
    return user;
  };
const refreshToken = (req, res) => {
  const refreshToken = req.body.refresh_token;
  if (!refreshToken || !jwtUtils.refreshTokens[refreshToken]) {
    return res.status(403).json({ error: 'Invalid refresh token' });
  }
const userData = jwtUtils.refreshTokens[refreshToken];
  const accessToken = jwtUtils.generateaccessToken(userData);
  res.json({ access_token: accessToken });
};
module.exports = {
 authenticateUser,
  refreshToken,
};