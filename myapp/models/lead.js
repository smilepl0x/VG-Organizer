/* jshint indent: 2 */

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lead = sequelize.define('Game', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,

      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    timePlayed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  });

  return Lead;
};
