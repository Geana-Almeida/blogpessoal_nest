import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Geana Almeida","https://github.com/Geana-Almeida","geana.almeida2000@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());//habilitamos a biblioteca de validação, para verificar os dados globalmente.

  app.enableCors();//utilizar o back-end com o front.
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
