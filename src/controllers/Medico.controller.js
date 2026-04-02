import MedicoService from "../services/MedicoService.js";

export class MedicoController {
    static async getAll(req, res) {
        try {
            const data = await MedicoService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async getByRut(req, res) {
        try {
            const { rut } = req.params;
            const data = await MedicoService.getByRut(rut);
            res.json(data);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };

    static async create(req, res) {
        try {
            const data = await MedicoService.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    static async update(req, res) {
        try {
            const { rut } = req.params;
            const data = await MedicoService.update(rut, req.body);
            res.json(data);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    static async remove(req, res) {
        try {
            const { rut } = req.params;
            const data = await MedicoService.delete(rut);
            res.json(data);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}