import Paciente from "../models/Paciente.js";

class PacienteService {

    static async getAll() {
        return await Paciente.findAll();
    }

    static async getByRut(rut) {
        const paciente = await Paciente.findByPk(rut);
        if (!paciente) throw new Error("Paciente no encontrado");
        return paciente;
    }

    static async create(data) {
        return await Paciente.create(data);
    }

    static async update(rut, data) {
        const paciente = await this.getByRut(rut);
        return await paciente.update(data);
    }

    static async delete(rut) {
        const paciente = await this.getByRut(rut);
        await paciente.destroy();
        return { message: "Paciente eliminado" };
    }
}

export default PacienteService;