import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from 'src/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfing from 'src/ormconfig';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfing), TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
