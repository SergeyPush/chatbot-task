import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  @IsInt()
  width: number;
  @IsInt()
  @IsNotEmpty()
  height: number;
}
