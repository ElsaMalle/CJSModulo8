import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Examen = sequelize.define("Examen", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    paciente_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    nombre_archivo: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
}, {
    tableName: "examen",
    timestamps: false,
});

export default Examen;