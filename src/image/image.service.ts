import { Injectable } from '@nestjs/common';
import { getImageFromService } from './random-api';
import { path } from 'app-root-path';
import { writeFile } from 'fs-extra';
import { CreateImageDto } from './dto/create-image.dto';
import * as resizeImg from 'resize-img';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchImageDto } from './dto/search-image.dto';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ) {}

  async saveImage(sizes: CreateImageDto) {
    const uploadFolder = `${path}/public`;
    const { width, height } = sizes;
    const { file, fileName } = await getImageFromService();
    const imageResized = await resizeImg(file, {
      width,
      height,
    });

    await writeFile(`${uploadFolder}/${fileName}`, imageResized);

    const image = new Image();
    image.imageName = fileName;
    image.height = height;
    image.width = width;
    return this.imageRepository.save(image);
  }

  async getAllImages(params: SearchImageDto) {
    return this.imageRepository.find(params);
  }
}
