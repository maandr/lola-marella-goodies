import EntityRepository from '../entity/EntityRepository'
import Product from './Product'
import ProductController from '../../controller/ProductController';

class ProductRepository extends EntityRepository<Product> {
    
    constructor() {
        super("products")
    }
}

export default new ProductRepository()