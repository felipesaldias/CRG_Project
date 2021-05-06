module.exports = {
    secret: process.env.SUPER_SECRET_PASSWORD || 'defaultPass',
    port: process.env.PORT || 8001
  };