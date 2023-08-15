import request from 'supertest';
import App from '@src/app/App';
import routes from '@src/app/routes';

const app = new App(routes).getApp();

describe('Core tests', () => {
  it('Should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Welcome to TIMESMO');
  });

  it('Should Invalid method', async () => {
    const res = await request(app).post('/');
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Invalid method');
  });

  it('Should Invalid method', async () => {
    const res = await request(app).get('/gola');
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Invalid route');
  });
});
