import * as mysql from 'mysql'

const MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME
const MYSQL_USERNAME = process.env.MYSQL_USERNAME
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
const MYSQL_DATABASE = process.env.MYSQL_DATABASE

export class Mysql {
    private connection: any

    constructor() {
        this.connect()
    }

    public connect(): void {
        this.connection = mysql.createConnection({
            host     : MYSQL_HOSTNAME,
            user     : MYSQL_USERNAME,
            password : MYSQL_PASSWORD,
            database : MYSQL_DATABASE
        })
        this.connection.connect((error) => {
            if(error) console.log(error)
        })
    }

    public async query(statement: string, bindings: Array<any> = []): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connection.query(statement, bindings, (error, results, fields) => {
                if(error) {
                    reject(error)
                }

                if(results.length > 1) {
                    resolve(results)
                } else {
                    resolve(results[0])
                }
            })
        })
    }
}

export default new Mysql()