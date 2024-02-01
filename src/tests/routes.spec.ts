import { describe, it,expect } from 'vitest';
import client from './client';


describe('routes', () => {
  it('/ route should return 200', async () => {
    const response = await client.get('/');
    expect(response.status).toBe(200);
  });
});




// describe('routes', () => {
//   it('/users route should return 401 without token', async () => {
//     try {
//       await client.get('/users');
//     } catch (error:any) {
//       expect(error.response.data.message).toBe('You are not authorized');
//       expect(error.response.status).toBe(401);
//     }
//   });
//
// });
