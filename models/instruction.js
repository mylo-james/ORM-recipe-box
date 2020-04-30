'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define(
    'Instruction',
    {
      specification: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "specification shouldn't be empty",
          },
          notNull: {
            msg: "specification shouldn't be null",
          },
        },
      },
      listOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: [1],
            msg: "list order length can't be less than 0"
          },
          notEmpty: {
            msg: "list order shouldn't be empty",
          },
          notNull: {
            msg: "list order shouldn't be null",
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
  Instruction.associate = function (models) {
    Instruction.belongsTo(models.Recipe, {foreignKey: 'recipeId'})
  };
  return Instruction;
};
