import EntityRepository from '../entity/EntityRepository'
import Product from './Product'

export default class ProductRepository extends EntityRepository<Product> {
    
    constructor() {
        super("products")
    }
}