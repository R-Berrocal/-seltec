import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

@Injectable()
export class HandleExceptionsService {
  handleExceptions(error: any) {
    //Mysql unique key
    if (error.code === 'ER_DUP_ENTRY') {
      throw new BadRequestException(error.message);
    }

    //Postgres unique key
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException(`Check server logs`);
  }
}
