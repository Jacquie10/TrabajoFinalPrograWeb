'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Operacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.STRING
      },
      
      tipoOperacion: {
        type: Sequelize.STRING
      },
      tipoCambio: {
        type: Sequelize.FLOAT
      },
      montoFinal: {
        type: Sequelize.FLOAT
      },
      estado: {
        type: Sequelize.STRING
      },
      cliente: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Operacion');
  }
};