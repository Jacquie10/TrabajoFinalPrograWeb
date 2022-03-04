'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  class dataImp extends Model {
=======
  class DataImp extends Model {
>>>>>>> 198808da17242f5e27d9e4b5bdcbf024e3638187
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
<<<<<<< HEAD
  dataImp.init({
=======
  DataImp.init({
>>>>>>> 198808da17242f5e27d9e4b5bdcbf024e3638187
    cliente: DataTypes.STRING,
    cuenta: DataTypes.STRING,
    direccion: DataTypes.STRING,
    nroTransaccion: DataTypes.STRING
  }, {
    sequelize,
<<<<<<< HEAD
    modelName: 'dataImp',
    freezeTableName:true
  });
  return dataImp;
=======
    modelName: 'DataImp',
    freezeTableName: true
  });
  return DataImp;
>>>>>>> 198808da17242f5e27d9e4b5bdcbf024e3638187
};