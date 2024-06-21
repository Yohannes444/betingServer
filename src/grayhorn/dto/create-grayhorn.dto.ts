import { IsArray, IsBoolean, IsNumber, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGrayhornDto {
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => Number)
  selectedButtons: number[][];

  @IsNumber()
  betAmount: number;

  @IsBoolean()
  isExactaActive: boolean;

  @IsBoolean()
  isQuinellaActive: boolean;
}