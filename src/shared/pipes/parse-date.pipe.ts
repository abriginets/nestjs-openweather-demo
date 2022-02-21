import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

dayjs.extend(customParseFormat);

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: unknown): Date {
    if (!value) {
      return value as Date;
    }

    const date = dayjs(value as string, 'YYYY-MM-DD', true);

    if (!date.isValid()) {
      throw new BadRequestException('Date must be in ISO8601 format (i.e. YYYY-MM-DD)');
    }

    return date.toDate();
  }
}
