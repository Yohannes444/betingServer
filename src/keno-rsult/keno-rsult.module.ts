import { Module } from '@nestjs/common';
import { KenoRsultService } from './keno-rsult.service';
import { KenoRsultController } from './keno-rsult.controller';

@Module({
  controllers: [KenoRsultController],
  providers: [KenoRsultService],
})
export class KenoRsultModule {}
