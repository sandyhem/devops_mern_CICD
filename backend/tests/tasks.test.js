const request = require('supertest');
const {server,app} = require('../index');
const { default: mongoose } = require('mongoose');

// test suite with only one test case
describe('GET /api/tasks', () => {
    it('should return 200 ok', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.status).toBe(200);
   });
    it('should return object ok', async () => {
        const res = await request(app).get('/api/tasks');   
        // expect(Array.isArray(res.body)).toBe(true);
        expect(typeof res.body).toBe('object');
        expect(res.body).toHaveProperty('tasks');
        console.log(res.body.tasks,"Data seeded");
    });
});


//you need to close all connections here
afterAll(async ()=>{
    await mongoose.connection.close();
    await server.close();
})