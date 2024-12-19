const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app'); // Import the server

// Increase Jest Timeout
jest.setTimeout(30000);

beforeAll(async () => {
    const testDB = 'mongodb+srv://arpitmantri40:newpassword123454@cluster0.br1ss.mongodb.net/AppliedSE?retryWrites=true&w=majority';
    try {
        await mongoose.connect(testDB, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to test database successfully');
    } catch (error) {
        console.error('Failed to connect to test database:', error);
    }
});

afterAll(async () => {
    try {
        await mongoose.connection.close();
        console.log('Test database connection closed');
    } catch (error) {
        console.error('Failed to close test database connection:', error);
    }
});

describe('POST /queries', () => {
    it('should save a query and return a success message', async () => {
        const response = await request(app).post('/queries').send({
            name: 'Test Name',
            email: 'Testname@example.com',
            query: 'This is a test query for SIT725'
        });

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Thank you Test Name, we will reach out to you on Testname@example.com');
    });

    it('should return 500 if required fields are missing', async () => {
        const response = await request(app).post('/queries').send({
            name: '',
            email: '',
            query: ''
        });

        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe('Failed to submit query');
    });
});
