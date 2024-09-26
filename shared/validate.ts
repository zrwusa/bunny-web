import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const validateByDto = async (DtoClass: new (...args:[any]) => any , data: object) => {
  const productDto = plainToInstance(DtoClass, data);
  const errors = await validate(productDto);
  if (errors.length > 0) {
    return {success: false, errors};
  }
  return {success: true};
};
