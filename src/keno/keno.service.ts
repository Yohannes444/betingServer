import { Injectable } from '@nestjs/common';
import { CreateKenoDto } from './dto/create-keno.dto';
import { UpdateKenoDto } from './dto/update-keno.dto';

@Injectable()
export class KenoService {
  create(createKenoDto: CreateKenoDto) {
    return 'This action adds a new keno';
  }

  findAll() {
    return `This action returns all keno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} keno`;
  }

  update(id: number, updateKenoDto: UpdateKenoDto) {
    return `This action updates a #${id} keno`;
  }

  remove(id: number) {
    return `This action removes a #${id} keno`;
  }
}
