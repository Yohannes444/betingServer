import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const configService= app.get(ConfigService);
  const port= configService.get('port');


  app.enableCors({
    origin: ['http://localhost:5173','http://localhost:5174'], // Frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(5454,()=>{
    console.log("server is runing on port 5454")
  });
}

bootstrap();
