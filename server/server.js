const express = require("express");
require('dotenv').config()
const cors = require("cors");
const path = require('path')
const app = express();
app.use(cors())
const {
 getResources, createResources
} = require('./controller.js')




//Uploading Files to server
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'))
})

app.get('/eq', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/equations.html'))
})


app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/style.css'))
  })

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.js'))
  })

  app.get('/eq.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/equations.js'))
  })

//Database
app.post('/seed', createResources)

app.get('/resources', getResources)
  

app.listen(4000, () => console.log("Server running on 4000"));