import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Backend documentation')
    .setDescription('The store API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT');
  const PROTOCOL = configService.get('PROTOCOL');
  const HOST = configService.get('HOST');
  const SWAGGER_URL = configService.get('SWAGGER_URL');

  await app.listen(PORT, () => {
    console.log(`Server started at ${PROTOCOL}://${HOST}:${PORT}`);
    console.log(`Swagger address ${PROTOCOL}://${HOST}:${PORT}/${SWAGGER_URL}`);
  });
}
bootstrap();
