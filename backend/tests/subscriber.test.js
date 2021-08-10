const SubscribeUser = require('../model/SubscibeUser')
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

describe('subscribe user testing', () => {
    // the code below is for SubscribeUser testing
    it('SubscribeUser testing ', () => {
        const user = {
            'SubscribeBy_Userid': '60ee8aaf35544435c01d7c60',
            'SubscribeBy_Name':'shankar',
            'SubscribeBy_Email':'harryshankar@outlook.com',
            'SubscribeTo_Userid':'60eefe8574c3884ed8a13801',
            'SubscribeTo_Name':'riya',
            'SubscribeTo_Email':'riya@gmail.com'
            
        }
        return SubscribeUser.create(user)
            .then((testData) => {
                expect(testData.SubscribeBy_Userid).toEqual('60ee8aaf35544435c01d7c60');
            });
    });


});