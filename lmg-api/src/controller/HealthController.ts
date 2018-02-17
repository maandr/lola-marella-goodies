import AbstractController from './AbstractController'

export default class HealthController extends AbstractController {
    constructor(router: any) {
        super(router)
    }

    public mountRoutes(router: any): void {
        router.get('/health', this.healthCheck)
    }

    public healthCheck(request: any, response: any): void {
        console.log('Health check successful.')
        response.status(200).send()
    }
}