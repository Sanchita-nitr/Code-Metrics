const request = require('supertest');
const app = require('../server'); // Import the server

describe('Performance Routes', () => {
  it('should get performance data for authenticated user', async () => {
    const response = await request(app)
      .get('/api/performance')
      .set('Authorization', 'Bearer your_token_here'); // Replace with a valid token

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('linearPredictions');
    expect(response.body).toHaveProperty('logisticPredictions');
  });

  it('should return 401 for unauthorized access', async () => {
    const response = await request(app).get('/api/performance');
    expect(response.status).toBe(401);
  });
});
