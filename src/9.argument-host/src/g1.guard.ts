import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './role';

@Injectable()
export class G1Guard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 拿元数据
    const roles = this.reflector.get<Role[]>('roles', context.getHandler());
    console.log(roles);

    // if (roles.includes('admin')) {
    //   return true;
    // }

    return false;
  }
}
