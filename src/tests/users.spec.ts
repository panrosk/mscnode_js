import { describe, it,expect } from 'vitest';
import client from './client';

describe('user route', () => {
  it('/users post should return 400 without body', async () => {
    try {
      const user = await client.post('/users/signup');
    } catch (error:any) {
      expect(error.response.status).toBe(400);
    }
  });
});

describe('user route', () => {
  it('/users post should return 400 without username', async () => {
    try {
      const user = await client.post('/users/signup', {password:'1234'});
    } catch (error:any) {
      expect(error.response.status).toBe(400);
    }
  });
});


describe('user route', () => {
  it('/users post should return 400 without password', async () => {
    try {
      const user = await client.post('/users/signup', {username:'1234'});
    } catch (error:any) {
      expect(error.response.status).toBe(400);
    }
  });
});

describe('user route', () => {
  it('/users post should return 400 without and email', async () => {
    try {
      const user = await client.post('/users/signup', {username:'1234',password:'1234'});
    } catch (error:any) {
      expect(error.response.status).toBe(400);
    }
  });
});

describe('user route', () => {
  it("/users post should return 200 with an user and a token", async () => {

    try {
      const user = await client.post('/users/signin', {username:'1234',password:'1234',email:'oscarfuentes@gmail.com'});
      expect(user.data).toHaveProperty('token');
      expect(user.data).toHaveProperty('user');
    } catch (error:any) {
      console.log(error);
    }
  });
  

});




