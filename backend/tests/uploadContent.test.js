const Uploadcontent = require('../model/Uploadcontent')
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
    // the code below is for Uploadcontent testing
    it('Uploadcontent testing ', () => {
        const content = {
            'heading': 'python programming basic',
            'video':'video.mp4',
            'content_description':'this is basic course ',
            'categories':'programming',
            'price':'200',
            
        }
        return Uploadcontent.create(content)
            .then((content_test) => {
                expect(content_test.categories).toEqual('programming');
            });
    });


});