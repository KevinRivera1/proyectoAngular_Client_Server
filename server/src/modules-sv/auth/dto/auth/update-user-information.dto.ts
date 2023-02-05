import { PickType } from '@nestjs/swagger';
import { UserDto } from '../users/user.dto';
//import { UserDto } from '@auth/dto';

export class UpdateUserInformationDto extends PickType(UserDto, [
  'email',
  'phone',
  'username',
]) {}
