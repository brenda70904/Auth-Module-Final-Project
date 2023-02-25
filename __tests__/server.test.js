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
    let response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response).toBeTruthy();
  });

  
});