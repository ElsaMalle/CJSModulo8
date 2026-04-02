import jwt from 'jsonwebtoken'
import { env } from '../config/env.config.js'


const { auth: { secret, expiresIn } } = env 

export const generaToken = (user) => {
    try {
        console.info('Generando token de autenticación')

        const payload = {
          //  id: user.id,
            name: user.name,
            email: user.email
        }

        console.debug('firmando token de autenticación')
        const token = jwt.sign(payload, secret, { expiresIn })
        console.debug('Token generado con éxito', token)

        return token
    } catch (error) {
        console.error(`Error al generar el token: ${error.message}`);
        throw new Error('Error al generar el token')
    }
}