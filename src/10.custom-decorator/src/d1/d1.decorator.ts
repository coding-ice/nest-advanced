import { SetMetadata } from '@nestjs/common';

export const D1 = (...args: string[]) => SetMetadata('d1', args);
