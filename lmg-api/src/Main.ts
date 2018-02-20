import app from './App'

const PORT = 3000

let server = app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
    }

    console.log("NODE_ENV=" + process.env.NODE_ENV)
    console.log("MYSQL_HOSTNAME=" + process.env.MYSQL_HOSTNAME)
    console.log("MYSQL_USERNAME=" + process.env.MYSQL_USERNAME)
    console.log("MYSQL_PASSWORD=" + process.env.MYSQL_PASSWORD)
    console.log("MYSQL_DATABASE=" + process.env.MYSQL_DATABASE)

    console.log('lmg-backend is listening on port ' + PORT)
})

export default server