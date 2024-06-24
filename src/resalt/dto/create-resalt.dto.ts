import { IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class DogPlaceDto {
  @IsNumber()
  DogPlaceNum: number;

  @IsNumber()
  DogPlaceOdd: number;
}

export class CreateResaltDto {
  @IsNumber()
  gameId: number;

  @ValidateNested()
  @Type(() => DogPlaceDto)
  First: DogPlaceDto;

  @ValidateNested()
  @Type(() => DogPlaceDto)
  Second: DogPlaceDto;
}



