import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Market = db.define(
  "market",
  {
    name: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT
    },
    rate: {
      type: DataTypes.FLOAT
    },
  },
  {
    freezeTableName: true
  }
);

export default Market;

(async()=>{
  await db.sync();
})
