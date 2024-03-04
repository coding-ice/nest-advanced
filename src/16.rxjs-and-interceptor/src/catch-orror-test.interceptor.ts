import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class CatchOrrorTestInterceptor implements NestInterceptor {
  private readonly logger = new Logger(CatchOrrorTestInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        this.logger.error(error.message, error.stack);
        return throwError(() => error);
      }),
    );
  }
}
