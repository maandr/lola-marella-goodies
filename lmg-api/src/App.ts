import * as express from 'express'
import * as bodyParser from 'body-parser'
import db from './models/database/mysql'
import Controller from './controller/Controller'
import HealthController from './controller/HealthController'
import ProductController from './controller/ProductController'

class Application {
    public express: any
    public router: any
    public controllers: Array<Controller>

    constructor() {
        this.express = express()
        this.router = express.Router()

        this.controllers = [
            new HealthController(),
            new ProductController()
        ]

        this.controllers.forEach(controller => {
            controller.mountRoutes(this.router)
        })

        this.express.use(bodyParser.json())
        this.express.use('/api', this.router)
    }
}

export default new Application().express