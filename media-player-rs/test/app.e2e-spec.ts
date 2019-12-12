import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api (GET) : should be ok', () => {
    return request(app.getHttpServer())
      .get('/api')
      .expect(HttpStatus.OK)
      .expect('true');
  });

  it('/api/search (GET) : should throw bad request', () => {
    return request(app.getHttpServer())
      .get('/api/search')
      .expect(HttpStatus.BAD_REQUEST);
  });

  it('/api/search (GET) : should be ok', () => {
    return request(app.getHttpServer())
      .get('/api/search?keywords=aviv')
      .expect(HttpStatus.OK);
  });

  it('/api/top (GET) : should be ok', () => {
    return request(app.getHttpServer())
      .get('/api/top')
      .expect(HttpStatus.OK);
  });
});
