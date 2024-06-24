import { IsArray, IsNumber, ArrayMinSize, IsPositive, IsString } from 'class-validator';

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

  @IsString()
  @IsPositive()
  gameId: string;

  @IsString()
  @IsPositive()
  tiketId: string;

  @IsNumber()
  @IsPositive()
  possibleWin: number;
}
