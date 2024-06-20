import { Test, TestingModule } from '@nestjs/testing';
import { GrayhornController } from './grayhorn.controller';
import { GrayhornService } from './grayhorn.service';

describe('GrayhornController', () => {
  let controller: GrayhornController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrayhornController],
      providers: [GrayhornService],
    }).compile();

    controller = module.get<GrayhornController>(GrayhornController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
