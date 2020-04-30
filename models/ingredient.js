'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    'Ingredient',
    {
      amount: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "amount shouldn't be empty",
          },
          notNull: {
            msg: "amount shouldn't be null",
          },
        },
      },
      measurementUnitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "measurement unit id shouldn't be empty",
          },
          notNull: {
            msg: "measurement unit id shouldn't be null",
          },
        },
      },
      foodStuff: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "foodStuff shouldn't be empty",
          },
          notNull: {
            msg: "foodStuff shouldn't be null",
          },
        },
      },
      recipeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "recipeId shouldn't be empty",
          },
          notNull: {
            msg: "recipeId shouldn't be null",
          },
        },
      },
    },
    {}
  );
  Ingredient.associate = function (models) {
    Ingredient.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
    Ingredient.belongsTo(models.MeasurementUnit, { foreign: 'measurementUnitId' });
  };
  return Ingredient;
};
