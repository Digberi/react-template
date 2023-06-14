import { Constructor } from '@types';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { getValidationErrorMessage } from './get-validation-error-message';

const innerValidate = async <T extends object>(dto: T | Array<T>) => {
  if (Array.isArray(dto)) {
    const errors = await Promise.all(dto.map(async value => await validate(value)));

    return errors.flat();
  }

  return await validate(dto);
};

export const createDto = async <Dto extends object>(dto: Constructor<Dto>, candidate: unknown) => {
  const dtoInstance = plainToInstance(dto, candidate);

  const errors = await innerValidate(dtoInstance);

  if (errors.length > 0) {
    throw new Error('Validation failed!', {
      cause: {
        error: errors,
        message: getValidationErrorMessage(errors)
      }
    });
  }

  return dtoInstance;
};
