import Joi from 'joi';
import type {
  UserCredentialsI,
  UserRegisterI,
} from '../../../models/user/user';

export const UserSchema = {
  userLogin: Joi.object<UserCredentialsI>({
    email: Joi.string().email().required(),

    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .required()
      .messages({
        'string.pattern.base': `{{#label}} must meet the following format: 1 uppercase, 1 lowercase,1 digit, 1 special char, 8 char min, 25 char max`,
      }),
  }),

  userRegister: Joi.object<UserRegisterI>({
    email: Joi.string().email().required(),
    battleTag: Joi.string()
      .pattern(/^(?=.*[#])[A-Za-z\d#]{3,20}$/)
      .required()
      .messages({
        'string.pattern.base': `{{#label}} must meet the following format: 1 #, 1 letter, 1 digit, 3 chars min, 20 chars max`,
      }),

    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/
      )
      .required()
      .messages({
        'string.pattern.base': `{{#label}} must meet the following format: 1 uppercase, 1 lowercase,1 digit, 1 special char, 8 char min, 25 char max`,
      }),
  }),
};
