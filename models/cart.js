const sequilize = require("../util/database");
const { Sequilize, DataTypes } = require("sequelize");

const Cart = sequilize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
