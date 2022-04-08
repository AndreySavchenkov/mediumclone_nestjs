import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from 'src/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfing from 'src/ormconfig';
import { UserModule } from 'src/user/user.module';
import { AuthMiddleware } from 'src/user/middlewares/auth-middleware.service';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfing), TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
