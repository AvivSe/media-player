import { Test, TestingModule } from '@nestjs/testing';
import { Body, HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app/app.module';

const username = 'test.user@email.com';
const password = '123456';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let token;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    // try to login first, then to sign up. fail on getting token will lead to rest of the test fail anyway.
    const loginResponse = await request(app.getHttpServer())
      .post('/api/login')
      .send({
        username,
        password,
      });
    expect(loginResponse.status === HttpStatus.UNAUTHORIZED || loginResponse.status === HttpStatus.OK).toBeTruthy();
    if (loginResponse.body.token) {
      token = `Bearer ${loginResponse.body.token}`;
    } else {
      const signUpResponse = await request(app.getHttpServer())
        .post('/api/signup')
        .send({
          username,
          password,
          retypePassword: password,
          firstName: 'Test',
          lastName: 'Segal',
        });
      expect(signUpResponse.status === HttpStatus.CONFLICT || signUpResponse.status === HttpStatus.OK).toBeTruthy();
      token = `Bearer ${signUpResponse.body.token}`;
    }
  });

  const signUpUserHelper = fakeEmail => {
    return request(app.getHttpServer())
      .post('/api/signup')
      .send({
        fakeEmail,
        password,
        retypePassword: password,
        firstName: 'Test',
        lastName: 'Segal',
      });
  };
  afterAll(() => {
    return request(app.getHttpServer())
      .delete(`/api/user/${username}`)
      .set('Authorization', token)
      .expect(HttpStatus.OK);
  });

  it('/api (GET) : Health test', () => {
    return request(app.getHttpServer())
      .get('/api')
      .expect(HttpStatus.OK)
      .expect('true');
  });

  it('/api/search (GET) : Should throw bad request on missing keywords field', () => {
    return request(app.getHttpServer())
      .get('/api/search')
      .set('Authorization', token)
      .expect(HttpStatus.BAD_REQUEST);
  });

  it('/api/search (GET) :  With no token - should fail on authorizatiod', () => {
    return request(app.getHttpServer())
      .get('/api/search')
      .expect(HttpStatus.UNAUTHORIZED);
  });

  it('/api/search (GET) : Should return with initialed response', () => {
    return request(app.getHttpServer())
      .get('/api/search?keywords=aviv')
      .set('Authorization', token)
      .expect(HttpStatus.OK);
  });

  it('/api/top (GET) : Should return with at least one top search', async () => {
    await request(app.getHttpServer())
      .get('/api/search?keywords=aviv')
      .set('Authorization', token)
      .expect(HttpStatus.OK);

    const response = await request(app.getHttpServer())
      .get('/api/top')
      .set('Authorization', token)
      .expect(HttpStatus.OK);
    expect(response.body.aviv).toBeGreaterThan(0);
  });

  it('/api/top (GET) : Should be return with status code 200', () => {
    return request(app.getHttpServer())
      .get('/api/top')
      .set('Authorization', token)
      .expect(HttpStatus.OK);
  });

  it('/api/top (GET) : With invalid token - should fail on authorization', () => {
    return request(app.getHttpServer())
      .get('/api/top')
      .set('Authorization', token + 1)
      .expect(HttpStatus.UNAUTHORIZED);
  });

  it('/api/top (GET) : With no token - should fail on authorization', () => {
    return request(app.getHttpServer())
      .get('/api/top')
      .expect(HttpStatus.UNAUTHORIZED);
  });

  it('/api/user (DELETE) : Except delete many ok', async () => {
    let creationResponse = await request(app.getHttpServer())
      .post('/api/signup')
      .send({
        username: `1${username}`,
        password,
        retypePassword: password,
        firstName: 'Test',
        lastName: 'Segal',
      });

    expect(creationResponse.status === HttpStatus.CONFLICT || creationResponse.status === HttpStatus.OK).toBeTruthy();

    creationResponse = await request(app.getHttpServer())
      .post('/api/signup')
      .send({
        username: `2${username}`,
        password,
        retypePassword: password,
        firstName: 'Test',
        lastName: 'Segal',
      });
    expect(creationResponse.status === HttpStatus.CONFLICT || creationResponse.status === HttpStatus.OK).toBeTruthy();

    const deletionResponse = await request(app.getHttpServer())
      .delete('/api/user')
      .set('Authorization', token)
      .send([`1${username}`, `2${username}`])
      .expect(HttpStatus.OK);

    expect(deletionResponse.body.deletedCount).toBe(2);
  });

  it('/api/top (POST) : Should failed on conflict', async () => {
    return request(app.getHttpServer())
      .post('/api/signup')
      .send({
        username,
        password,
        retypePassword: '123456',
        firstName: 'Test',
        lastName: 'Segal',
      })
      .expect(HttpStatus.CONFLICT);
  });
});
