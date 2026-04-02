import bcrypt from 'bcrypt'
import { env } from "../config/env.config.js";


const { auth: { saltRound }  } = env

/**
 * Encripta una contraseña usando bcrypt
 * @param {string} password - La contraseña en texto plano 
 * @returns {Promise<string>} - contraseña encriptada
 */
export const hashPassword = async (password) => {
    try {
        console.debug('Inicializando encriptación de contraseña')
        const hash = await bcrypt.hash(password, saltRound)
        console.debug('Contraseña encriptada con éxito', { hash }  )
        return hash
    } catch (error) {
        console.error(`Error al encriptar la contraseña ${error.message}`, error);
        throw new Error('Error al encriptar la contraseña')
    }
}

/**
 * Compara una constraseña en texto plano con una encriptada
 * @param {string} password - contraseña en texto plano
 * @param {string} hashedPassword - contraseña encriptada
 * @returns {Promise<boolean>} - devuelve un booleano dependiendo si coincide o no las contraseñas
 */
export const comparePassword = async (password, hashedPassword) => {
    try {
        console.debug('Inicializando verificación de contraseña')
        const isMatch = await bcrypt.compare(password, hashedPassword) // Me va a deolver un booleano
        console.debug(`Contraseña ${isMatch ? 'valida' : 'inválida'}`)
        return isMatch
    } catch (error) {
        console.error(`Error al comparar contraseña ${error.message}`, error);
        throw new Error('Error al encriptar la contraseña')
    }
};