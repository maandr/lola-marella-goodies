import Controller from './Controller'

export default abstract class AbstractController implements Controller {
    constructor(router: any) {
        this.mountRoutes(router)
    }
    
    public abstract mountRoutes(router: any): void;
}