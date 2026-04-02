import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Medico = sequelize.define("Medico", {
    rut: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    especialidad: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
}, {
    tableName: "medico",
    timestamps: false,
});

export default Medico;