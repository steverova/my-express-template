import config from "../../env.config.js";

const credentials = {
  user: config.user,
  password: config.password,
  server: config.server, // Puede ser una dirección IP o un nombre de dominio
  database: config.db,
  port: Number(config.port),
  options: {
    encrypt: true, // para conexiones SSL
    trustServerCertificate: true, // cambiar según tu configuración
  },
  pool: {
    max: 10,
    min: 0,
  },
};

export default credentials;
