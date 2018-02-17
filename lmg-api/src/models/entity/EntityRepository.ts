import { Mysql } from '../database/mysql'

export default class EntityRepository<T> {
    protected db: Mysql
    protected tableName: string

    constructor(db: Mysql, tableName: string) {
        this.db = db
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