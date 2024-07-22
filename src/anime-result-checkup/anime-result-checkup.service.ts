import { CreateAnimeResultCheckupDto } from './dto/create-anime-result-checkup.dto';
import { UpdateAnimeResultCheckupDto } from './dto/update-anime-result-checkup.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as XLSX from 'xlsx';
import { AnimeResultCheckupDocument, AnimeResultCheckup } from './entities/anime-result-checkup.entity'
@Injectable()
export class AnimeResultCheckupService {

  constructor(@InjectModel('AnimeResultCheckup') private ticketModel: Model<AnimeResultCheckupDocument>) {}

  
  async saveTicketsFromExcel(file: Express.MulterFile) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    const tickets = jsonData.map(data => ({
      gameId: data['Game ID'],
      tiketerId: data['Ticketer ID'],
      first: data['First'],
      second: data['Second'],
      type: data['Type'],
      firstOdd: data['First Odd'],
      secondOdd: data['Second Odd'],
    }));

    return this.ticketModel.insertMany(tickets);
  }

  async compareResults(file: Express.MulterFile, date: Date) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
  
    const otherResults = jsonData.map(data => ({
      gameId:`${ data['Game ID']}`,
      tiketerId: data['Ticketer ID'],
      first: data['First'],
      second: data['Second'],
      type: data['Type'],
      firstOdd: data['First Odd'],
      secondOdd: data['Second Odd'],
    }));
  
    // Define the start and end of the date
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
   
  
    // Find documents with createdAt within the specified date range
    const trueResults = await this.ticketModel.find({
      createdAt: { $gte: startOfDay},
    }).exec();
    return { trueResults, otherResults };
  }
  
  create(createAnimeResultCheckupDto: CreateAnimeResultCheckupDto) {
    return 'This action adds a new animeResultCheckup';
  }

  findAll() {
    return `This action returns all animeResultCheckup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animeResultCheckup`;
  }

  update(id: number, updateAnimeResultCheckupDto: UpdateAnimeResultCheckupDto) {
    return `This action updates a #${id} animeResultCheckup`;
  }

  remove(id: number) {
    return `This action removes a #${id} animeResultCheckup`;
  }
}
