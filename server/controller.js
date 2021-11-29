require('dotenv').config()

const Sequelize = require('sequelize')

const { CONNECTION_STRING } = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

module.exports = {
    createResources: (req, res) => {
        sequelize.query(`CREATE TABLE resources
        resource_id SERIAL PRIMARY KEY
        name TEXT;`)
        .then(res.sendStatus(200))
    },
    insertResources: (req, res) => {
        sequelize.query(`INSERT INTO resources (name)
        `)
    },
    getResources: (req, res) => {
        sequelize.query(`SELECT * FROM resources;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
    }
}
