import { Test, TestingModule } from '@nestjs/testing';
import { ResaltController } from './resalt.controller';
import { ResaltService } from './resalt.service';

describe('ResaltController', () => {
  let controller: ResaltController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResaltController],
      providers: [ResaltService],
    }).compile();

    controller = module.get<ResaltController>(ResaltController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
