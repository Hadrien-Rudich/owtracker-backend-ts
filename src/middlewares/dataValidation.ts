import { Request, Response, NextFunction } from 'express';
import Joi, { ObjectSchema } from 'joi';
import type { UserCredentialsI } from '../models/user/user';
export const validateData = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      console.log(error);
      return res.status(422).json({ error });
    }
  };
};

export const userSchema = {
  userObject: Joi.object<UserCredentialsI>({
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
};
