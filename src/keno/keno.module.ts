import { Module } from '@nestjs/common';
import { KenoService } from './keno.service';
import { KenoController } from './keno.controller';

@Module({
  controllers: [KenoController],
  providers: [KenoService],
})
export class KenoModule {}
