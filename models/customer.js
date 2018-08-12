module.exports = function(sequelize, DataTypes) {
    let Customer = sequelize.define("Customer", {
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    return Customer;
  };
  