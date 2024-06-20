import { Test, TestingModule } from '@nestjs/testing';
import { AnimeDogController } from './anime-dog.controller';
import { AnimeDogService } from './anime-dog.service';

describe('AnimeDogController', () => {
  let controller: AnimeDogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimeDogController],
      providers: [AnimeDogService],
    }).compile();

    controller = module.get<AnimeDogController>(AnimeDogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
