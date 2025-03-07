'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airoplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Flight,{
        foreignKey:'airplaneId',
        onDelete:'cascade'
      });
      this.belongsTo(models.Airport,{
        foreignKey:'code'
      });
      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportId'
      });
    }
  }
  Airoplane.init({
    modelNumber:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlphanumeric:true,
      }
    },
    capacity: {
      type:DataTypes.INTEGER,
      defaultValue:0,
      validate:{
        max:1000
      }
    },
  }, {
    sequelize,
    modelName: 'Airoplane',
  });
  return Airoplane;
};