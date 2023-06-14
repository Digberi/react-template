import { IsNotNanBN } from '@utils';
import { BigNumber } from 'bignumber.js';
import { Transform } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

import { IUser } from './user.interface';

export class UserDto implements Omit<IUser, 'amount'> {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  @IsEmail()
  email: string;

  @Transform(({ value }) => new BigNumber(value))
  @IsNotNanBN()
  amount: BigNumber;
}
