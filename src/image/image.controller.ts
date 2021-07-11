import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { SearchImageDto } from './dto/search-image.dto';

@Controller()
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Post('/upload/dog/image')
  async postImage(@Body() body: CreateImageDto) {
    return this.imageService.saveImage(body);
  }

  @Get('/list/dog/images')
  async getAllImages(@Query() params: SearchImageDto) {
    console.log(params);
    return this.imageService.getAllImages(params);
  }
}
