import { PartialType } from '@nestjs/mapped-types';
import { CreateGrayhornDto } from './create-grayhorn.dto';

export class UpdateGrayhornDto extends PartialType(CreateGrayhornDto) {}
