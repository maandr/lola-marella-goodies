import * as express from 'express'
import * as bodyParser from 'body-parser'
import Controller from './controller/Controller'
import HealthController from './controller/HealthController'

class Application {
    public express: any
    public router: any
    public controllers: Array<Controller>

    constructor() {
        this.express = express()
        this.router = express.Router()

        this.express.use(bodyParser.json())
        this.express.use('/api', this.router)

        this.controllers = [
            new HealthController(this.router)
        ]
    }
}

export default new Application().express