import dotenv from 'dotenv';
import express from 'express'; 
import { DB } from './src/services/db/DB.service.js'; 

dotenv.config();

const app = express(); 

const PORT = process.env.PORT || 3000;


app.use(express.json());

import pacienteRoutes from './src/routes/paciente.route.js';
app.use('/api/pacientes', pacienteRoutes);
import usuarioRoutes from './src/routes/usuario.route.js';
app.use('/api', usuarioRoutes);
import acercaRoutes from './src/routes/acerca.route.js';
app.use('/api', acercaRoutes);
import medicoRoutes from './src/routes/medico.route.js';
app.use('/api/medicos', medicoRoutes);
import fileRoutes from './src/routes/file.route.js';
app.use('/api/files', fileRoutes);

const startServer = async () => {
    try {

        await DB.init();
      
        app.listen(PORT, () => {
        });

    } catch (error) {
        console.error('Error al iniciar el sistema:', error);
    }
};


// Ruta de prueba opcional
// app.get('/', (req, res) => res.send('API Online'));

startServer();