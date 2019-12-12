import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../src/app/app.controller';
import { RatingService } from '../../src/rating.service';
import { mediaSearchProvider } from '../../src/app/app.module';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [mediaSearchProvider, RatingService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('healthCheck', () => {
    it('should be healthy', () => {
      expect(appController.healthCheck()).toBeTruthy();
    });
  });

  describe('search', () => {
    it('should throw bad request', () => {
      let exception: HttpException;
      try {
        appController.search(null, 0, 0);
      } catch (e) {
        exception = e as HttpException;
      }
      expect(!!exception).toBeTruthy();
      expect(exception.getStatus()).toBe(HttpStatus.BAD_REQUEST);
    });
  });

  describe('top', () => {
    it('getTop', () => {
      expect(appController.getTop()).toBe('top');
    });
  });

});
