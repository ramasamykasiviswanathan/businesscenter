const { Client } = require('pg');

const client = new Client({
    host: 'ec2-107-20-173-227.compute-1.amazonaws.com',
    port: 5432,
    user: 'eifqdajlsekyln',
    password: '4f9f35a7231046f48755fce2857e6a5c722737fbe9ab56ca25b4fd781ba95611',
    database: 'dmp09og0pfinv',
    ssl: {rejectUnauthorized: false}
  });
client.connect(err => (err && console.log(err.stack)) || console.log('connected'));
client.query("truncate table businesscenter",(err, res) => (err && console.log(err.stack)) || console.log(res.rows[0]));
/*client.query("create table businesscenter (CODE TEXT PRIMARY KEY NOT NULL,NAME TEXT NOT NULL,TYPE TEXT NOT NULL,FROM_TM time,TO_TM time )", (err, res) => (err && console.log(err.stack)) || console.log(res.rows[0]));*/
client.query("insert into businesscenter VALUES($1, $2, $3, $4, $5) RETURNING *", ['ROOM','VIP','BROWNY ROOM',new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ').replace('Z',''), new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ')], (err, res) => (err && console.log(err.stack)) || console.log(res.rows[0]));
client.query("insert into businesscenter VALUES($1, $2, $3, $4, $5) on CONFLICT (code) DO UPDATE SET NAME = EXCLUDED.NAME, TYPE = EXCLUDED.TYPE, FROM_TM = EXCLUDED.FROM_TM, TO_TM = EXCLUDED.TO_TM", ['ROOM','ROOM1','GUEST ROOM1',new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ').replace('Z',''), new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ')], (err, res) => (err && console.log(err.stack)) || console.log(res.rows[0]));
client.query("select * from businesscenter where CODE = $1", ['ROOM'], (err, res) => (err && console.log(err.stack)) || console.log(res.rows[0]));

return client;