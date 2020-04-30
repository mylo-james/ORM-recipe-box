'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define(
    'MeasurementUnit',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'name should not be empty',
          },
          unique: true,
          notNull: {
            msg: 'name should not be null',
          },
        },
      },
    },
    {}
  );
  MeasurementUnit.associate = function (models) {
    MeasurementUnit.hasMany(models.Ingredient, { foreignKey: 'measurementUnitId' });
  };
  return MeasurementUnit;
};
