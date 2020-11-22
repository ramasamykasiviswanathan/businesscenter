/*const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
//curl --header "Content-Type: application/json" --request POST --data '{"CODE":"ROOM1","NAME":"VVIP","TYPE":"BROWNY ROOM","FROM_TM":"2020-11-21 19:04:40.502Z","TO_TM":"2020-11-21 19:04:40.502Z"}' -i http://localhost:5000/createorupdate
*/
const path = require('path');
const cors = require('cors');
const { Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const client = new Client({
    host: 'ec2-107-20-173-227.compute-1.amazonaws.com',
    port: 5432,
    user: 'eifqdajlsekyln',
    password: '4f9f35a7231046f48755fce2857e6a5c722737fbe9ab56ca25b4fd781ba95611',
    database: 'dmp09og0pfinv',
    ssl: {rejectUnauthorized: false}
  });
client.connect(err => (err && console.log(err.stack)) || console.log('connected'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
app.post('/createorupdate', (req, res) =>{
    console.log('CreateOrUpdate Got body:', req.body);
    client.query("insert into businesscenter VALUES($1, $2, $3, $4, $5) on CONFLICT (code) DO UPDATE SET NAME = EXCLUDED.NAME, TYPE = EXCLUDED.TYPE, FROM_TM = EXCLUDED.FROM_TM, TO_TM = EXCLUDED.TO_TM",Object.values(req.body), (err, res) => (err && console.log(err.stack)) || console.log(res.rows[0]));
    client.query("select * from businesscenter", (err, rs) => (err && console.log(err.stack)) || res.send(rs.rows));
    
 });
 app.get('/getall',(req,res)=>{
  client.query("select * from businesscenter", (err, rs) => (err && console.log(err.stack)) || res.send(rs.rows));
 })
app.listen(5000, ()=>console.log('Server Started'));