import Controller from './Controller'
import db from '../models/database/mysql'

export default class HealthController implements Controller {

    public mountRoutes(router: any): void {
        router.get('/health', this.healthCheck)
    }

    public healthCheck(request, response): void {
        console.log("Express UP")
        db.query("SELECT 1")
            .then((results) => {
                console.log("MySQL UP")
                response.status(200).send()                
            })
            .then(() => console.log("Health check successful."))
            .catch((error) => {
                console.log(error)
                console.log("MySQL DOWN")
                response.status(500).send()
            })
        
    }
}