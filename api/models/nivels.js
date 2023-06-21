'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nivels extends Model {
    static associate(models) {
      Nivels.hasMany(models.Turmas, {
        foreignKey: 'nivel_id'
      })
    }
  }
  Nivels.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nivels',
    parainod: true
  });
  return Nivels;
};