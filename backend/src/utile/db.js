const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    // database:"System_pos_node",
    database:"pos_minimart",
    port:"3306",
    dateStrings: 'don'

})

module.exports=db;