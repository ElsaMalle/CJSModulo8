
// export const checkAuth = (req, res, next) => {
//     console.log('Verificando autenticación del usuario...');
//     const isLogged = true;

//     //return res.status(401).json({ message: "usuario invalido" });

//     next();
// };

import jwt from "jsonwebtoken";
import { env } from "../config/env.config.js";

const { auth: { secret } } = env

export const checkAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if(!authHeader) {
            res.status(401).json({
                message: 'Token no proporcionado',
                statusCode: 401
            })
            return
        }

        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null

        if(!token) {
            console.log('Token no proporcionado o malformado')
            res.status(401).json({
                message: 'Token no proporcionado o malformado',
                statusCode: 401
            })
            return
        }

        const decoded = jwt.verify(token, secret)

        console.log('Payload decodificado: ', decoded)
        req.user = decoded
        next()
    } catch (error) {
        console.log('Error al verificar el token: ', error.message)
        return res.status(401).json({ 
            message: 'Token inválido o expirado', 
            statusCode: 401
        })
    }
}
