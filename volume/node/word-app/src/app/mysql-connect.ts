import * as mysql from "promise-mysql";
import config from "./mysql-config";


const connection = async () => {
    return await mysql.createConnection(config.db)

};

const getAllData = () => {
    connection()
        .then((connection) => {
            const result = connection.query("SELECT * FROM wordtable");
            connection.end()
            return result;
        })
}

export default getAllData