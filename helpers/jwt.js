const jwt = require("jsonwebtoken");

const getToken = (db_user) => {
  const payload = { userId: db_user._id, email: db_user.email };

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      }
    );
  });
};

module.exports = getToken;
