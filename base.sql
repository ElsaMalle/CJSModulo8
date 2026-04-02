BEGIN;

CREATE TABLE IF NOT EXISTS paciente
(
    rut character varying(10) NOT NULL,
    nombre character varying(20) NOT NULL,
    apellido character varying(20) NOT NULL,
    mail character varying(100) NOT NULL,
    telefono character varying(11) NOT NULL,
    fecha_nacimiento date NOT NULL,
    PRIMARY KEY (rut)
);

CREATE TABLE IF NOT EXISTS medico
(
    rut character varying(10) NOT NULL,
    nombre character varying(20) NOT NULL,
    apellido character varying(20) NOT NULL,
    especialidad character varying(40) NOT NULL,
    PRIMARY KEY (rut)
);

CREATE TABLE IF NOT EXISTS examen
(
    id serial NOT NULL,
    paciente_id character varying(10) NOT NULL,
    nombre_archivo character varying(50) NOT NULL,
    descripcion character varying(500) NOT NULL
);

END;