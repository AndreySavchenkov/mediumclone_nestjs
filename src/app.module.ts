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
import { ArticleModule } from 'src/article/article.module';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfing),
    TagModule,
    UserModule,
    ArticleModule,
    ProfileModule,
  ],
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
