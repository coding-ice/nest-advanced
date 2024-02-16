import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const IceHeaders = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const headers = request.headers;
    const data = key ? headers[key.toLowerCase()] : headers;

    return data;
  },
);

export const IceQuery = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const query = request.query;
    return query[key];
  },
);
