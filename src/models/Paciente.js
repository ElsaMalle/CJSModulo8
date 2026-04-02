import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Paciente = sequelize.define("Paciente", {
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
    mail: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
}, {
    tableName: "paciente",
    timestamps: false,
});

export default Paciente;