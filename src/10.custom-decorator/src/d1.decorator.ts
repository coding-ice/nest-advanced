import { SetMetadata } from '@nestjs/common';

export const SetRoleType = (...args: string[]) => SetMetadata('roleType', args);
