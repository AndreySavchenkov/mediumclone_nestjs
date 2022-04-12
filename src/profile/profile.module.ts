import { Module } from '@nestjs/common';
import { ProfileController } from 'src/profile/profile.controller';
import { ProfileService } from 'src/profile/profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
