import { generaToken } from './src/utils/generateToken.util.js';
import {comparePassword, hashPassword} from './src/utils/password.util.js'

//hashPassword('miContraseña321');

//comparePassword('miContraseña123', '$2b$10$H3rHl8.NzOB0NDs3RWIo7OZlI4J93abNzpN.9yAO.h5eAyAnBCI2e');

generaToken({
    name: 'daniel',
    email: 'daniel@example.com'
});