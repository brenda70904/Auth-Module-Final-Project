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
      password: '123',
      subject: 'science',
    });
    const responseTwo = await mockRequest.post('/teacher').send({
      name: 'Captain Marvel',
      password: '321',
      subject: 'social studies',
    });

    expect(response.body.name).toEqual('Spiderman');
    expect(responseTwo.body.name).toEqual('Captain Marvel');
    expect(response.body.password).toEqual('123');
    expect(responseTwo.body.password).toEqual('321');
    expect(response.body.subject).toEqual('science');
    expect(responseTwo.body.subject).toEqual('social studies');

  });




  it ('handles teacher get', async()=>{
    const response = await mockRequest.get('/teacher');

    expect(response.status).toBe(200);
    expect(response).toBeTruthy();

  });

  it ('handles student get', async()=>{
    const response = await mockRequest.get('/student');

    expect(response.status).toBe(200);
    expect(response).toBeTruthy();

  });
  
});