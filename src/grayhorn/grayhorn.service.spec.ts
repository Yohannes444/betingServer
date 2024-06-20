import { Test, TestingModule } from '@nestjs/testing';
import { GrayhornService } from './grayhorn.service';

describe('GrayhornService', () => {
  let service: GrayhornService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrayhornService],
    }).compile();

    service = module.get<GrayhornService>(GrayhornService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
