module.exports = function(sequelize, DataTypes) {
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
    return Burger;
  };
  