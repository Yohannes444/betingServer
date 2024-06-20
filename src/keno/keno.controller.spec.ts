import { Test, TestingModule } from '@nestjs/testing';
import { KenoController } from './keno.controller';
import { KenoService } from './keno.service';

describe('KenoController', () => {
  let controller: KenoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KenoController],
      providers: [KenoService],
    }).compile();

    controller = module.get<KenoController>(KenoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
