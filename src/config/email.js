module.exports = {
  host: process.env.HOSTMAIL,
  port: 465,
  auth: {
    user: process.env.USERMAIL,
    pass: process.env.PASSMAIL,
  },
};
