var mysql = require('mysql')
var migration = require('mysql-migrations')

const MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME
const MYSQL_USERNAME = process.env.MYSQL_USERNAME
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
const MYSQL_DATABASE = process.env.MYSQL_DATABASE

console.log("MYSQL_HOSTNAME=" + process.env.MYSQL_HOSTNAME)
console.log("MYSQL_USERNAME=" + process.env.MYSQL_USERNAME)
console.log("MYSQL_PASSWORD=" + process.env.MYSQL_PASSWORD)
console.log("MYSQL_DATABASE=" + process.env.MYSQL_DATABASE)

var connection = mysql.createPool({
    connectionLimit: 10,
    host     : MYSQL_HOSTNAME,
    user     : MYSQL_USERNAME,
    password : MYSQL_PASSWORD,
    database : MYSQL_DATABASE
})

migration.init(connection, __dirname + '/migrations')