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
//Need to Comment Out Seeding on Final version
module.exports = {
    createResources: (req, res) => {
        sequelize.query(`
        drop table if exists resources;
        
        CREATE TABLE resources(
        resource_id SERIAL PRIMARY KEY,
        link VARCHAR 
        );
        `)
        .then(res.sendStatus(200))
        .catch((err) => console.log(err))
    },
    insertResources: (req, res) => {
        console.log(req.body)
        let {link} = req.body
        sequelize.query(`INSERT INTO resources (link)
        values ('${link}');
        `)
         .then(dbRes => res.status(200).send(dbRes[0]))
         .catch((err) => console.log(err))
        
    },
    getResources: (req, res) => {
        sequelize.query(`SELECT * FROM resources;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch((err) => console.log(err))
    },
    deleteUrl: (req, res) => {
        sequelize.query(`DELETE 
        FROM resources
        WHERE resource_id = ${req.params.id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch((err) => console.log(err))
    }
}
