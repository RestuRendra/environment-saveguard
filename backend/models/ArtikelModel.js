import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js";

const Artikel = db.define('artikel',{
  name:{
      type: DataTypes.STRING
  },
  img:{
      type: DataTypes.STRING
  },
  url:{
      type: DataTypes.STRING
  }
},{
  freezeTableName:true
  }
);

export default Artikel;

(async () => {
  await db.sync();
})();