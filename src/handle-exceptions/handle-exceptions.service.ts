import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

@Injectable()
export class HandleExceptionsService {
  handleExceptions(error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      throw new BadRequestException(error.message);
    }
    throw new InternalServerErrorException(`Check server logs`);
  }
}
