import Joi from 'joi';
import { Game } from '../../../models/map/game';
export const GamesSchema = {
  create: Joi.object<Game.New>({
    user: Joi.number().required(),
    profile: Joi.string().required(),
    result: Joi.string().required(),
    map: Joi.string().required(),
    mapType: Joi.string().required(),
    mapImageUrl: Joi.string().required(),
    heroes: Joi.array().items(Joi.string()).required(),
    heroesImageUrl: Joi.array().items(Joi.string()).required(),
  }),

  update: Joi.object<Game.Update>({
    profile: Joi.string(),
    result: Joi.string(),
    map: Joi.string(),
    mapType: Joi.string(),
    mapImageUrl: Joi.string(),
    heroes: Joi.array().items(Joi.string()),
    heroesImageUrl: Joi.array().items(Joi.string()),
  }),
};
