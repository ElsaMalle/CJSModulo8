import Medico from "../models/Medico.js";

class MedicoService {

    static async getAll() {
        return await Medico.findAll();
    }

    static async getByRut(rut) {
        const medico = await Medico.findByPk(rut);
        if (!medico) throw new Error("Médico no encontrado");
        return medico;
    }

    static async create(data) {
        return await Medico.create(data);
    }

    static async update(rut, data) {
        const medico = await this.getByRut(rut);
        return await medico.update(data);
    }

    static async delete(rut) {
        const medico = await this.getByRut(rut);
        await medico.destroy();
        return { message: "Médico eliminado" };
    }
}

export default MedicoService;