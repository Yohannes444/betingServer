import { Test, TestingModule } from '@nestjs/testing';
import { AnimeHorsService } from './anime-hors.service';

describe('AnimeHorsService', () => {
  let service: AnimeHorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeHorsService],
    }).compile();

    service = module.get<AnimeHorsService>(AnimeHorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
