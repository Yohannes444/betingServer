import { Injectable } from '@nestjs/common';
import { CreateKenoRsultDto } from './dto/create-keno-rsult.dto';
import { UpdateKenoRsultDto } from './dto/update-keno-rsult.dto';

@Injectable()
export class KenoRsultService {
  create(createKenoRsultDto: CreateKenoRsultDto) {
    return 'This action adds a new kenoRsult';
  }

  findAll() {
    return `This action returns all kenoRsult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kenoRsult`;
  }

  update(id: number, updateKenoRsultDto: UpdateKenoRsultDto) {
    return `This action updates a #${id} kenoRsult`;
  }

  remove(id: number) {
    return `This action removes a #${id} kenoRsult`;
  }
}
