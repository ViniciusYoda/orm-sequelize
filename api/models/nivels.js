'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nivels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
  });
  return Nivels;
};