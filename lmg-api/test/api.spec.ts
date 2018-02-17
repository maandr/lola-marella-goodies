import * as mocha from 'mocha'
import * as request from 'supertest'

describe('loadinig express', () => {

    let server
    let apiClient

    before(() => {
        server = require('../dist/src/Main.js')
        apiClient = request.agent('http://localhost:3000/api/')
    })

    it('should return 200 for GET /api/health', (done) => {
        apiClient
            .get('/health')
            .expect(200, done)
    })

    it('should return 404 for non existing resource', (done) => {
        apiClient
            .get('/non-existing')
            .expect(404, done)
    })
})