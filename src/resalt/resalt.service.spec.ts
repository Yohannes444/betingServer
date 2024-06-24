import { Test, TestingModule } from '@nestjs/testing';
import { ResaltService } from './resalt.service';

describe('ResaltService', () => {
  let service: ResaltService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResaltService],
    }).compile();

    service = module.get<ResaltService>(ResaltService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
