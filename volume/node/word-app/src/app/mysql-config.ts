export default {
  
    /**
     * databaseの設定
     */
    db: {
      host: process.env.DB_HOST,
      port: Math.floor(Number(process.env.DB_PORT)),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      multipleStatements: true,
    },
  };