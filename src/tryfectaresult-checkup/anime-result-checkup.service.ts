import { CreateAnimeResultCheckupDto } from './dto/create-anime-result-checkup.dto';
import { UpdateAnimeResultCheckupDto } from './dto/update-anime-result-checkup.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as XLSX from 'xlsx';
import { AnimeResultCheckupDocument, TryfectaResultCheckup } from './entities/anime-result-checkup.entity';

@Injectable()
export class AnimeResultCheckupService {
  constructor(
    @InjectModel('TryfectaResultCheckup') private ticketModel: Model<AnimeResultCheckupDocument>,
  ) {}

  async saveTicketsFromExcel(file: Express.MulterFile) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const tickets = jsonData.map(data => ({
      gameId: `${data['Game ID']}`,
      tiketerId: data['Ticketer ID'],
      first: data['First'],
      second: data['Second'],
      third: data['Third'], // Added field
      windOdd: data['Win Odd'], // Added field
      qunelaOdd: data['Quinela Odd'], // Added field
      exactOdd: data['Exact Odd'], // Added field
      tryfectaOdd: data['Tryfecta Odd'], // Added field
    }));

    return this.ticketModel.insertMany(tickets);
  }

  async compareResults(file: Express.MulterFile, date: Date) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const otherResults = jsonData.map(data => ({
      gameId: `${data['Game ID']}`,
      tiketerId: data['Ticketer ID'],
      first: data['First'],
      second: data['Second'],
      third: data['Third'], // Added field
      windOdd: data['Win Odd'], // Added field
      qunelaOdd: data['Quinela Odd'], // Added field
      exactOdd: data['Exact Odd'], // Added field
      tryfectaOdd: data['Tryfecta Odd'], // Added field
    }));

    // Define the start and end of the date
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));

    // Find documents with createdAt within the specified date range
    const trueResults = await this.ticketModel.find({
      createdAt: { $gte: startOfDay, $lte: endOfDay },
    }).exec();

    return { trueResults, otherResults };
  }

  create(createAnimeResultCheckupDto: CreateAnimeResultCheckupDto) {
    return this.ticketModel.create(createAnimeResultCheckupDto);
  }

  findAll() {
    return this.ticketModel.find().exec();
  }

  async findOne(id: string) {
    return this.ticketModel.findById(id).exec();
  }

  async update(id: string, updateAnimeResultCheckupDto: UpdateAnimeResultCheckupDto) {
    return this.ticketModel.findByIdAndUpdate(id, updateAnimeResultCheckupDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.ticketModel.findByIdAndDelete(id).exec();
  }
}
