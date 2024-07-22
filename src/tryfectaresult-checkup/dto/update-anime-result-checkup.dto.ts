import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeResultCheckupDto } from './create-anime-result-checkup.dto';

export class UpdateAnimeResultCheckupDto extends PartialType(CreateAnimeResultCheckupDto) {}
