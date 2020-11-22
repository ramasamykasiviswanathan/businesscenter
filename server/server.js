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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/createorupdate', (req, res) =>{
    console.log('Got body:', req.body);
    client.query("insert into businesscenter VALUES($1, $2, $3, $4, $5) on CONFLICT (code) DO UPDATE SET NAME = EXCLUDED.NAME, TYPE = EXCLUDED.TYPE, FROM_TM = EXCLUDED.FROM_TM, TO_TM = EXCLUDED.TO_TM",Object.values(req.body), (err, res) => (err && console.log(err.stack)) || console.log(res.rows[0]));
    console.log(req.body.CODE,Object.values(req.body));
    client.query("select * from businesscenter where CODE = $1", [req.body.CODE], (err, rs) => {
      res.send(rs.rows);
    });
    
 });
app.listen(5000, ()=>console.log('Server Started'));

//curl --header "Content-Type: application/json" --request POST --data '{"CODE":"ROOM","NAME":"VIP","TYPE":"BROWNY ROOM","FROM_TM":"2020-11-21 19:04:40.502Z","TO_TM":"2020-11-21 19:04:40.502Z"}' http://localhost:3000/createorupdate
