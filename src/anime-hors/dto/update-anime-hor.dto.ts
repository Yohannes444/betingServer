import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeHorDto } from './create-anime-hor.dto';

export class UpdateAnimeHorDto extends PartialType(CreateAnimeHorDto) {}
