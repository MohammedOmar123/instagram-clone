import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ValidationParamPipe implements PipeTransform {
  async transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value);
    if (isNaN(val) || val < 1) {
      throw new BadRequestException('Please enter positive id');
    }
    return val;
  }
}
