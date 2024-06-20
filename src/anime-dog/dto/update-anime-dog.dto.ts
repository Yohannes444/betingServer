import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeDogDto } from './create-anime-dog.dto';

export class UpdateAnimeDogDto extends PartialType(CreateAnimeDogDto) {}
