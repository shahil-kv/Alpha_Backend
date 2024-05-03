import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const APP = await NestFactory.create(AppModule);
  const CONFIG = new DocumentBuilder()
    .setTitle('Alpha')
    .setDescription('Alpha Backend REST APIs')
    .setVersion('1.0.0')
    .addTag('Alpha')
    .build();
  const DOCUMENT = SwaggerModule.createDocument(APP, CONFIG);
  SwaggerModule.setup('/', APP, DOCUMENT);
  // APP.setGlobalPrefix('api');
  await APP.listen(process.env.PORT ?? 3000);
}
bootstrap();
