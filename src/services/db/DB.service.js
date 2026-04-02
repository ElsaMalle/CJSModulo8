import dbConfig from "../../config/database.js"; 

import { DBError } from "../../utils/errors.util.js";


import Paciente from "../../models/Paciente.js";
import Examen from "../../models/Examen.js";
import Medico from "../../models/Medico.js";

export class DB {
    static async init() {
        try {
            await dbConfig.authenticate();
            console.log('Conexión a Postgres establecida correctamente.');
            
            this.initModels(dbConfig);

            await dbConfig.sync();
            console.log('Modelos sincronizados base de datos.');
        } catch (error) {
            console.error('No conectado a base de datos:', error);
            process.exit(1);
        }
    }

    static initModels(config) {
        try {

            Paciente.hasMany(Examen, { 
                foreignKey: 'paciente_id', 
                sourceKey: 'rut',
                as: 'Examenes' 
            });

            Examen.belongsTo(Paciente, { 
                foreignKey: 'paciente_id', 
                targetKey: 'rut',
                as: 'Paciente' 
            });

        } catch (error) {
            console.error('Error al inicializar los modelos:', error.message);
            throw new DBError('Error al inicializar los modelos', error.message);
        }
    }
}
