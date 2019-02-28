const user = process.env.NODE_ORACLEDB_USER
const password = process.env.NODE_ORACLEDB_PASSWORD
const connectString = process.env.NODE_ORACLEDB_CONNECTIONSTRING

const dbConfig = {
    user: user,
    password: password,
    connectString: connectString
};

// export the knex query builder/querier
export default require('knex')({
    dialect: 'oracledb',
    client: 'oracledb',
    connection: dbConfig
})