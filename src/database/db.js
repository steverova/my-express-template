import pkg from "mssql";
import credentials from "./credentials.js";
import config from "../../env.config.js";
const { ConnectionPool } = pkg;

const connection = new ConnectionPool(credentials);

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`SQL Server ${config.server} connection successful`);
  }
});

const execute = async (params, procedure) => {
  const request = connection.request();

  try {
    
    for (const key in params) {
      request.input(key, params[key]);
    }
    const result = await request.execute(procedure);
    return { response: true, message: result };
  } catch (err) {
    
    return { response: false, message: err.message };
  }
};

const select = async (procedure, params = {}) => {
  const request = connection.request();
  try {
    if (Object.keys(params).length > 0) {
      for (const [key, value] of Object.entries(params)) {
        request.input(key, value);
      }
    }
    const result = await request.execute(procedure);

    if (result.recordset.length > 0) {
      return result.recordset;
    } else {
      return { message: "There is no data to display" };
    }
  } catch (err) {
    console.error(err);
    return { err: err };
  }
};

export { execute, select };
