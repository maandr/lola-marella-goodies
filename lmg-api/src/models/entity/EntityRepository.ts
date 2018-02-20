import db from '../database/mysql'

export default class EntityRepository<T> {

    protected tableName: string

    constructor(tableName: string) {
        this.tableName = tableName
    }

    public async findAll(): Promise<Array<T>> {
        return await db.query("SELECT * FROM " + this.tableName)
    }

    public async findOne(id: number): Promise<T> {
        return await db.query("SELECT * FROM " + this.tableName + " WHERE id = ?", [ id ])
    }

    public async delete(id: number): Promise<void> {
        return await db.query("DELETE FROM " + this.tableName + " WHERE id = ?", [ id ])
    }
}