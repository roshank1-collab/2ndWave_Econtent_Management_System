const app = require('../app.js');
const supertest = require('supertest')
const request = supertest(app)



describe('Insert data', () => {
    test('insert data to contact us page', async done => {

        // Make POST Request
        const res = await request.post('/contact/insert')
            .send({
                name: "shankar",
                email: "shankar@gmail.com",
                phone: "9867823004",
                message: "hello"
            })
        // Compare response with expectations
        expect('Content-Type', /json/)
        expect(res.statusCode).toBe(200,done)

    })
})

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTBkMGEyZTBmMjI4NjUwZThhNTI0YWIiLCJpYXQiOjE2Mjg2OTU2MjZ9.evO_0edlj40OW7OJq18opdfOgSRnY07Yr1iNLzOXUog";

//password update testing
describe('Update password', () => {
    test('update password in the user route', async done => {

        // Make put Request
        const res = await request.put('/password')
            .send({
                password: '123456',
                NewPassword: '1234567890'
            }).set('Authorization', 'Bearer ' + token)

        // Compare response with expectations
        expect(res.statusCode).toBe(200, done)
    })
})