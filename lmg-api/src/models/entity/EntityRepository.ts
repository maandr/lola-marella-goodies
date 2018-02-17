import { Mysql } from '../database/mysql'
import defaultDatabase from '../database/mysql'

export default class EntityRepository<T> {
    protected db: Mysql
    protected tableName: string

    constructor(tableName: string, database: Mysql = defaultDatabase) {
        this.db = database
        this.tableName = tableName
    }

    public async findAll(): Promise<Array<T>> {
        return await this.db.query("SELECT * FROM " + this.tableName)
    }

    public async findOne(id: number): Promise<T> {
        return await this.db.query("SELECT * FROM " + this.tableName + " WHERE id = ?", [ id ])
    }

    public async delete(id: number): Promise<void> {
        return await this.db.query("DELETE FROM " + this.tableName + " WHERE id = ?", [ id ])
    }
}