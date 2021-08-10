const request = require('supertest');
// app is supposed to point to the app.js file
jest.useFakeTimers()
const app = require('../app');

describe('Insert data', () => {
    test('respond with valid HTTP status code and description and message',async () => {
        // Make POST Request
       await request(app).post('/contact/insert')
            .send({
                name: "shankar",
                email: "shankar@gmail.com",
                phone: "9867823004",
                message: "hello"
            })
            // Compare response with expectations
            .expect(200)
    })
})
