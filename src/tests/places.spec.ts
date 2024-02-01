import { describe, it,expect } from 'vitest';
import client from './client';

describe('create place route', () => {
  it('/places post should return 400 without body', async () => {
    try {
      const place = await client.post('/places');
    } catch (error:any) {
      expect(error.response.status).toBe(400);
    }
  });
});

describe('create place route', () => {
  it('/places post should return 400 without name', async () => {
    try {
      const place = await client.post('/places', {address:'1234'});
    } catch (error:any) {
      expect(error.response.status).toBe(400);
    }
  });
});

describe('create place route', () => {
  it('/places post should return 400 without address', async () => {
    try {
      const place = await client.post('/places', {name:'1234'});
    } catch (error:any) {
      expect(error.response.status).toBe(400);
    }
  });
}
);

describe('create place route', () => {
  it("/places post should return 201 with a place", async () => {

    try {
      const place = await client.post('/places', {name:'1234',address:'1234'});
      expect(place.data).toHaveProperty('name');
      expect(place.data).toHaveProperty('address');
    } catch (error:any) {
      console.log(error); 
    }
  });
  

});


describe('get places route', () => {
  it("/places get should return 200 with places", async () => {

    try {
      const places = await client.get('/places');
      expect(places.data).toBeInstanceOf(Array);
    } catch (error:any) {
      console.log(error); 
    }
  });
  

  });

