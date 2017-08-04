'use strict';
const models = require('./../models');

module.exports = {
	up: function(queryInterface, Sequelize) {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		let calendars = [];
		for (let i = 0; i < 10; i++) {
			calendars.push({
				name: `Calendar{i}`,
				userId: i + 1
			});
		}
		return queryInterface.bulkInsert('Calendars', calendars);
	},

	down: function(queryInterface, Sequelize) {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
		return queryInterface.bulkDelete('Calendars', null, {}, models.Calendar);
	}
};
