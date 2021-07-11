import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: `${path}/public`,
      serveRoot: '/public',
    }),
    TypeOrmModule.forFeature([Image]),
  ],
  controllers: [ImageController],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
