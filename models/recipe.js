'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "title shouldn't be empty",
          },
          notNull: {
            msg: "title shouldn't be null",
          },
        },
      },
    },
    {}
  );
  Recipe.associate = function (models) {
    Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true });
    Recipe.hasMany(models.Ingredient, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true });
  };

  return Recipe;
};
