import { UsuarioService } from "../services/UsuarioService.js";

export class UsuarioController {

    static async findAll(req, res) {
        try {
            const data = await UsuarioService.findAll()
            res.status(200).json({
                message: "Usuarios encontrados con éxito",
                statusCode: 200,
                data
            })
        } catch (error) {
            res.status(500).json({
                message: "Error al encontrar los usuarios",
                statusCode: 500,
                error: error.message
            })
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const body = req.body;
            
            const data = await UsuarioService.update(id, body); 

            res.status(200).json({
                message: "Usuario actualizado con éxito",
                statusCode: 200
            });
        } catch (error) {
            res.status(500).json({
                message: "Error al actualizar el usuario",
                statusCode: 500,
                error: error.message
            });
        }
    }
    static async  create  (req, res)  {
        try {
            const data = await UsuarioService.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

}