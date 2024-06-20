import { IsArray, IsBoolean, IsNumber, ArrayMinSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAnimeDogDto {
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
