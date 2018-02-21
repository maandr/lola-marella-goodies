import Controller from './Controller'
import repository from '../models/product/ProductRepository'
import Product from '../models/product/Product'

export default class ProductController implements Controller {

    public mountRoutes(router: any): void {
        router.get('/products', this.getProducts)
    }

    public getProducts(request: any, response: any): void {
        repository.findAll()
            .then((results) => {
                return response.status(200).json(results).send()
            })
            .catch((error) => {
                console.log(error)
                return response.status(500).send()
            })
    }
}