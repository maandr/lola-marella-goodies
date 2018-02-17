import AbstractController from './AbstractController'

export default class HealthController extends AbstractController {
    constructor(router) {
        super(router)
    }

    public mountRoutes(router): void {
        router.get('/health', this.healthCheck)
    }

    public healthCheck(request, response): void {
        console.log('Health check successful.')
        response.status(200).send()
    }
}