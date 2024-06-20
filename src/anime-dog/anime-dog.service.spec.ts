import { Test, TestingModule } from '@nestjs/testing';
import { AnimeDogService } from './anime-dog.service';

describe('AnimeDogService', () => {
  let service: AnimeDogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeDogService],
    }).compile();

    service = module.get<AnimeDogService>(AnimeDogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
