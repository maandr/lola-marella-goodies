import * as mysql from 'mysql'

const MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME
const MYSQL_USERNAME = process.env.MYSQL_USERNAME
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
const MYSQL_DATABASE = process.env.MYSQL_DATABASE

const PRODUCTION_DB = MYSQL_DATABASE
const DEVELOPMENT_DB = MYSQL_DATABASE + "_develop"
const TEST_DB = MYSQL_DATABASE + "_test"

class Mysql {
    private connection: any
    public constructor() {
        this.connect()
    }

    public connect(): void {
        console.log("Connection to " + MYSQL_HOSTNAME)
        console.log("Credentials: " + MYSQL_USERNAME + "@" + MYSQL_PASSWORD)
        console.log("Using database: " + this.getDatabase())

        this.connection = mysql.createConnection({
            host     : MYSQL_HOSTNAME,
            user     : MYSQL_USERNAME,
            password : MYSQL_PASSWORD,
            database : this.getDatabase()
        })
        this.connection.connect((error) => {
            if(error) {
                console.log(error)
            } else {
                console.log("Connected.")
            }
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

    private getDatabase(): string {
        switch(process.env.NODE_ENV) {
            case "prod":
                return PRODUCTION_DB
            case "dev":
                return DEVELOPMENT_DB
            case "test":
                return TEST_DB
            default:
                console.warn("NODE_ENV is not set - falling back to dev.")
                return DEVELOPMENT_DB
        }
    }
}

export default new Mysql()