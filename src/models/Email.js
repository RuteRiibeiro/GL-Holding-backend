const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Email = db.define(
  'Email',
  {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      allowNull: false, 
      primaryKey: true,
    },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true 
    },
  },
  { timestamps: true },
);

module.exports = Email;
