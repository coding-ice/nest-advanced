import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { FException } from './FException';

@Catch(FException)
export class F1Filter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const type = host.getType();
    if (type === 'http') {
      const ctx = host.switchToHttp();
      const request = ctx.getRequest<Request>();
      const response = ctx.getResponse<Response>();

      response.status(500).json({
        ...exception,
      });
    } else if (type === 'ws') {
    } else if (type === 'rpc') {
    }
  }
}
