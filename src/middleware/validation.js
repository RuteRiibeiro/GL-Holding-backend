const { validationResult } = require('express-validator');

const validation = (req, res, next) => {
  const errorFormatter = ({ location, msg }) => `${msg}`;
  const errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return next();
};

module.exports = validation;
