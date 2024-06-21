import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { WebModule } from './web/web.module';
import { StartupModule } from './startup/startup.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'assets'), // путь к папке assets
      serveRoot: '/assets', // Этот URL будет использоваться для доступа к статическим файлам
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', 'client/build'), // Путь к статическим файлам React
      serveRoot: '/', // Этот URL будет использоваться для доступа к статическим файлам React
    }),
    WebModule,
    StartupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}