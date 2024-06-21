import { IsArray, IsNumber, ArrayMinSize, IsPositive } from 'class-validator';

export class CreateKenoDto {
  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  selectedButtonsS: number[];

  @IsNumber()
  @IsPositive()
  betAmount: number;

  @IsNumber()
  @IsPositive()
  odd: number;

  @IsNumber()
  @IsPositive()
  possibleWin: number;
}
