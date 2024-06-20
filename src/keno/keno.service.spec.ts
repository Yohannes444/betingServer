import { Test, TestingModule } from '@nestjs/testing';
import { KenoService } from './keno.service';

describe('KenoService', () => {
  let service: KenoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KenoService],
    }).compile();

    service = module.get<KenoService>(KenoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
