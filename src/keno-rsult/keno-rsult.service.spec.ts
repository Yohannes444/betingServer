import { Test, TestingModule } from '@nestjs/testing';
import { KenoRsultService } from './keno-rsult.service';

describe('KenoRsultService', () => {
  let service: KenoRsultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KenoRsultService],
    }).compile();

    service = module.get<KenoRsultService>(KenoRsultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
