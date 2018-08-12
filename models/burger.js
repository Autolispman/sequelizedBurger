module.exports = function (sequelize, DataTypes) {
  let Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
  });

  Burger.associate = function (models) {
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });    
  };
  return Burger;
};
