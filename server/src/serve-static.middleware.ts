import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { join } from 'path';

@Injectable()
export class ServeStaticMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(`Request URL: ${req.originalUrl}`);
    const { baseUrl } = req;
    if (baseUrl.startsWith('/api')) {
      console.log('Forwarding API request');
      next();
    } else {
      console.log('Serving static file');
      res.sendFile(join(__dirname, '../../../', 'client/build', 'index.html'));
    }
  }
}