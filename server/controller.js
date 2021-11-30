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
        url TEXT;`)
        .then(res.sendStatus(200))
    },
    insertResources: (req, res) => {
        let {url} = req.body
        sequelize.query(`INSERT INTO resources (url)
        values ${url};
        `)
         .then(dbRes => res.status(200).send(dbRes[0]))
        
    },
    getResources: (req, res) => {
        sequelize.query(`SELECT * FROM resources;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
    }
}
