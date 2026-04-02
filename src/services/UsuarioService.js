
import  Usuario  from "../models/Usuario.js";
import { generaToken } from "../utils/generateToken.util.js";
import { comparePassword, hashPassword } from "../utils/password.util.js";

export class UsuarioService {

    static async create(data) {
        try {
            console.log('Creando usuario con data: ', data)
    
            data.password = await hashPassword(data.password)
    
            console.log('Creando usuario en la base de datos')
            const user = await Usuario.create(data)
            console.log('Usuario creado en base de datos')

            const userResponse = user.toJSON()
            delete userResponse.password
            delete userResponse.createdAt
            delete userResponse.updatedAt
            delete userResponse.deletedAt
    
console.log('Usuario creado: ', userResponse)
            return userResponse
        } catch (error) {
            console.error(`No pudimos crear al usuario ${error.message}`)
            throw new Error('No pudimos crear al usuario')
        }
    }

    static async register(data) {
        try {
            console.log('Inicializando registro de usuario')

            //Verificar si el usuario existe
            console.log('Verificando existencia del usuario')
            const existingUser = await Usuario.findOne({ where: { email: data.email }})
            if(existingUser) {
                console.error('El correo electrónico ya esta registrado')
                throw new Error('El correo electrónico ya esta registrado')
            }
            console.log('Nuevo usuario no esta registrado')

            //crear el usuario
            const user = await this.create(data)
            const token = generaToken(user)

            console.log('Usuario registrado con éxito')
            return {
                user,
                token
            }
        } catch (error) {
            console.error(`Error al registrar el usuario: ${error.message}`)
            throw new Error('Error al registrar el usuario')
        }
    }

    static async login(data) {
        try {
            console.log('Inicializando Servicio de Login')

            const user = await Usuario.findOne({
                where: { email: data.email },
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
            })

            if(!user || !data.password) {
                console.warn('Login fallido, faltan credenciales')
                throw new Error('Credenciales invalidas')
            }

            const isPasswordValid = await comparePassword(data.password, user.password)

            if(!isPasswordValid) {
                console.error('Credenciales inválidas')
                throw new Error('Credenciales inválidas')
            }

            const userResponse = user.toJSON()
            delete userResponse.password

            const token = generaToken(userResponse)

            console.log('Login éxitoso')
            return {
                user: userResponse,
                token
            }
        } catch (error) {
            console.error(`Error en login: ${error.message}`)
            throw new Error('Error al momento de loguear')
        }
    }

    static async findAll() {
        try {
            console.log('Incializando búsqueda de usuarios')
            const users = await Usuario.findAll({
                attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'] }
            })
            console.log(`Se encontraron ${users.length} usuarios`)
            return users
        } catch (error) {
            console.error(`Error al encontrar los usuarios: ${error.message}`)
            throw new Error('Error al encontrar los usuarios')
        }
    }
}