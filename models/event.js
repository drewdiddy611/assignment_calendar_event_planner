"use strict";
module.exports = function(sequelize, DataTypes) {
  var CalendarEvent = sequelize.define("CalendarEvent", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    startDateTime: DataTypes.BIGINT,
    endDateTime: DataTypes.BIGINT,
    calendarId: DataTypes.INTEGER
  });

  CalendarEvent.associate = function(models) {
    CalendarEvent.belongsTo(models.Calendar, {
      foreignKey: "calendarId"
    });
  };
  return CalendarEvent;
};
