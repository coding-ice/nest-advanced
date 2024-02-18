import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface OrderModuleOptions {
  name: string;
  age: number;
}

// export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
//   new ConfigurableModuleBuilder<OrderModuleOptions>()
//     .setClassMethodName('forRoot')
//     .build();

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<OrderModuleOptions>()
    .setClassMethodName('register')
    .setExtras({ isGlobal: true }, (definition, extras) => {
      return { ...definition, global: extras.isGlobal };
    })
    .build();
