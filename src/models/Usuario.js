import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Usuario = sequelize.define("Usuario", {
    email: {
        type: DataTypes.STRING(100),
        primaryKey: true, 
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    tableName: "users",
    timestamps: false,
});

export default Usuario;
