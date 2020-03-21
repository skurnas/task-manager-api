const request = require('supertest')
const app = require('../src/app')

test('Should signup 1 new user', async () => {
    await request(app).post('/users').send({
        name: 'Kevin',
        email: 'notreal@notreal.com',
        password: 'asdfasdf'
    }).expect(201)
})