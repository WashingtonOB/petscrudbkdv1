import { PartialType } from '@nestjs/mapped-types';
import { CreateAgendDto } from './create-agend.dto';

export class UpdateAgendDto extends PartialType(CreateAgendDto) {}
