'use strict';

// const { db } = require('../src/models/');

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

// //start db before tests
// beforeAll(async()=>{
//   await db.sync();
// });

// //drop db after
// afterAll(async()=>{
//   await db.drop();
// });

describe ('SERVERTEST', ()=>{
  it ('handles base route', async()=>{
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response).toBeTruthy();
  });

  it('creates a teacher', async () => {
    const response = await mockRequest.post('/teacher').send({
      name: 'Spiderman',
      email: '123',

    });
    const responseTwo = await mockRequest.post('/teacher').send({
      name: 'Captain Marvel',
      email: '321',
    });

    expect(response.body.name).toEqual('Spiderman');
    expect(responseTwo.body.name).toEqual('Captain Marvel');
    expect(response.body.email).toEqual('123');
    expect(responseTwo.body.email).toEqual('321');
  });




  it ('handles teacher get', async()=>{
    const response = await mockRequest.get('/teacher');

    expect(response.status).toBe(200);
    expect(response).toBeTruthy();
    expect(response.length).toBeGreaterThan(0);

  });

  it ('handles student get', async()=>{
    const response = await mockRequest.get('/student');

    expect(response.status).toBe(200);
    expect(response).toBeTruthy();
    expect(response.length).toBeGreaterThan(0);

  });


  it('handles invalid req', async () => {
    const response = await mockRequest.get('/oops');
    expect(response.status).toEqual(404);
  });

  it('handles error', async ()=> {
    const response = await mockRequest.get('/bad');

    expect(response.status).toEqual(500);
    expect(response.text).toBeTruthy();
  });

  it ('deletes', async()=>{
    const response = await mockRequest.post('/teacher').send({
      name: 'Spiderman',
      password: '123',
      subject: 'science',
    });

    const response2 = await mockRequest.delete('/teacher/:name=Spiderman');

    expect(response.body.name).toBe('Spiderman');
    expect(response2.body).toStrictEqual({});
  });
  
});