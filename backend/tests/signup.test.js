const User = require('../model/user')
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Test_E-content_Database';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});


describe('Insert data', () => {
    // the code below is for insert testing
    it('register user testing ', () => {
        const user = {
            'institution_ID': 'noimage.png',
            'Profie_Picture':'noimage.png',
            'First_name': 'shankar' ,
            'Last_name':'bhandari',
            'Dob': '2000/07/31',
            'gender': 'male',
            'address': 'kalopool',
            'Phone_number': '9867823004',
            'institution_name': 'softwarica college',
            'Email': 'shankar@gmail.com',
            'Password': '1234567890'
        };

        return User.create(user)
            .then((users_test) => {
                expect(users_test.First_name).toEqual('shankar');
            });
    });


});