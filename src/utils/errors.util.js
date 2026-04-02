export class AppError extends Error {
    constructor(message, statusCode, details) {
        super(message);
        this.statusCode = statusCode,
        this.details = details
    }
}


export class ValidatorError extends AppError {
    constructor(message, details) {
        super(message || 'Error de Validación', 400, details);
    }
}

export class NotFoundError extends AppError {
    constructor(message, details, entity) {
        super(message || `${entity} No encontrada`, 404, details)
    }
}

export class AgendaError extends AppError {
    constructor(message, details, statusCode) {
        super(message || 'Error en la entidad Agenda', statusCode || 500, details)
    }
}

export class OrderError extends AppError {
    constructor(message, details, statusCode) {
        super(message || 'Error al procesar la entidad Order', statusCode || 500, details)
    }
}

export class DBError extends AppError {
    constructor(message, details, statusCode) {
        super(message || 'Error al comunicarnos con la base de datos', statusCode || 500, details)
    }
}

export class InternalServerError extends AppError {
    constructor(message, details){
        super(message || 'Error interno de servidor', 500, details)
    }
}
