import request from 'supertest';
import app from '../src/server';

describe('API Health Check', () => {
  it('should return 200 for health check', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('should return API info on root', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Task Management API');
  });

  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/api/unknown');
    expect(response.status).toBe(404);
  });
});
