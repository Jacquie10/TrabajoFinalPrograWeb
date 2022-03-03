'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Operacion.init({
    fecha: DataTypes.STRING,
    tipoOperacion: DataTypes.STRING,
    tipoCambio: DataTypes.FLOAT,
    montoFinal: DataTypes.FLOAT,
    estado: DataTypes.STRING,
    cliente: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Operacion',
    freezeTableName: true
  });
  return Operacion;
};