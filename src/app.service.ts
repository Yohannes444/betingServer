import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string { 
    const currentTime = new Date().toISOString();
    return  `${currentTime}` ;
  }
}
