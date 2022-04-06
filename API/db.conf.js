const mysql=require("mysql");

const conn=mysql.createConnection({
host:'54.156.255.129',
user:'root',
password:'Password123@',
database:'Mobikartdb'
});

module.exports=conn;