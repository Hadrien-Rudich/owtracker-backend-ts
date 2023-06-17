import Joi from 'joi';
import type {
  UserCredentialsI,
  UserRegisterI,
} from '../../../models/user/user';

export const UserSchema = {
  userLogin: Joi.object<UserCredentialsI>({
    email: Joi.string().email().required(),
    // battleTag: Joi.string()
    //   .pattern(/^(?![0-9])[a-zA-Z0-9À-ÿ]{3,12}$/)
    //   // Must start with a char that is not a number
    //   // Can consist of alphanumeric char (upper/lowercase) and accented chars
    //   // Must have a length between 3 and 12 chars
    //   .required(),
    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      // Must have one lowercase letter
      // Must have one uppercase letter
      // Must have one digit
      // Must have one special char from the set (@$!%*?&).
      // Min length of 8 characters
      .required(),
  }),

  userRegister: Joi.object<UserRegisterI>({
    email: Joi.string().email().required(),
    battleTag: Joi.string()
      .pattern(/^(?![0-9])[a-zA-Z0-9À-ÿ]{3,12}$/)
      // Must start with a char that is not a number
      // Can consist of alphanumeric char (upper/lowercase) and accented chars
      // Must have a length between 3 and 12 chars
      .required(),
    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      // Must have one lowercase letter
      // Must have one uppercase letter
      // Must have one digit
      // Must have one special char from the set (@$!%*?&).
      // Min length of 8 characters
      .required(),
  }),
};
