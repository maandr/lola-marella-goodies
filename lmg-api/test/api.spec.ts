import * as mocha from 'mocha'
import * as request from 'supertest'

describe('loadinig express', () => {

    let server: any
    let apiClient: any

    before(() => {
        server = require('../dist/src/Main.js')
        apiClient = request.agent('http://localhost:3000/api/')
    })

    it('GET /api/health', (done: any) => {
        apiClient
            .get('/health')
            .expect(200, done)
    })

    it('GET /non-existing', (done: any) => {
        apiClient
            .get('/non-existing')
            .expect(404, done)
    })
})