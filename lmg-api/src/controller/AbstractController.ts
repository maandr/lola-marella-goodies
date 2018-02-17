import Controller from './Controller'

export default abstract class AbstractController implements Controller {
    constructor(router) {
        this.mountRoutes(router)
    }
    
    public abstract mountRoutes(router): void;
}