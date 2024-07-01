import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const now = new Date();
    const currentTime = now;

    const timeDetails = { 
      time: currentTime, 
      year: now.getUTCFullYear(), 
      month: now.getUTCMonth() + 1, // Months are 0-indexed
      day: now.getUTCDate(), 
      hour: now.getUTCHours(), 
      minute: now.getUTCMinutes(), 
      second: now.getUTCSeconds() 
    };

    return timeDetails;
  }
}
