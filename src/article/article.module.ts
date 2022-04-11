import { Module } from '@nestjs/common';
import { ArticleController } from 'src/article/article.controller';
import { ArticleService } from 'src/article/article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/article/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
