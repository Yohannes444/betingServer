import { Test, TestingModule } from '@nestjs/testing';
import { AnimeHorsController } from './anime-hors.controller';
import { AnimeHorsService } from './anime-hors.service';

describe('AnimeHorsController', () => {
  let controller: AnimeHorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimeHorsController],
      providers: [AnimeHorsService],
    }).compile();

    controller = module.get<AnimeHorsController>(AnimeHorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
