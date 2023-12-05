import { PartialType } from '@nestjs/mapped-types';
import { CreateIncomeHistoryDto } from './create-income-history.dto';

export class UpdateIncomeHistoryDto extends PartialType(CreateIncomeHistoryDto) {}
