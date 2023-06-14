import { Constructor } from '@types';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { isEmptyArray } from 'formik';

import { getValidationErrorMessage } from './get-validation-error-message';
import { injectValidationError } from './inject-validation-error';

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

  const uninjectedErrors = injectValidationError(errors);

  if (isEmptyArray(uninjectedErrors)) {
    return dtoInstance;
  }

  console.log('uninjectedErrors', uninjectedErrors);

  throw new Error('Validation failed!', {
    cause: {
      error: uninjectedErrors,
      message: getValidationErrorMessage(uninjectedErrors)
    }
  });
};
