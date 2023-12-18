'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'example@example.com',
      password: '$2y$10$FsqSFPZv1DdU1r.5CP4YXO/91PJvK2teqpfzqqQbZr2CwtdOUYzC6',
      hp: '083872369898',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
