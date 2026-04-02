import PacienteService from "../services/PacienteService.js";

export class PacienteController {

    static async getAll(req, res) {
        try {
            const data = await PacienteService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async getByRut(req, res) {
        try {
            const { rut } = req.params;
            const data = await PacienteService.getByRut(rut);
            res.json(data);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };

    static async create(req, res) {
        try {
            const data = await PacienteService.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    static async update(req, res) {
        try {
            const { rut } = req.params;
            const data = await PacienteService.update(rut, req.body);
            res.json(data);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    static async remove(req, res) {
        try {
            const { rut } = req.params;
            const data = await PacienteService.delete(rut);
            res.json(data);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
}