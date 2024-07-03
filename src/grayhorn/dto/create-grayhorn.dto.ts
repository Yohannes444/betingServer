import { IsArray, IsBoolean, IsNumber, ArrayMinSize,IsString } from 'class-validator';
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
  
  @IsString()
  tiketId: string;
}