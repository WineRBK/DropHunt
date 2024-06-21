import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: '*', // Разрешить запросы с любых доменов
  });

  app.setGlobalPrefix('api'); // Устанавливаем глобальный префикс 'api'


  // Добавляем обработку статических файлов React приложения
  app.useStaticAssets(join(__dirname, '../../../client/build'));

  // Добавляем обработку статических файлов в папке assets
  app.useStaticAssets(join(__dirname, '../../assets'), {
    prefix: '/assets',
  });

  app.use((req, res, next) => {
    if (!req.path.startsWith('/api') && !req.path.startsWith('/assets')) {
      res.sendFile(join(__dirname, '../../../client/build', 'index.html'));
    } else {
      next();
    }
  });

  const host = process.env.HOST || 'localhost';
  await app.listen(8080); // Изменение порта на 80 и установка хоста
}
bootstrap();